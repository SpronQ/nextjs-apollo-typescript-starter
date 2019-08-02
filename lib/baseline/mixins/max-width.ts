// Max-widths for typeset containers, outputted in correct breakpoints.
import {
  Breakpoint,
  Breakpoints,
  CSSString,
  MaxWidths,
  RootSizes
} from '../types';

export default ({
  breakpoints = <Breakpoints>{},
  rootSizes = <RootSizes>{},
  maxWidths = <MaxWidths>{}
} = {}) => (breakpoint: Breakpoint): CSSString => {
  const breakpointValues = Object.values(breakpoints);
  const maxWidthValues = Object.values(maxWidths);
  const rootSizeValues = Object.values(rootSizes);
  if (
    typeof breakpoint === 'number' &&
    (breakpoint <= Object.keys(breakpoints).length - 1 && breakpoint >= 0)
  ) {
    return `max-width: ${maxWidthValues[breakpoint] /
      rootSizeValues[breakpoint]}rem;`;
  }
  if (typeof breakpoint === 'string' && breakpoint === 'all') {
    return `max-width: ${maxWidthValues[0] / rootSizeValues[0]}rem;
      ${breakpointValues
        .filter(breakpointValue => breakpointValue)
        .map(
          (
            breakpointValue,
            index
          ) => `@media screen and (min-width: ${(breakpointValue as number) /
            16}em ) {
          max-width: ${maxWidthValues[index + 1] /
            rootSizeValues[index + 1]}rem;
        }
        `
        )
        .join('\n')}
      `;
  }
  return `@warn "${breakpoint} is not valid to use as a breakpoint";`;

  /*
  @mixin maxwidth($breakpoint: 0) {
    // Type of chosen variables.
    $break-value: type-of($breakpoint);
  
    // If specifying a breakpoint to use (and breakpoint exists).
    @if $break-value == number and $breakpoint <= ($breakpoints-limit - 1) and $breakpoint >= 0 {
  
      max-width: #{nth($max-widths, ($breakpoint + 1)) / nth($sizes, ($breakpoint + 1))}rem;
  
    } @else if $breakpoint == all {
      max-width: #{nth($max-widths, 1) / nth($sizes, 1)}rem;
  
      // Loop through breakpoints.
      @for $i from 2 through $breakpoints-limit {
        @media screen and (min-width: nth($points, $i) / 16 * 1em ) {
          max-width: #{nth($max-widths, $i) / nth($sizes, $i)}rem;
        }
      }
    }
  }
  */
};
