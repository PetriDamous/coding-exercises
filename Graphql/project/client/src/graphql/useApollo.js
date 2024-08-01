import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const currentThemeVar = makeVar("dark");

const useApollo = () => {
  const inMemoryCacheConfig = {
    typePolicies: {
      Query: {
        fields: {
          speakers: {
            merge(existing = [], incoming = [], { mergeObjects }) {
              return incoming;
            },
          },
        },
      },
      Speaker: {
        fields: {
          fullName: {
            read(__, { readField }) {
              return `${readField("first")} ... ${readField("last")}`;
            },
          },
        },
      },
    },
  };

  return new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(inMemoryCacheConfig),
  });
};

export default useApollo;
