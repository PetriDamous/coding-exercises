const { ApolloServer, gql, MockList } = require("apollo-server");
const { buildClientSchema } = require("graphql");
const faker = require("faker");
const schemaResult = require("./introspection-query.json");

const schema = buildClientSchema(schemaResult.data);

const typeDefs = gql`
  type Query {
    stories: [Story!]!
  }

  type Story {
    id: ID!
    name: String!
    image: String!
    description: String!
    extra: String
    reviews: [[Ratings]]
  }

  type Ratings {
    lowestRating: Int
    highestRating: Int
    date: String
  }

  type Mutation {
    editStoryName(id: ID!, name: String!): Story
  }
`;

const resolvers = {
  Query: require("./resolvers/Query"),
  Story: {
    extra: () => {
      return new Error("this is not a real field");
    },
  },
  Mutation: require("./resolvers/Mutation"),
};

const mocks = {
  Query: () => ({
    stories: () => new MockList([6, 12]),
  }),
  Story: () => ({
    name: () => faker.company.catchPhrase(),
    description: () => faker.lorem.sentence(),
    image: () => faker.image.nature(200, 400, true),
    reviews: () => new MockList(3, () => new MockList([1, 3])),
  }),
  Ratings: () => ({
    date: () => faker.date.past(),
    lowestRating: () => faker.random.arrayElement([1, 2, 3, 4, 5]),
    highestRating: () => faker.random.arrayElement([1, 2, 3, 4, 5]),
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
