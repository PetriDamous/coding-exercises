import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
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
  }

  type Query {
    speakers: [Speaker]
    speaker(speakerId: ID!): Speaker
  }
`;

const getAllSpeakers = () => axios.get("http://localhost:5000/speakers");

const resolvers = {
  Query: {
    speakers: async (parent, args, context, info) => {
      const response = await getAllSpeakers();

      return response.data;
    },
    speaker: async (parent, args, context, info) => {
      const { speakerId } = args;

      const response = await axios.get(
        `http://localhost:5000/speakers/${speakerId}`
      );

      return response.data;
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
