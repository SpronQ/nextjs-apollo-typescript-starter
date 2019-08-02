import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { Query as TSQuery } from '../../lib/graphql/types';

const SAY_HELLO = gql`
  query HelloQuery {
    sayHello {
      title
      author
    }
  }
`;

export default () => (
  <Query query={SAY_HELLO}>
    {({
      loading,
      data = {} || {}
    }: {
      loading: any;
      data: TSQuery['sayHello'];
    }) => {
      let d: any = data;
      if (data === null) {
        d = {};
      }

      return (
        <>
          {d.title}
          <pre>{JSON.stringify({ loading, d }, null, 4)}</pre>
        </>
      );
    }}
  </Query>
);
