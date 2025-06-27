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
        cursor: String
        sessions: [Session]
    }

    type PageInfo {
      totalItemCount: Int
      lastCursor: String
      hasNextPage: Boolean
    }

    type SpeakerResults {
        datalist: [Speaker]
        pageInfo: PageInfo
    }

    input SpeakerInput {
      first: String
      last: String
      favorite: Boolean      
    }

    type Session {
      id: ID!
      title: String!
      eventYear: String
      cursor: String
    }

    type SesssionResults {
      datalist: [Session]
      pageInfo: PageInfo
    }

    type Query {
        speakers(offset: Int = 0, limit: Int = -1): SpeakerResults
        speakersConcat(limit: Int = -1, afterCursor: String = ""): SpeakerResults
        sessionsConcat(limit: Int = -1, afterCursor: String = ""): SesssionResults
    }

    type Mutation {
      addSpeaker(input: SpeakerInput): Speaker
      toggleSpeakerFavorite(speakerId: ID!):Speaker
      deleteSpeaker(speakerId: ID!): Speaker
    }
`;

const getCursor = (cursor) => Buffer.from(cursor.toString()).toString("base64");

const getOffsetCustom = (data, afterCursor) => {
  const offsetBasedOnFind = data.findIndex(
    (rec) => getCursor(rec.id) === afterCursor
  );
  return offsetBasedOnFind === -1 ? 0 : offsetBasedOnFind + 1;
};

const resolvers = {
  Query: {
    speakers: async (parent, args, context, info) => {
      const { offset, limit } = args;

      const speakers = await context.speakersAPI.get("/speakers");

      const paginatedSpeakers = speakers.data.filter((speaker, index) => {
        return index > offset - 1 && (offset + limit > index || limit === -1);
      });

      return {
        datalist: paginatedSpeakers,
        pageInfo: { totalItemCount: speakers.data.length },
      };
    },
    speakersConcat: async (parent, args, context, info) => {
      const { limit, afterCursor } = args;

      const speakers = await context.speakersAPI.get("/speakers");

      const sortedSpeakers = speakers.data.sort((a, b) => {
        return a.last.localeCompare(b);
      });

      const offset = getOffsetCustom(sortedSpeakers, afterCursor);

      const datalist = sortedSpeakers
        .filter((speaker, index) => {
          return index > offset - 1 && (offset + limit > index || limit === -1);
        })
        .map((rec) => {
          rec.cursor = getCursor(rec.id);
          return rec;
        });

      const pageInfo = {
        totalItemCount: sortedSpeakers.length,
        lastCursor:
          datalist.length > 0
            ? getCursor(datalist[datalist.length - 1].id)
            : "",
        hasNextPage: offset + datalist.length < sortedSpeakers.length,
      };

      return {
        datalist,
        pageInfo,
      };
    },
    sessionsConcat: async (parent, args, context, info) => {
      const response = await context.speakersAPI.get("/sessions");

      const responseSorted = response.data.sort((a, b) => {
        return a.eventYear.localeCompare(b);
      });

      const { limit, afterCursor } = args;
      const offset = getOffsetCustom(responseSorted, afterCursor);

      const datalist = responseSorted
        .filter((rec, index) => {
          return index > offset - 1 && (offset + limit > index || limit === -1);
        })
        .map((rec) => {
          rec.cursor = getCursor(rec.id);
          return rec;
        });

      const pageInfo = {
        totalItemCount: response.data.length,
        lastCursor:
          datalist.lenggth > 0
            ? getCursor(datalist[datalist.length - 1].id)
            : "",
        hasNextPage: offset + datalist.length < response.data.length,
      };

      return {
        datalist,
        pageInfo,
      };
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
    sessions: async (parent, _, context) => {
      const speakerId = parent.id;

      const speakers = await context.speakersAPI.get("/speakers");

      const sessions = await context.speakersAPI.get("/sessions");

      const sessionIds = speakers.data
        .filter((rec) => {
          return rec.speakerId === speakerId;
        })
        .map((rec) => {
          return rec.sessionId;
        });

      const sessionsResult = sessions.data
        .filter((rec) => {
          return sessionIds.includes(rec.id);
        })
        .sort((a, b) => b.eventYear.localeComparte(a.eventYear));

      return sessionsResult;
    },
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
        baseURL: "http://localhost:5000",
      }),
    }),
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
};

startServer();
