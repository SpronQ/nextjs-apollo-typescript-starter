import React from 'react';

import { GetBookShelfComponent } from '../lib/graphql/types';

export default () => (
  <GetBookShelfComponent>
    {({ loading, error, data }) => (
      <pre>{JSON.stringify({ loading, error, data }, null, 4)}</pre>
    )}
  </GetBookShelfComponent>
);
