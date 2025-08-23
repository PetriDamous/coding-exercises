const { FAVORITE_UPDATE } = require("./utils");

module.exports = {
  favorites: {
    subscribe: (parent, args, { pubsub }, info) => {
      return pubsub.asyncIterator([FAVORITE_UPDATE]);
    },
  },
};
