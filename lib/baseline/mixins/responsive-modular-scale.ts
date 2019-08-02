import { ModularScale, ModularScales, BaseRatio, SizeKey } from '../types';
import { scaleNames, ratios, sizes } from '../constants';

// Function
const ms = (
  v: number,
  settings: BaseRatio = {
    base: 16,
    ratio: ratios.perfectFifth
  }
) => {
  // Parse settings
  // Write initial settings if undefined
  const { base, ratio } = settings;
  // Initiate values
  // Fast calc if not multi stranded
  if (!Array.isArray(base) || base.length === 1) {
    return ratio ** v * (base as number);
  }

  // Normalize bases
  // Find the upper bounds for base values
  const baseHigh = ratio * base[0];
  for (let i = 1; i < base.length; i += 1) {
    // shift up if value too low
    while (base[i] / 1 < base[0] / 1) {
      // eslint-disable-next-line operator-assignment
      base[i] = ratio * base[i];
    }
    // Shift down if too high
    while (base[i] / 1 >= baseHigh / 1) {
      // eslint-disable-next-line operator-assignment
      base[i] = ratio ** -1 * base[i];
    }
  }
  // Sort bases
  base.sort();

  // Figure out what base to use with modulo
  const rBase = Math.round(
    (v / base.length - Math.floor(v / base.length)) * base.length
  );

  // Return
  return ratio ** Math.floor(v / base.length) * base[rBase];
};

const createScale = ({ base, ratio }: BaseRatio): ModularScale =>
  (Object.keys(sizes) as SizeKey[]).reduce(
    (scale, sizeKey, index, all) => ({
      ...scale,
      [sizeKey]: Number(
        ms(all.length - index - 4, {
          base,
          ratio
        }).toFixed(1)
      )
    }),
    <ModularScale>{}
  );

export default ({
  baseRatios = []
}: {
  baseRatios: BaseRatio[];
}): ModularScales => {
  // const s = Object.keys(ScaleName);
  const w = baseRatios
    .map((baseRatio: BaseRatio) => createScale(baseRatio))
    .map((modularScale: ModularScale) => {
      return modularScale;
    })
    .reduce(
      (modularScales: ModularScales, current: ModularScale, index: number) => ({
        ...modularScales,
        [scaleNames[index]]: current
      }),
      <ModularScales>{}
    );
  return w;
};
