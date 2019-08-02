import { Fonts, UserDefaults } from './types';
import libraryDefaults from './defaults';
import calculateIdealMeasure from './mixins/ideal-measure';
import calculateMeasure from './mixins/measure';
import calculateBreakpoint from './mixins/breakpoint';
import calculateRootSize from './mixins/root-size';
import calculateMaxWidth from './mixins/max-width';
import calculateResponsiveModularScales from './mixins/responsive-modular-scale';
import calculateFontSize from './mixins/font-size';
import setFont from './mixins/set-font';
import clearfix from './mixins/clearfix';
import calculateBassline from './mixins/baseline';
import calculateBasslineWithFontSize from './mixins/baseline-with-font-size';
import createBlockquote from './mixins/blockquote';
import reset from './mixins/reset';

export default ({ defaults: userDefaults }: { defaults: UserDefaults }) => {
  const combinedDefaults = { ...libraryDefaults, ...userDefaults };
  const {
    breakpoints,
    bodyType,
    headingType,
    monospaceType,
    rootSizes,
    gutterWidths,
    maxWidths,
    measures,
    // lineWidths, // unused?
    linkColour,
    baseRatios
  } = combinedDefaults;

  const fonts: Fonts = {
    body: bodyType,
    heading: headingType,
    monospace: monospaceType
  };
  const modularScales = calculateResponsiveModularScales({
    baseRatios
  });
  const config = {
    ...combinedDefaults,
    reset,
    clearfix,
    breakpoint: calculateBreakpoint({ breakpoints }),
    rootSize: calculateRootSize({ breakpoints, rootSizes }),
    maxWidth: calculateMaxWidth({ breakpoints, rootSizes, maxWidths }),
    measure: calculateMeasure({ breakpoints, rootSizes, measures }),
    idealMeasure: calculateIdealMeasure({
      breakpoints,
      rootSizes,
      maxWidths,
      measures,
      gutterWidths
    }),
    fontSize: calculateFontSize({
      breakpoints,
      rootSizes,
      modularScales
    }),
    setFont: setFont({ fonts }),
    baseline: calculateBassline({
      fonts,
      breakpoints,
      rootSizes,
      modularScales
    }),
    baselineWithFontSize: calculateBasslineWithFontSize({
      fonts,
      breakpoints,
      rootSizes,
      modularScales
    }),
    blockquote: createBlockquote({
      linkColour,
      fonts,
      breakpoints,
      rootSizes,
      modularScales
    })
  };

  // console.log(defaults);
  return config;
};
