import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
    type Speaker {
        id: ID!
        first: String
        last: String
        favorite: Boolean
    }

    type SpeakerResults {
        datalist: [Speaker]
    }

    type Query {
        speakers: SpeakerResults
    }
`;

const resolvers = {
  Query: {
    speakers: (parent, args, context, info) => {
      const speakerResults = {
        datalist: [
          { id: "1", first: "John", last: "Doe", favorite: true },
          { id: "2", first: "Jane", last: "Smith", favorite: false },
          { id: "3", first: "Alice", last: "Johnson", favorite: true },
        ],
      };

      return speakerResults;
    },
  },
  SpeakerResults: {
    datalist: (parent, args, context, info) => {
      return parent.datalist;
    },
  },
  Speaker: {
    id: (parent, args, conext, info) => parent.id,
    first: (parent, args, context, info) => parent.first,
    last: (parent, args, context, info) => parent.last,
    favorite: (parent, args, context, info) => parent.favorite,
  },
};

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
};

startServer();
