import createBaseline from './baseline';

const sb = createBaseline({
  defaults: {
    codeBackgroundColour: '#faf8f5'
    // bodyType: {
    //     fontFamily: 'Lato, sans-serif',
    //     regular: 400,
    //     bold: 700,
    //     italic: 'italic',
    //     capHeight: 0.66
    // },

    // headingType: {
    //     fontFamily: 'Lato, sans-serif',
    //     regular: 400,
    //     bold: 400,
    //     capHeight: 0.66
    // }
  }
});

const theme = {
  sb,
  colors: {
    primary: '#0070f3'
  }
};

export default theme;

export type Theme = typeof theme;
