import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import {
  ThemeProvider as SCThemeProvider,
  createGlobalStyle
} from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import createBaseline from '../lib/baseline';

import withApolloClient from '../lib/hoc/with-apollo-client';
import scTheme from '../lib/styled-components-theme';
import muiTheme from '../lib/mui-theme';

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
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <ApolloProvider client={apolloClient}>
          <SCThemeProvider theme={{ ...scTheme, sb }}>
            <MUIThemeProvider theme={muiTheme}>
              <CssBaseline />
              <Component {...pageProps} />
            </MUIThemeProvider>
          </SCThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
