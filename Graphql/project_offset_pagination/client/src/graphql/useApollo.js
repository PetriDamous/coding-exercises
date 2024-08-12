import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const currentThemeVar = makeVar("dark");
export const checkBoxColumsVar = makeVar([]);

const useApollo = () => {
  const inMemoryCacheConfig = {
    typePolicies: {
      Query: {
        fields: {
          speakers: {
            merge(__, incoming = []) {
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
          checkBoxColumn: {
            read(__, { readField }) {
              const speakerId = readField("id");

              const checkedSpeakerIds = checkBoxColumsVar();

              return checkedSpeakerIds.find(
                (checkedSpeakerId) => checkedSpeakerId === speakerId
              )
                ? true
                : false;
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
