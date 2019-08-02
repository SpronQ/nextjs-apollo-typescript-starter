import { BreakpointName, Breakpoints, CSSString } from '../types';
// Breakpoints. Either set one to one of the breakpoint variables, or use a custom value for minor breakpoints.
// Defaults to min-width, but both min->max and max-width are available too.
// Parts based on https://gist.github.com/timknight/03e6335b8816aa534cf7
export default ({ breakpoints }: { breakpoints: Breakpoints }) => (
  breakpoint: BreakpointName | number,
  max: number = 0
) => (content: string): CSSString => {
  if (typeof breakpoint === 'string') {
    const breakpointValue = breakpoints[breakpoint];
    if (breakpointValue !== undefined && typeof breakpointValue === 'number') {
      return `@media screen and (min-width: ${breakpointValue /
        16}em) { ${content} }`;
    }
    return `@warn "${breakpoint} is not a set breakpoint variable";`;
  }
  if (typeof breakpoint === 'number') {
    let query = `"all" !default;`;
    if (breakpoint !== 0 && max !== 0) {
      query = `"(min-width: ${breakpoint / 16}em) and (max-width: ${max /
        16}em)";`;
    } else if (breakpoint !== 0 && max === 0) {
      query = `(min-width: ${breakpoint / 16}em)`;
    } else if (breakpoint === 0 && max !== 0) {
      query = `(min-width: ${max / 16}em)`;
    }

    return `@media ${query} { ${content}; }`;
  }
  return `@warn "${breakpoint} is not valid to use as a breakpoint";`;

  /*
  // Type of break variable
  $value: type-of($break);

  // If it is a string (i.e. a breakpoint variable).
  @if $value == string {
    // If using 'break-1', 'break-2' etc output the correct breakpoints from map.
    @if map-has-key($breakpoints, $break) {
      @media screen and (min-width: #{map-get($breakpoints, $break) / 16 * 1em} ) { @content; }
    } @else {
      @warn "#{$break} is not a set breakpoint variable";
    }

  // If it is a number, use this for the breakpoint.
  } @else if $value == number {
    // If using other numbers output value in ems either for min, min & max or max width breakpoints.
    $query: "all" !default;
    @if      $break != 0 and $max != 0 { $query: "(min-width: #{$break / 16 * 1em}) and (max-width: #{$max / 16 * 1em})"; }
    @else if $break != 0 and $max == 0 { $query: "(min-width: #{$break / 16 * 1em})"; }
    @else if $break == 0 and $max != 0 { $query: "(max-width: #{$max / 16 * 1em})"; }
    @media #{$query} { @content; }

  } @else {
    @warn "#{$break} is not valid to use as a breakpoint";
  }
  */
};
