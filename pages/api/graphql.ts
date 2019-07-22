import { ApolloServer } from "apollo-server-micro";
import { importSchema } from "graphql-import";

const typeDefs = importSchema("./schema.graphql");
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
