import {
  Breakpoint,
  Breakpoints,
  CSSString,
  ModularScales,
  RootSizes,
  SizeKey
} from '../types';
import { isInScale } from '../utils';

export default ({
  breakpoints = <Breakpoints>{},
  rootSizes = <RootSizes>{},
  modularScales = <ModularScales>{}
} = {}) => (fontSize: SizeKey, breakpoint: Breakpoint): CSSString => {
  const breakpointValues = Object.values(breakpoints);
  const rootSizeValues = Object.values(rootSizes);
  const [inScale, inScaleSize] = isInScale(modularScales, 'scale-0', fontSize);
  // const inScale = !!modularScale['scale-0'][fontSize];
  if (
    typeof breakpoint === 'number' &&
    breakpoint <= Object.values(breakpoints).length - 1 &&
    breakpoint >= 0
  ) {
    if (typeof fontSize === 'number') {
      return `font-size: ${fontSize / rootSizeValues[breakpoint]}rem;
      `;
    }
    if (inScale) {
      return `font-size: ${inScaleSize}rem;
      `;
    }
    return `@warn "${fontSize} is not a valid scale variable";
      `;
  }
  if (typeof breakpoint === 'string' && breakpoint === 'all') {
    if (typeof fontSize === 'number') {
      return `font-size: ${fontSize / rootSizeValues[0]}rem;
      
      ${breakpointValues
        .filter(breakpointValue => breakpointValue)
        // @ts-ignore
        .map((breakpointValue, index) => {
          return `@media screen and (min-width: ${(breakpointValues[
            index + 1
          ] as number) / 16}em ) {
          font-size: ${rootSizeValues[index + 1]}rem;
        }
        `;
        })
        .join('\n')}`;
    }
    if (inScale) {
      const scale = modularScales['scale-0'];
      const size = scale[fontSize];
      return `font-size: ${size / rootSizeValues[0]}rem;
${breakpointValues
  .filter(breakpointValue => breakpointValue)
  .map(
    (
      // @ts-ignore
      breakpointValue,
      index
    ) => `@media screen and (min-width: ${(breakpointValues[
      index + 1
    ] as number) / 16}em ) {
  font-size: ${inScaleSize / rootSizeValues[index + 1]}rem;
}
`
  )
  .join('\n')}
      `;
    }
    return `@warn "${fontSize} is not a valid scale variable";`;
  }
  return `@warn "${breakpoint} is not valid to use as a breakpoint";
    `;

  /*
    @mixin fontsize($fontsize, $breakpoint: 0) {
  // Type of chosen variables.
  $font-value: type-of($fontsize);
  $break-value: type-of($breakpoint);

  // Check if value exists in scale.
  $in-scale: in-modular-scale(scale-0, $fontsize);

  // If specifying a breakpoint to use (and breakpoint exists).
  @if $break-value == number and $breakpoint <= ($breakpoints-limit - 1) and $breakpoint >= 0 {

    // If using a number for fontsize.
    @if $font-value == number {
      font-size: #{$fontsize / nth($sizes, ($breakpoint + 1))}rem;

    // If using a variable from the scale for fontsize.
    } @else if $in-scale == true {
      $get-scale: map-get($modular-scale, scale-#{$breakpoint});
      $get-size: map-get($get-scale, $fontsize);

      font-size: #{$get-size / nth($sizes, ($breakpoint + 1))}rem;

    } @else {
      @warn "#{$fontsize} is not a valid scale variable";
    }

  // If want to use value for all breakpoints.
  } @else if $breakpoint == all {

    // If using a number for fontsize.
    @if $font-value == number {
      font-size: #{$fontsize / nth($sizes, 1)}rem;

      // Loop through breakpoints.
      @for $i from 2 through $breakpoints-limit {
        @media screen and (min-width: nth($points, $i) / 16 * 1em ) {
          font-size: #{$fontsize / nth($sizes, $i)}rem;
        }
      }

    // If using a variable from the scale for fontsize.
    } @else if $in-scale == true {
      $get-scale: map-get($modular-scale, scale-0);
      $get-size: map-get($get-scale, $fontsize);
      font-size: #{$get-size / nth($sizes, 1)}rem;

      // Loop through breakpoints.
      @for $i from 2 through $breakpoints-limit {
        $get-scale: map-get($modular-scale, scale-#{$i - 1});
        $get-size: map-get($get-scale, $fontsize);

        @media screen and (min-width: nth($points, $i) / 16 * 1em ) {
          font-size: #{$get-size / nth($sizes, $i)}rem;
        }
      }

    } @else {
      @warn "#{$fontsize} is not a valid scale variable";
    }

  } @else {
    @warn "#{$breakpoint} is not valid to use as a breakpoint";
  }
}

*/
};
