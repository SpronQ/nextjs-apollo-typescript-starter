import {
  Breakpoints,
  FontUsage,
  Fonts,
  ModularScales,
  RootSizes,
  ScaleName,
  SizeKey
} from '../types';
import {
  calculateBaselineShift,
  calculateBaselinePush,
  isInScale
} from '../utils';

export default ({
  fonts,
  breakpoints,
  rootSizes,
  modularScales
}: {
  fonts: Fonts;
  breakpoints: Breakpoints;
  rootSizes: RootSizes;
  modularScales: ModularScales;
}) => (
  fontSize: SizeKey,
  fontType: FontUsage,
  lineHeight = 2,
  below = 2,
  breakpoint: number | 'all' = 0
) => {
  const font = fonts[fontType];
  if (!font) {
    return `@warn "${fontType} is not a valid font type, only got ${Object.keys(
      fonts
    )}";`;
  }

  const { capHeight } = font;
  const [inScale] = isInScale(modularScales, 'scale-0', fontSize);
  // const inScale = !!modularScales['scale-0'][fontSize];
  const breakpointValues = Object.values(breakpoints);
  const rootSizeValues = Object.values(rootSizes);

  const lineHeightStatement = lineHeight
    ? `line-height: ${lineHeight}rem;`
    : ``;

  if (
    typeof breakpoint === 'number' &&
    breakpoint <= breakpointValues.length - 1 &&
    breakpoint >= 0
  ) {
    if (typeof fontSize === 'number') {
      const rootSize = rootSizeValues[breakpoint];
      const baselineShift = calculateBaselineShift(
        fontSize,
        lineHeight,
        rootSize,
        capHeight
      );
      const baselinePush = calculateBaselinePush(
        fontSize,
        lineHeight,
        rootSize,
        capHeight,
        below
      );

      return `${lineHeightStatement}
margin-bottom: ${baselinePush}rem;
padding-top: ${baselineShift}rem;
`;
      /*

          $rootsize: nth($sizes, ($breakpoint + 1));
      $baseline-shift: #{($fontsize / 2 * (($lineheight * $rootsize / $fontsize) - $cap-height)) / $rootsize + 0.00001};
      $baseline-push: #{$below - (($fontsize / 2 * (($lineheight * $rootsize / $fontsize) - $cap-height)) / $rootsize + 0.00001)};

      margin-bottom: #{$baseline-push}rem;
      padding-top: #{$baseline-shift}rem;

      */
    }
    if (inScale) {
      const scale = modularScales['scale-0'];
      const size = scale[fontSize];

      const rootSize = rootSizeValues[breakpoint];
      const baselineShift = calculateBaselineShift(
        size,
        lineHeight,
        rootSize,
        capHeight
      );
      const baselinePush = calculateBaselinePush(
        size,
        lineHeight,
        rootSize,
        capHeight,
        below
      );

      return `${lineHeightStatement}
margin-bottom: ${baselinePush}rem;
padding-top: ${baselineShift}rem;
`;
    }
    return `@warn "${fontSize} is not a valid scale variable";`;
  }
  if (typeof breakpoint === 'string' && breakpoint === 'all') {
    if (typeof fontSize === 'number') {
      const rootSize = rootSizeValues[0];
      const baselineShift = calculateBaselineShift(
        fontSize,
        lineHeight,
        rootSize,
        capHeight
      );
      const baselinePush = calculateBaselinePush(
        fontSize,
        lineHeight,
        rootSize,
        capHeight,
        below
      );
      return `${lineHeightStatement}
margin-bottom: ${baselinePush}rem;
padding-top: ${baselineShift}rem;
${breakpointValues
  .filter(breakpointValue => breakpointValue)
  // @ts-ignore
  .map((breakpointValue, index) => {
    const rootSize = rootSizeValues[index + 1];
    const baselineShift = calculateBaselineShift(
      fontSize,
      lineHeight,
      rootSize,
      capHeight
    );
    const baselinePush = calculateBaselinePush(
      fontSize,
      lineHeight,
      rootSize,
      capHeight,
      below
    );

    return `@media screen and (min-width: ${(breakpointValues[
      index + 1
    ] as number) / 16}em ) {
            margin-bottom: ${baselinePush}rem;
            padding-top: ${baselineShift}rem;
          }`;
  })
  .join('\n')}
`;
    }
    if (inScale) {
      const scale = modularScales['scale-0'];
      const size = scale[fontSize];
      const rootSize = rootSizeValues[0];
      const baselineShift = calculateBaselineShift(
        size,
        lineHeight,
        rootSize,
        capHeight
      );
      const baselinePush = calculateBaselinePush(
        size,
        lineHeight,
        rootSize,
        capHeight,
        below
      );

      return `${lineHeightStatement}
margin-bottom: ${baselinePush}rem;
padding-top: ${baselineShift}rem;
${breakpointValues
  .filter(breakpointValue => breakpointValue)
  // @ts-ignore
  .map((breakpointValue, index) => {
    const scale = modularScales[`scale-${index + 1}` as ScaleName];
    const size = scale[fontSize];
    const rootSize = rootSizeValues[index + 1];

    const baselineShift = calculateBaselineShift(
      size,
      lineHeight,
      rootSize,
      capHeight
    );
    const baselinePush = calculateBaselinePush(
      size,
      lineHeight,
      rootSize,
      capHeight,
      below
    );
    return `@media screen and (min-width: ${(breakpointValues[
      index + 1
    ] as number) / 16}em ) {
          margin-bottom: ${baselinePush}rem;
          padding-top: ${baselineShift}rem;
        }`;
  })
  .join('\n')}
`;
    }
    return `@warn "${fontSize} is not a valid scale variable";`;
  }
  return `@warn "${breakpoint} is not valid to use as a breakpoint";`;
};
