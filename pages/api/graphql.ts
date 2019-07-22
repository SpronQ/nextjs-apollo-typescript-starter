import { ApolloServer } from 'apollo-server-micro';
import { importSchema } from 'graphql-import';

import { Resolvers } from '../../lib/graphql/resolvers-types';

const typeDefs = importSchema('./schema.graphql');

const resolvers: Resolvers = {
  Book: {
    title: () => {
      return 'my mbook';
    },
    author: () => {
      return '123';
    }
  },

  Query: {
    sayHello: () => {
      return { title: 'asdasd', author: 'Sjaak' };
    },
    sayGoodbye: () => {
      return 'Byebye World!';
    },
    getAllBooks: () => {
      return [
        { title: 'My book', author: 'JP' },
        { title: 'My second book', author: 'JP' }
      ];
    }
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: '/api/graphql' });
