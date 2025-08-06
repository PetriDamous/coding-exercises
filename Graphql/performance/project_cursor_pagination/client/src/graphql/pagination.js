export const generalConcatPagination = () => {
  return {
    merge(existing, incoming) {
      return !existing
        ? {
            __typename: incoming.__typename,
            dataSet: [...incoming.dataSet],
            pageInfo: { ...incoming.pageInfo },
          }
        : {
            __typename: incoming.__typename,
            dataSet: [...existing.dataSet, ...incoming.dataSet],
            pageInfo: { ...incoming.pageInfo },
          };
    },
    keyArgs: false,
  };
};
