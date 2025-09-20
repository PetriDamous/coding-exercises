import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLError } from "graphql";
import { ApolloServerErrorCode } from "@apollo/server/errors";
import axios from "axios";
import DataLoader from "dataloader";

const typeDefs = `#graphql
  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
    inheritMaxAge: Boolean
  ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION


  type Room {
    id: ID!
    name: String
    capacity: Int
  }

  type Speaker @cacheControl (maxAge: 3600) { # Cache the entire speaker type for 3600 seconds. By default this is PUBLIC caching so anything all intermediate caching on the net can participate in caching (such as CDNs, browser caching, proxy servers, etc)
      id: ID!
      first: String
      last: String
      favorite: Boolean @cacheControl (maxAge: 5, scope: PRIVATE) # Only favorite is cached for 5 seconds. PRIVATE scope means only the users browswer is used for caching.
      firstLast: String
      cursor: String
      sessions: [Session] @cacheControl (maxAge: 600) # Caches only sessions for 10 min or 600 seconds. PUBLIC by default.
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
    room: Room
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

      const url = `/speakers/${speakerId}`;

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
  Session: {
    room: async (parent, _, context) => {
      const roomId = parent.roomId;

      const roomRec = context.roomLoader.load(roomId);

      return roomRec;
    },
  },
  Speaker: {
    firstLast: (parent, args, context, info) =>
      `${parent.first} ${parent.last}`,
    sessions: async (parent, _, context, info) => {
      info.cacheControl.setCacheHint({ maxAge: 600, scope: "PUBLIC" });

      const speakerId = parent.id;

      return context.sessionsLoader.load(speakerId);
    },
  },
};

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    cacheControl: {
      defaultMaxAge: 5, // Sets everything in server to be cached for 5 seconds
    },
    context: async () => ({
      speakersAPI: axios.create({
        baseURL: "http://localhost:5000",
      }),
      roomLoader: new DataLoader(async (roomIds) => {
        const responseRooms = await axios.get("http://localhost:5000/rooms");

        const roomMap = {};

        responseRooms.data.forEach((room) => {
          roomMap[room.id] = room;
        });

        return roomIds.map((roomId) => {
          return roomMap[roomId];
        });
      }),
      sessionsLoader: new DataLoader(async (speakerIds) => {
        const [responseSessions, responseSessionSpeakers] = await Promise.all([
          axios.get("http://localhost:5000/sessions"),
          axios.get("http://localhost:5000/sessionSpeakers"),
        ]);

        const allSessions = responseSessions.data;
        const allSessionSpeakers = responseSessionSpeakers.data;

        // Build a map: speakerId -> [sessionId]
        const speakerToSessionIds = {};
        allSessionSpeakers.forEach(({ speakerId, sessionId }) => {
          if (!speakerToSessionIds[speakerId]) {
            speakerToSessionIds[speakerId] = [];
          }
          speakerToSessionIds[speakerId].push(sessionId);
        });

        // Build a map: sessionId -> session
        const sessionMap = {};
        allSessions.forEach((session) => {
          sessionMap[session.id] = session;
        });

        // Return sessions for each speakerId in order
        return speakerIds.map((speakerId) => {
          const sessionIds = speakerToSessionIds[speakerId] || [];
          return sessionIds.map((id) => sessionMap[id]).filter(Boolean);
        });
      }),
    }),
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
};

startServer();
