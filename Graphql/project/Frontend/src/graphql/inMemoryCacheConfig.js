import { generalPagination } from "../utils";
import { checkboxIdsVar } from "./reactiveVars";

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
        sessionsConcat: { merge: generalPagination, keyArgs: false },
      },
    },
    Speaker: {
      fields: {
        fullName: {
          read: (_, { readField }) => {
            return `${readField("first")} ${readField("last")}`;
          },
        },
        isChecked: (_, { readField }) => {
          const currentCheckboxIds = checkboxIdsVar();

          return !!currentCheckboxIds.find(
            (currentCheckboxId) => currentCheckboxId === readField("id")
          );
        },
      },
    },
  },
};

export default inMemoryCacheConfig;
