const FAVORITEUPDATES = 'FAVORITEUPDATES';

module.exports = {
  favorites: {
    subscribe: (parent, args, { pubsub, user }, info) => {
      console.log('resolvers!: ', user);
      return pubsub.asyncIterator([FAVORITEUPDATES]);
    },
  },
};
