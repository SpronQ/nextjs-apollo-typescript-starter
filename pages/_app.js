import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import createBaseline from '../lib/baseline';

import withApolloClient from '../lib/hoc/with-apollo-client';
import theme from '../lib/styled-components-theme';

const sb = createBaseline({
  defaults: {
    codeBackgroundColour: '#faf8f5',
    bodyType: {
      fontFamily: 'Lato, sans-serif',
      regular: 400,
      bold: 700,
      italic: 'italic',
      capHeight: 0.66
    },

    headingType: {
      fontFamily: 'Lato, sans-serif',
      regular: 400,
      bold: 400,
      capHeight: 0.66
    }
  }
});

// eslint-disable-next-line no-unused-expressions
const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i|Rubik");
    ${sb.reset};

    html {
      ${sb.rootSize}
    }
    body {
        ${sb.fontSize('zeta', 'all')}
        ${sb.setFont({ type: 'body' })}
        line-height: 2rem;
        background-image: linear-gradient(to bottom, cyan 0, rgba(255,255,255,0) 1px);
        background-repeat: repeat-y;
        background-size: 100% 1rem;
    }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <ThemeProvider theme={{ ...theme, sb }}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
