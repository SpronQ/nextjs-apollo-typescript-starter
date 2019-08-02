import {
  Breakpoint,
  Breakpoints,
  CSSString,
  MaxWidthName,
  MaxWidths,
  MeasureName,
  Measures,
  RootSizes,
  RootSizeName,
  GutterName,
  GutterWidths
} from '../types';

export default ({
  breakpoints = <Breakpoints>{},
  rootSizes = <RootSizes>{},
  maxWidths = <MaxWidths>{},
  measures = <Measures>{},
  gutterWidths = <GutterWidths>{}
} = {}) => (
  breakpoint: Breakpoint = 0,
  gutterName: GutterName,
  main: boolean = true,
  output: string = 'max-width'
): CSSString => {
  if (
    typeof breakpoint === 'number' &&
    breakpoint <= Object.values(breakpoints).length - 1 &&
    breakpoint > 0
  ) {
    const gutterValue = gutterWidths[gutterName];
    const gutter = gutterValue ? gutterValue * 2 : 0;
    const rootSize = rootSizes[`rootsize-${breakpoint}` as RootSizeName];
    const idealMeasure = measures[`measure-${breakpoint}` as MeasureName];
    const gutterSize = gutter * rootSize;
    const containerWidth = maxWidths[`width-${breakpoint}` as MaxWidthName];
    const percentage = ((idealMeasure + gutterSize) / containerWidth) * 100;
    let correctedPercentage;
    if (percentage < 55) {
      correctedPercentage = 55;
    } else if (percentage > 65) {
      correctedPercentage = 65;
    } else {
      correctedPercentage = percentage;
    }

    // console.log('correctedPercentage', correctedPercentage);
    return `${output}: ${
      main === false ? 100 - correctedPercentage : correctedPercentage
    }%;`;
  }
  return '';

  /*
    @mixin ideal-measure($breakpoint: 0, $gutter: 0, $main: true, $output: max-width) {
  // Type of chosen variables.
  $break-value: type-of($breakpoint);

  // If specifying a breakpoint to use (and breakpoint exists and is larger than 0).
  @if $break-value == number and $breakpoint <= ($breakpoints-limit - 1) and $breakpoint > 0 {

    @if $gutter == small {
      $gutter: map-get($gutterwidths, small) * 2 / 1rem;
    } @else if $gutter == medium {
      $gutter: map-get($gutterwidths, medium) * 2 / 1rem;
    } @else if $gutter == large {
      $gutter: map-get($gutterwidths, large) * 2 / 1rem;
    } @else {
      $gutter: 0;
    }

    $rootsize: map-get($rootsizes, rootsize-#{$breakpoint});
    $ideal-measure: map-get($measures, measure-#{$breakpoint});
    $gutter-size: ($gutter * $rootsize);
    $container-width: map-get($maxwidths, width-#{$breakpoint});

    $percentage: percentage(($ideal-measure + $gutter-size) / $container-width);

    @if $percentage < 55 {
      $percentage: 55%;
    } @else if $percentage > 65 {
      $percentage: 65%;
    }

    @if $main == false {
      $percentage: 100 - $percentage;
    }

    #{$output}: $percentage;
  }
}
*/
};
