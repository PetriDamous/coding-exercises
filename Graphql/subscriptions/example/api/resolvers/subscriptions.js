const FAVORITE_UPDATE = "FAVORITE_UPDATE";

module.exports = {
  favorites: {
    subscribe: (parent, args, { pubsub }, info) => {
      return pubsub.asyncIterator([FAVORITE_UPDATE]);
    },
  },
};
