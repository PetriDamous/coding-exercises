import { generalPagination } from "../utils";

const inMemoryCacheConfig = {
  typePolicies: {
    Query: {
      fields: {
        speakersConcat: {
          read: (existing) => {
            return existing;
          },
          merge: generalPagination,
          keyArgs: false,
        },
      },
    },
    Speaker: {
      fields: {
        fullName: {
          read: (_, { readField }) => {
            return `${readField("first")} ${readField("last")}`;
          },
        },
      },
    },
  },
};

export default inMemoryCacheConfig;
