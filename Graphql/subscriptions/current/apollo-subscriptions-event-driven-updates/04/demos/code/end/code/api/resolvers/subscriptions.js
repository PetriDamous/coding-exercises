const FAVORITEUPDATES = "FAVORITEUPDATES";

module.exports = {
  favorites: {
    subscribe: (parent, args, { pubsub, user }, info) => {
      // authenticated user that was verified from connection.context
      console.log("resolvers!: ", user);
      return pubsub.asyncIterator([FAVORITEUPDATES]);
    },
  },
};
