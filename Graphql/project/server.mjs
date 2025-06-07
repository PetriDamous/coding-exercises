import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLError } from "graphql";
import { ApolloServerErrorCode } from "@apollo/server/errors";
import axios from "axios";

const typeDefs = `#graphql
    type Speaker {
        id: ID!
        first: String
        last: String
        favorite: Boolean
        firstLast: String
    }

    type SpeakerResults {
        datalist: [Speaker]
    }

    input SpeakerInput {
      first: String
      last: String
      favorite: Boolean
    }

    type Query {
        speakers: SpeakerResults
    }

    type Mutation {
      addSpeaker(input: SpeakerInput): Speaker
      toggleSpeakerFavorite(speakerId: ID!):Speaker
      deleteSpeaker(speakerId: ID!): Speaker
    }
`;

const resolvers = {
  Query: {
    speakers: async (parent, args, context, info) => {
      const speakers = await context.speakersAPI.get();

      return { datalist: speakers.data };
    },
  },
  Mutation: {
    addSpeaker: async (parent, args, context, info) => {
      const { first, last, favorite } = args.input;

      let res = await context.speakersAPI.get();

      const recFound = res.data.find(
        (speaker) => speaker.first === first && speaker.last === last
      );

      if (recFound) {
        throw new GraphQLError("Speaker already exists", {
          extenstions: {
            code: ApolloServerErrorCode.BAD_USER_INPUT,
            invalidArgs: { first, last },
          },
        });
      }

      res = await context.speakersAPI.post("", { first, last, favorite });

      return res.data;
    },
    deleteSpeaker: async (parent, args, context, info) => {
      const { speakerId } = args;

      const url = `/${speakerId}`;

      const res = await context.speakersAPI.delete(url);

      return res.data;
    },
    toggleSpeakerFavorite: async (parent, args, context, info) => {
      const { speakerId } = args;

      const url = `/${speakerId}`;

      const res = await context.speakersAPI.get(url);

      const { data } = res;

      const updatedSpeaker = {
        ...data,
        favorite: !data.favorite,
      };

      await context.speakersAPI.put(url, updatedSpeaker);

      return updatedSpeaker;
    },
  },
  Speaker: {
    firstLast: (parent, args, context, info) =>
      `${parent.first} ${parent.last}`,
  },
};

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    context: async () => ({
      speakersAPI: axios.create({
        baseURL: "http://localhost:5000/speakers",
      }),
    }),
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
};

startServer();
