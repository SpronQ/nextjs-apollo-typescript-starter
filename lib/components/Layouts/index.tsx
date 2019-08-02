import styled from 'styled-components';

export const Section = styled.div`
  ${props => props.theme.sb.clearfix};
  margin: 0 auto;
  position: relative;
  width: 94%;
  padding: 2rem 0;
  ${props => props.theme.sb.breakpoint('break-3')(props.theme.sb.maxWidth(3))};
  ${props => props.theme.sb.breakpoint('break-4')(props.theme.sb.maxWidth(4))};
  ${props => props.theme.sb.breakpoint('break-1')(`padding: 3rem 0;`)};
  ${props => props.theme.sb.breakpoint('break-2')(`padding: 4rem 0;`)};
`;

export const SingleMeasure = styled.div`
  margin: 0 auto;

  ${props => props.theme.sb.measure('all')};
`;

export const Column = styled.div`
  ${props => props.theme.sb.measure(0)};
  margin: 0 auto;
  width: 100%;

  ${({
    theme: {
      sb: { breakpoint, gutterWidths }
    }
  }) =>
    breakpoint('break-1')(
      `float: left;
  margin: initial;
  max-width: initial;
  padding-left: ${gutterWidths.small}rem;
  padding-right: ${gutterWidths.small}rem;`
    )};
  ${props =>
    props.theme.sb.breakpoint('break-3')(
      `padding-left: ${props.theme.sb.gutterWidths.medium}rem;
  padding-right: ${props.theme.sb.gutterWidths.medium}rem;`
    )};
`;

export const ColumnDuo = styled(Column)`
  ${props =>
    props.theme.sb.breakpoint('break-1')(
      `width: 50%;

&:nth-of-type(2n+3) {
  clear: left;
}

&:nth-of-type(n+3) {
  margin-top: 3rem;
}`
    )};
`;
export const ColumnTrio = styled(Column)`
  ${props =>
    props.theme.sb.breakpoint('break-1')(
      `width: 33%;

&:nth-of-type(3n+4) {
  clear: left;
}

&:nth-of-type(n+4) {
  margin-top: 3rem;
}`
    )};

  ${props =>
    props.theme.sb.breakpoint('break-3')(`
        p {
          ${props.theme.sb.baselineWithFontSize('eta', 'body', 2, 3, 3)};
        }
        `)};
  ${props =>
    props.theme.sb.breakpoint('break-4')(`
        p {
          ${props.theme.sb.baselineWithFontSize('eta', 'body', 2, 3, 4)};
        }
        `)};
`;
export const ColumnQuatro = styled(Column)`
  ${props =>
    props.theme.sb.breakpoint('break-1')(
      `width: 50%;
      `
    )};
  ${props =>
    props.theme.sb.breakpoint('break-2')(
      `width: 25%;
      `
    )};

  ${props =>
    props.theme.sb.breakpoint('break-3')(`
      p {
        ${props.theme.sb.baselineWithFontSize('eta', 'body', 2, 3, 3)};
      }
      `)};
  ${props =>
    props.theme.sb.breakpoint('break-4')(`
      p {
        ${props.theme.sb.baselineWithFontSize('eta', 'body', 2, 3, 4)};
      }
      `)};
`;

/*
@include breakpoint(break-1) {
    @include ideal-measure(1, small);
  }

  @include breakpoint(break-2) {
    @include ideal-measure(2, small);
  }

  @include breakpoint(break-3) {
    @include ideal-measure(3, medium);
  }

  @include breakpoint(break-4) {
    @include ideal-measure(4, medium);
  }

  */
export const ColumnMain = styled(Column)`
  ${props =>
    `${props.theme.sb.breakpoint('break-1')(
      props.theme.sb.idealMeasure(0, 'small')
    )};
    ${props.theme.sb.breakpoint('break-2')(
      props.theme.sb.idealMeasure(1, 'small')
    )};
    ${props.theme.sb.breakpoint('break-3')(
      props.theme.sb.idealMeasure(2, 'medium')
    )};
    ${props.theme.sb.breakpoint('break-4')(
      props.theme.sb.idealMeasure(3, 'medium')
    )};`};
`;
export const ColumnSidebar = styled(Column)`
  ${props =>
    `${props.theme.sb.breakpoint('break-1')(
      `${props.theme.sb.idealMeasure(0, 'small', false)};
      padding-right:  ${props.theme.sb.gutterWidths.small}rem;
     
      `
    )};
  ${props.theme.sb.breakpoint('break-2')(
    props.theme.sb.idealMeasure(1, 'small', false)
  )};
  ${props.theme.sb.breakpoint('break-3')(
    `${props.theme.sb.idealMeasure(2, 'medium', false)};
    padding-right:  ${props.theme.sb.gutterWidths.large}rem;
   

    p {
      ${props.theme.sb.baselineWithFontSize('eta', 'body', 2, 3, 3)};
    }
    `
  )};
  ${props.theme.sb.breakpoint('break-4')(
    `${props.theme.sb.idealMeasure(3, 'medium', false)};
    p {
     ${props.theme.sb.baselineWithFontSize('eta', 'body', 2, 3, 4)};
    }
    `
  )};`};
`;
