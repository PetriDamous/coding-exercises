const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    products: [Product]
  }

  type Product {
    name: String;
    id: ID;
    price: String;
  }

  type Mutation {
    addProduct(name: String, price: String): Product
  }
`;

const resolvers = {
  Product: {
    price: (parent, args, ctx, info) => {
      return parent.price;
    },
  },
  Mutation: {
    addProduct: (parent, args, ctx, info) => {
      // insert product into a database
      // addProductToDb(args.name, args.price);
    },
  },
};

const mocks = {
  Int: () => 1000,
  String: () => "hello",
  Query: () => ({
    products: () => [],
  }),
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
