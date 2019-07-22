import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    sayHello: Book
    sayGoodbye: String
  }
`;

const resolvers = {
  Query: {
    sayHello() {
      return { title: "hey you", author: "author" };
    },
    sayGoodbye() {
      return "Byebye World!";
    }
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
