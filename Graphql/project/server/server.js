import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { randomUUID } from "crypto";
import axios from "axios";

const typeDefs = `#graphql
  type Speaker {
      twitterHandle: String
      company: String
      id: ID!,
      bio: String
      first: String
      last: String
      favorite: Boolean
      reFetchId: String
  }

  input SpeakerInput {
    twitterHandle: String
    company: String
    bio: String
    first: String!
    last: String!
    favorite: Boolean
  }

  type Query {
    speakers: [Speaker]
    speaker(speakerId: ID!): Speaker
  }

  type Mutation {
    addSpeaker(speakerInput: SpeakerInput!): Speaker
    deleteSpeaker(speakerId: ID!): Speaker
    toggleFavSpeaker(speakerId: ID!): Speaker
   
  }
`;

const getAllSpeakers = () => axios.get("http://localhost:5000/speakers");

const getSpeaker = (speakerId) =>
  axios.get(`http://localhost:5000/speakers/${speakerId}`);

const resolvers = {
  Query: {
    speakers: async (parent, args, context, info) => {
      const { data: speakers } = await getAllSpeakers();

      return speakers;
    },
    speaker: async (parent, args, context, info) => {
      const { speakerId } = args;

      const { data: speaker } = await getSpeaker(speakerId);

      return speaker;
    },
  },
  Mutation: {
    addSpeaker: async (parent, args, context, info) => {
      const { speakerInput } = args;

      const { first, last } = speakerInput;

      const { data: speakers } = await getAllSpeakers();

      const speakerExist = speakers.find(
        (speaker) => speaker.first === first && speaker.last === last
      );

      if (speakerExist) {
        throw new Error("User already exists");
      }

      const reFetchId = randomUUID();

      const newSpeaker = {
        ...speakerInput,
        favorite: speakerInput?.favorite || false,
        reFetchId,
      };

      await axios.post("http://localhost:5000/speakers", newSpeaker);

      const { data: reFetchSpeakers } = await getAllSpeakers();

      const reFetchedNewSpeaker = reFetchSpeakers.find(
        (reFetchSpeaker) => reFetchSpeaker?.reFetchId === reFetchId
      );

      return reFetchedNewSpeaker;
    },
    deleteSpeaker: async (parent, args, context, info) => {
      const { speakerId } = args;

      const speaker = await getSpeaker(speakerId);

      axios.delete(`http://localhost:5000/speakers/${speakerId}`);

      return speaker;
    },
    toggleFavSpeaker: async (parent, args, context, info) => {
      const { speakerId } = args;

      const { data: speaker } = await getSpeaker(speakerId);

      const updatedSpeaker = {
        ...speaker,
        favorite: !speaker.favorite,
      };

      axios.put(`http://localhost:5000/speakers/${speakerId}`, updatedSpeaker);

      return updatedSpeaker;
    },
  },
};

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    // context: async ({ req, res }) => ({
    //   getAllSpeakers: await axios.get("http://localhost:5000/speakers"),
    // }),
  });

  console.log(`🚀  Server ready at: ${url}`);
};

startServer();
