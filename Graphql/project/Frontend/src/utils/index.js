export const generalPagination = (existing, incoming) => {
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
};
