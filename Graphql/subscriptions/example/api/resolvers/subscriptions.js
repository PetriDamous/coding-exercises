const { FAVORITE_UPDATE } = require("./utils");

module.exports = {
  favorites: {
    subscribe: (parent, args, { pubsub }, info) => {
      return pubsub.asyncIterator([FAVORITE_UPDATE]);
    },
    // Resolve method to extract the actual data from the payload
    // Can be used debug or transform the data before sending to client
    resolve: (payload) => {
      return payload.favorites;
    },
  },
};
