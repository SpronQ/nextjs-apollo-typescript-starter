import { ModularScales, ScaleName, SizeKey } from './types';

//   const inScale = !!modularScale['scale-0'][fontSize];
export const isInScale = (
  modularScales: ModularScales,
  scaleName: ScaleName,
  sizeKey: SizeKey
): [boolean, number] => {
  if (
    modularScales[scaleName] !== undefined &&
    modularScales[scaleName][sizeKey] !== undefined
  ) {
    return [true, modularScales[scaleName][sizeKey]];
  }
  return [false, 0];
};
export const whatever = true;

export const calculateBaselineShift = (
  size: number,
  lineHeight: number,
  rootSize: number,
  capHeight: number
) =>
  ((size / 2) * ((lineHeight * rootSize) / size - capHeight)) / rootSize +
  0.00001;

export const calculateBaselinePush = (
  size: number,
  lineHeight: number,
  rootSize: number,
  capHeight: number,
  below: number
) =>
  below -
  (((size / 2) * ((lineHeight * rootSize) / size - capHeight)) / rootSize +
    0.00001);
