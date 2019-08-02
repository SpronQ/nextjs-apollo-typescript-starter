import {
  Breakpoints,
  Fonts,
  ModularScales,
  RGBHex,
  RootSizes,
  ScaleName
} from '../types';
import { scaleNames } from '../constants';
import { calculateBaselineShift } from '../utils';

const calculateBaselinePush = (
  size: number,
  rootSize: number,
  capHeight: number,
  below: number
) => below - (size * ((2 * rootSize) / size - capHeight)) / rootSize + 0.00001;

export default ({
  linkColour,
  fonts,
  breakpoints,
  rootSizes,
  modularScales
}: {
  linkColour: RGBHex;
  fonts: Fonts;
  breakpoints: Breakpoints;
  rootSizes: RootSizes;
  modularScales: ModularScales;
}) => {
  const scaleName: ScaleName = 'scale-0';
  const scale = modularScales[scaleName];
  const size = scale.zeta;
  const breakpointValues = Object.values(breakpoints);
  const rootSizeValues = Object.values(rootSizes);
  const rootSize = rootSizeValues[0];
  const { capHeight } = fonts.body;
  const baselineShift = calculateBaselineShift(size, 2, rootSize, capHeight);
  const baselinePush = calculateBaselinePush(size, rootSize, capHeight, 3);

  return {
    styles: {},
    paragraph: `border-left: 0.15rem solid ${linkColour};
font-style: italic;
padding-left: 1rem;
margin-bottom: ${baselinePush}rem;
padding-bottom: ${baselineShift}rem;
${breakpointValues
  .filter(breakpointValue => breakpointValue)
  // @ts-ignore
  .map((breakpointValue, index) => {
    const scaleName = `scale-${index + 1}` as ScaleName;
    if (breakpointValue !== 'all' && scaleNames.includes(scaleName)) {
      const scale = modularScales[scaleName];
      const size = scale.zeta;
      const rootSize = rootSizeValues[index + 1];

      const baselineShift = calculateBaselineShift(
        size,
        2,
        rootSize,
        capHeight
      );
      const baselinePush = calculateBaselinePush(size, rootSize, capHeight, 3);
      return `@media screen and (min-width: ${(breakpointValues[
        index + 1
      ] as number) / 16}em ) {
          margin-bottom: ${baselinePush}rem;
          padding-bottom: ${baselineShift}rem;
        }`;
    }
    return '';
  })
  .join('\n')}
`
  };
};
