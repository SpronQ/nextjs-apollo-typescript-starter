import React from 'react';
import Link from 'next/link';

export default () => (
  <ul>
    <li>
      <Link href="/apollo">Apollo</Link>
    </li>
    <li>
      <Link href="/material-ui">material-ui</Link>
    </li>
    <li>
      <Link href="/styled-components">styled-components</Link>
    </li>
    <li>
      <Link href="/baseline">styled-components + responsive modular scale</Link>
    </li>
  </ul>
);
