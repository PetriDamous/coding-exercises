import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { randomUUID } from "crypto";
import axios from "axios";
import { Buffer } from "node:buffer";

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
      cursor: String
      sessions: [Session]
  }

  type Session {
    id: ID!
    title: String!
    eventYear: String
    cursor: String
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
    lastCursor: String
    hasNextPage: Boolean
  }

  type SpeakerResults {
    dataSet: [Speaker]
    pageInfo: PageInfo
  }

  type SessionResults {
    dataSet: [Session]
    pageInfo: PageInfo
  }

  type Query {
    speaker(speakerId: ID!): Speaker
    speakers(offset: Int = 0, limit: Int = -1): SpeakerResults
    speakersConcat(limit: Int = -1, afterCursor: String = ""): SpeakerResults    
    sessionsConcat(limit: Int = -1, afterCursor: String = ""): SessionResults
  }

  type Mutation {
    addSpeaker(createSpeakerInput: CreateSpeakerInput!): Speaker
    deleteSpeaker(speakerId: ID!): Speaker
    toggleFavSpeaker(speakerId: ID!): Speaker
    updateSpeaker(updateSpeakerInput: UpdateSpeakerInput!): Speaker!  
  }
`;

const getCursor = (id) => Buffer.from(id.toString()).toString("base64");

const getOffsetCustom = (data, afterCursor) => {
  const offsetBaseOnFind = data.findIndex(
    (rec) => getCursor(rec.id) === afterCursor
  );
  return offsetBaseOnFind === -1 ? 0 : offsetBaseOnFind + 1;
};

const getAllSpeakers = () => axios.get("http://localhost:5000/speakers");

const getAll = (endPoint) => axios.get(`http://localhost:5000/${endPoint}`);

const getOne = (endPoint, id) =>
  axios.get(`http://localhost:5000/${endPoint}/${id}`);

const getSpeaker = (speakerId) =>
  axios.get(`http://localhost:5000/speakers/${speakerId}`);

const resolvers = {
  Query: {
    speakers: async (parent, args, context, info) => {
      const { offset, limit } = args;
      const { data: speakers } = await getAllSpeakers();

      return {
        dataSet: speakers.filter((rec, idx) => {
          return idx > offset - 1 && (offset + limit > idx || limit === -1);
        }),
        pageInfo: {
          totalItemCount: speakers.length,
        },
      };
    },
    speaker: async (parent, args, context, info) => {
      const { speakerId } = args;

      const { data: speaker } = await getSpeaker(speakerId);

      return speaker;
    },
    speakersConcat: async (parent, args, context, info) => {
      const { limit, afterCursor } = args;

      const { data: speakers } = await getAllSpeakers();

      const sortedSpeakers = speakers.sort((a, b) => a.last.localeCompare(b));

      const offset = getOffsetCustom(sortedSpeakers, afterCursor);

      const dataSet = sortedSpeakers
        .filter((rec, idx) => {
          return idx > offset - 1 && (offset + limit > idx || limit === -1);
        })
        .map((rec) => {
          rec.cursor = getCursor(rec.id);
          return rec;
        });

      const pageInfo = {
        totalItemCount: sortedSpeakers.length,
        lastCursor: dataSet.length > 0 ? getCursor(dataSet.at(-1).id) : "",
        hasNextPage: offset + dataSet.length < sortedSpeakers.length,
      };

      return { dataSet, pageInfo };
    },
    sessionsConcat: async (parent, args, context, info) => {
      const { limit, afterCursor } = args;

      const { data: sessions } = await getAll("sessions");

      const sortedSessions = sessions.sort((a, b) =>
        a.eventYear.localeCompare(b)
      );

      const offset = getOffsetCustom(sortedSessions, afterCursor);

      const dataSet = sortedSessions
        .filter((rec, idx) => {
          return idx > offset - 1 && (offset + limit > idx || limit === -1);
        })
        .map((rec) => {
          rec.cursor = getCursor(rec.id);
          return rec;
        });

      const pageInfo = {
        totalItemCount: sortedSessions.length,
        lastCursor: dataSet.length > 0 ? getCursor(dataSet.at(-1).id) : "",
        hasNextPage: offset + dataSet.length < sortedSessions.length,
      };

      return { dataSet, pageInfo };
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

  Speaker: {
    sessions: async (parent) => {
      const speakerId = parent.id;

      const { data: sessions } = await getAll("sessions");

      const { data: sessionSpeakers } = await getAll("sessionSpeakers");

      const sessionIds = sessionSpeakers
        .filter((rec) => {
          return rec.speakerId === speakerId;
        })
        .map((rec) => {
          return rec.sessionId;
        });

      const sessionsResult = sessions
        .filter((rec) => {
          return sessionIds.includes(rec.id);
        })
        .sort((a, b) => b.eventYear.localeCompare(a.eventYear));

      return sessionsResult;
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
