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

export const getAllSpeakersFromCache = (cache) => {
  const normalizedCacheData = cache.data.data;

  let allSpeakers = [];

  Object.keys(normalizedCacheData).forEach((key) => {
    if (key.startsWith("Speaker:")) {
      allSpeakers.push(normalizedCacheData[key]);
    }
  });

  return allSpeakers;
};
