import { ratios } from './constants';
import {
  Breakpoints,
  Font,
  GutterWidths,
  MaxWidths,
  Measures,
  RGBHex,
  RootSizes,
  BaseRatios
} from './types';

const { majorThird, perfectFourth, augFourth } = ratios;

const defaults = {
  breakpoints: <Breakpoints>{
    'break-0': 0, // 0px       Mobile first
    'break-1': 640, // 640px   ~ Small tablet up
    'break-2': 800, // 800px   ~ Large tablet up
    'break-3': 1024, // 1024px  ~ Desktop up
    'break-4': 1600 // 1600px  ~ Large desktop up
  },

  // Root font-sizes for each breakpoint. Set to half desired line-height of body text.
  // ! Make sure to have as many sizes as breakpoints above.
  rootSizes: <RootSizes>{
    'rootsize-0': 12, // 24px line-height body text
    'rootsize-1': 14, // 28px line-height body text
    'rootsize-2': 15, // 30px line-height body text
    'rootsize-3': 17, // 34px line-height body text
    'rootsize-4': 19 // 38px line-height body text
  },

  // Set the optimum line-length for your text (based on typeface).
  // Aim for 75–100 characters a line when possible, at smaller sizes type size is more important.
  // ! Make sure to have as many widths as breakpoints above.
  // Note: this was 'maxwidths' in previous versions.
  measures: <Measures>{
    'measure-0': 500, // 500px wide
    'measure-1': 550, // 550px wide
    'measure-2': 600, // 600px wide
    'measure-3': 680, // 680px wide
    'measure-4': 750 // 750px wide
  },

  // Set the max-widths for containers (based on design).
  // ! Make sure to have as many widths as breakpoints above.
  maxWidths: <MaxWidths>{
    'width-0': 500, // 500px wide
    'width-1': 600, // 600px wide
    'width-2': 800, // 800px wide
    'width-3': 1100, // 1100px wide
    'width-4': 1300 // 1300px wide
  },

  // Gutter widths
  gutterWidths: <GutterWidths>{
    small: 1, // 1rem
    medium: 2, // 2rem
    large: 4 // 4rem
  },

  // Add typefaces here.
  // Add weight and style details too.
  // ! Set cap height to set to the baseline.

  bodyType: <Font>{
    fontFamily: 'Georgia, serif',
    regular: 400,
    bold: 700,
    italic: 'italic',
    capHeight: 0.66
  },

  headingType: <Font>{
    fontFamily: 'Helvetica, sans-serif',
    regular: 400,
    bold: 700,
    capHeight: 0.66
  },

  monospaceType: <Font>{
    fontFamily: 'Menlo, monospace',
    regular: 400,
    capHeight: 0.68
  },

  baseRatios: <BaseRatios>[
    // Major Third http://www.modularscale.com/?16,28&px&1.25&web&text
    {
      base: [16, 28],
      ratio: majorThird
    },
    // Major Third http://www.modularscale.com/?17,30&px&1.25&web&text
    {
      base: [17, 30],
      ratio: majorThird
    },
    // Major Third http://www.modularscale.com/?18,32&px&1.25&web&text
    {
      base: [18, 32],
      ratio: majorThird
    },
    // Perfect Fourth http://www.modularscale.com/?20,40&px&1.333&web&text
    {
      base: [20, 40],
      ratio: perfectFourth
    },
    // Aug. Fourth http://www.modularscale.com/?22,50&px&1.414&web&text
    {
      base: [22, 50],
      ratio: augFourth
    }
  ],

  // Here are some local fonts cap-height sizes to get you started:
  // Georgia: 0.66, Times / Times New Roman: 0.65, Palatino: 0.52
  // Lucida Grande: 0.72, Helvetica: 0.66, Verdana: 0.76, Tahoma: 0.76

  // Selection of Typekit fonts cap-height sizes:
  // Proxima Nova: 0.57, Museo Slab: 0.66, JAF Facit: 0.7, Brandon Grotesque: 0.65, Clavo: 0.7, Adelle: 0.66, FF Tisa Pro: 0.82, Jubilat: 0.66, Futura PT: 0.66, Chaparral Pro: 0.5, Minion Pro: 0.66, Myriad Pro: 0.66, Adobe Caslon Pro: 0.36

  // Text colours. British English.
  headingColour: <RGBHex>'#2E2E2E',
  bodyColour: <RGBHex>'#494949',
  linkColour: <RGBHex>'#0E58F5',
  hoverColour: <RGBHex>'#0B348B',
  captionColour: <RGBHex>'#BDC8CC',
  white: <RGBHex>'#FFFFFF',
  lightAccent: <RGBHex>'#DDDAD4',
  darkAccent: <RGBHex>'#515668',
  accent: <RGBHex>'#BD8D46',
  callToAction: <RGBHex>'#1481CE',

  // Background colours.
  backgroundColour: <RGBHex>'#FCFCFC',
  codeBackgroundColour: <RGBHex>'#F5F4F2'
};

export default defaults;
