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

          // If array is returend !! will convert to boolean of true since a reaturend [] is truthy.

          // If id is not matched in false is returned !! will still return the boolean of false.
          return !!currentCheckboxIds.find(
            (currentCheckboxId) => currentCheckboxId === readField("id")
          );
        },
      },
    },
  },
};

export default inMemoryCacheConfig;
