import { Ratios, ScaleName, SizeKey, Sizes } from './types';

export const sizes: Readonly<Sizes> = {
  alpha: 'alpha',
  beta: 'beta',
  gamma: 'gamma',
  delta: 'delta',
  epsilon: 'epsilon',
  zeta: 'zeta',
  eta: 'eta',
  theta: 'theta',
  iota: 'iota'
};
export const sizeKeys = <SizeKey[]>Object.keys(sizes);
export const scaleNames: ScaleName[] = [
  'scale-0',
  'scale-1',
  'scale-2',
  'scale-3',
  'scale-4'
];

// Values
const minorSecond = 16 / 15;
const majorSecond = 1.125;
const minorThird = 1.2;
const majorThird = 1.25;
const perfectFourth = 4 / 3;
const augFourth = 1.414;
const perfectFifth = 1.5;
const minorSixth = 1.6;
const goldenSection = 1.61803398875;
const majorSixth = 5 / 3;
const minorSeventh = 16 / 9;
const majorSeventh = 1.875;
const octave = 2;
const majorTenth = 2.5;
const majorEleventh = 8 / 3;
const majorTwelfth = 3;
const doubleOctave = 4;

export const ratios = <Ratios>{
  minorSecond,
  majorSecond,
  minorThird,
  majorThird,
  perfectFourth,
  augFourth,
  perfectFifth,
  minorSixth,
  goldenSection,
  majorSixth,
  minorSeventh,
  majorSeventh,
  octave,
  majorTenth,
  majorEleventh,
  majorTwelfth,
  doubleOctave
};
