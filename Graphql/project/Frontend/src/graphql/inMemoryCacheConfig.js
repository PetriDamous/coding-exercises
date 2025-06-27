const inMemoryCacheConfig = {
  typePolicies: {
    Query: {
      fields: {
        speakersConcat: {
          read: (existing) => {
            return existing;
          },
          merge: (existing, incoming) => {
            return !existing
              ? {
                  __typename: incoming.__typename,
                  datalist: [...incoming.datalist],
                  pageInfo: { ...incoming.pageInfo },
                }
              : {
                  __typename: incoming.__typename,
                  datalist: [...existing.datalist, ...incoming.datalist],
                  pageInfo: { ...incoming.pageInfo },
                };
          },
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
