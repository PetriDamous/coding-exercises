const { createTestClient } = require("apollo-server-testing");
const { ApolloServer, gql, MockList } = require("apollo-server");
const faker = require("faker");
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
  }

  type Mutation {
    editStoryName(id: ID!, name: String!): Story
  }
`;

const resolvers = {
  Query: require("./resolvers/Query"),
  Mutation: require("./resolvers/Mutation"),
};

const mocks = {
  Query: () => ({
    stories: () => new MockList(5),
  }),
  Story: () => ({
    name: () => faker.company.catchPhrase(),
    description: () => faker.lorem.sentence(),
    image: () => faker.image.nature(200, 400, true),
  }),
};

const staticMocks = {
  Query: () => ({
    stories: () => new MockList(5),
  }),
  Story: () => ({
    id: () => 2,
    name: () => "Carved Rock",
    description: () => "Carved Rock Outdoor Fitness",
    image: () => "image.png",
  }),
};

describe("Integration Test - Query", () => {
  it("should return a set of stories", async () => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      mocks,
    });

    const { query } = createTestClient(server);
    const result = await query({
      query: gql`
        query {
          stories {
            id
            name
            description
            image
          }
        }
      `,
    });
    expect(result.data.stories.length).toEqual(5);
  });

  it("Should match all snapshots", async () => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      mocks: staticMocks,
    });

    const { query } = createTestClient(server);
    const result = await query({
      query: gql`
        query {
          stories {
            id
            name
            description
            image
          }
        }
      `,
    });

    expect(result).toMatchSnapshot();
  });
});
