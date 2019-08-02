import defaults from './defaults';

import baseline from './index';

export type Ratio = number;
// type KVObject<V> = { [key: string]: V };
export type BaseRatio = {
  base: number | number[];
  ratio: Ratio;
};

export type BaseRatios = BaseRatio[];
export type Breakpoint = number | 'all';
export type BreakpointName =
  | 'break-0'
  | 'break-1'
  | 'break-2'
  | 'break-3'
  | 'break-4';
export type Breakpoints = Record<BreakpointName, Breakpoint>;
export type MaxWidth = number;
export type MaxWidthName =
  | 'width-0'
  | 'width-1'
  | 'width-2'
  | 'width-3'
  | 'width-4';
export type MaxWidths = Record<MaxWidthName, MaxWidth>;
export type Measure = number;
export type MeasureName =
  | 'measure-0'
  | 'measure-1'
  | 'measure-2'
  | 'measure-3'
  | 'measure-4';
export type Measures = Record<MeasureName, Measure>;
export type RootSize = number;
export type RootSizeName =
  | 'rootsize-0'
  | 'rootsize-1'
  | 'rootsize-2'
  | 'rootsize-3'
  | 'rootsize-4';
export type RootSizes = Record<RootSizeName, RootSize>;
export type GutterName = 'small' | 'medium' | 'large';
export type GutterWidths = Record<GutterName, number>;
export type Font = {
  fontFamily: string;
  regular?: number;
  bold?: number;
  italic?: string;
  capHeight: number;
};

export type FontWeight = keyof Pick<Font, 'regular' | 'bold'>;
export type Ratios = Record<string, Ratio>;
export type ModularScales = Record<ScaleName, Record<SizeKey, number>>;
export type FontSize = number;
export type FontUsage = 'body' | 'heading' | 'monospace';
export type Fonts = Record<FontUsage, Font>;

export type SizeKey =
  | 'alpha'
  | 'beta'
  | 'gamma'
  | 'delta'
  | 'epsilon'
  | 'zeta'
  | 'eta'
  | 'theta'
  | 'iota';

// export type SizeKey = string;

export type SizeValue =
  | 'alpha'
  | 'beta'
  | 'gamma'
  | 'delta'
  | 'epsilon'
  | 'zeta'
  | 'eta'
  | 'theta'
  | 'iota';

export type Sizes = Record<SizeKey, SizeValue>;

export type ScaleName =
  | 'scale-0'
  | 'scale-1'
  | 'scale-2'
  | 'scale-3'
  | 'scale-4';

export type RGBHex = string;
export type ModularScale = Record<SizeKey, number>;

export type CSSString = string;
export type Defaults = typeof defaults;
export type UserDefaults = Partial<Defaults>;

export type Config = ReturnType<typeof baseline>;
