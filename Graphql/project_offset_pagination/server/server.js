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

  input CreateSpeakerInput {
    twitterHandle: String
    company: String
    bio: String
    first: String!
    last: String!
    favorite: Boolean
  }

  input UpdateSpeakerInput {
    id: ID!
    twitterHandle: String
    company: String
    bio: String
    first: String
    last: String
    favorite: Boolean
  }

  type PageInfo {
    totalItemCount: Int
  }

  type SpeakerResults {
    dataSet: [Speaker]
    pageInfo: PageInfo
  }

  type Query {
    speakers(offset: Int = 0, limit: Int = -1): SpeakerResults
    speaker(speakerId: ID!): Speaker
  }

  type Mutation {
    addSpeaker(createSpeakerInput: CreateSpeakerInput!): Speaker
    deleteSpeaker(speakerId: ID!): Speaker
    toggleFavSpeaker(speakerId: ID!): Speaker
    updateSpeaker(updateSpeakerInput: UpdateSpeakerInput!): Speaker!  
  }
`;

const getAllSpeakers = () => axios.get("http://localhost:5000/speakers");

const getSpeaker = (speakerId) =>
  axios.get(`http://localhost:5000/speakers/${speakerId}`);

const resolvers = {
  Query: {
    speakers: async (parent, args, context, info) => {
      const { data: speakers } = await getAllSpeakers();

      return {
        dataSet: speakers,
      };
    },
    speaker: async (parent, args, context, info) => {
      const { speakerId } = args;

      const { data: speaker } = await getSpeaker(speakerId);

      return speaker;
    },
  },
  Mutation: {
    addSpeaker: async (parent, args, context, info) => {
      const { createSpeakerInput } = args;

      const { first, last } = createSpeakerInput;

      const { data: speakers } = await getAllSpeakers();

      const speakerExist = speakers.find(
        (speaker) => speaker.first === first && speaker.last === last
      );

      if (speakerExist) {
        throw new Error("User already exists");
      }

      const reFetchId = randomUUID();

      const newSpeaker = {
        ...createSpeakerInput,
        favorite: createSpeakerInput?.favorite || false,
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

      const { data: speaker } = await getSpeaker(speakerId);

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
    updateSpeaker: async (parent, args, context, info) => {
      const { updateSpeakerInput } = args;

      const { id } = updateSpeakerInput;

      const { data: speaker } = await getSpeaker(id);

      const updatedSpeaker = {
        id,
        first: updateSpeakerInput?.first || speaker.first,
        last: updateSpeakerInput?.last || speaker.last,
        favorite:
          typeof updateSpeakerInput?.favorite === "boolean"
            ? updateSpeakerInput?.favorite
            : speaker.favorite,
      };

      const { data } = await axios.put(
        `http://localhost:5000/speakers/${id}`,
        updatedSpeaker
      );

      return data;
    },
  },
};

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const serverStartConfig = {
    listen: { port: 4000 },
    // context: async ({ req, res }) => ({
    //   getAllSpeakers: await axios.get("http://localhost:5000/speakers"),
    // }),
  };

  const { url } = await startStandaloneServer(server, serverStartConfig);

  console.log(`🚀  Server ready at: ${url}`);
};

startServer();
