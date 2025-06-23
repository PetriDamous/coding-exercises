const inMemoryCacheConfig = {
  typePolicies: {
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
