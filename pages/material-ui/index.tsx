import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';

import ProTip from '../../lib/components/ProTip';
import Link from '../../lib/components/Link';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Material-UI
      </MuiLink>
      {' team.'}
    </Typography>
  );
}

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/material-ui/examples/sign-in" color="secondary">
          Example sign in page
        </Link>
        <br />
        <Link href="/material-ui/examples/sign-up" color="secondary">
          Example sign up page
        </Link>
        <br />
        <Link href="/material-ui/examples/album" color="secondary">
          Example album page
        </Link>
        <ProTip />
        <MadeWithLove />
      </Box>
    </Container>
  );
}
