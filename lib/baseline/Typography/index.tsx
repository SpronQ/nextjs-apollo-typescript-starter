import styled from 'styled-components';

export const Paragraph = styled.p`
  ${props => props.theme.sb.setFont({ type: 'body', weight: 'regular' })};
  ${props => props.theme.sb.baseline('zeta', 'body', 2, 2, 'all')};
  a {
    ${props => {
      const {
        theme: {
          sb: { backgroundColour, hoverColour, linkColour }
        }
      } = props;
      return `

    background-image: linear-gradient(to bottom,transparent 50%, ${linkColour} 50%);

    background-position: 0 93%;
    background-repeat: repeat-x;
    background-size: 100% 0.15rem;
    
    text-shadow: 0.1rem 0 ${backgroundColour},
                 0.15rem 0 ${backgroundColour},
                -0.1rem 0 ${backgroundColour},
                -0.15rem 0 ${backgroundColour};
                
               

    &:hover,
    &:active,
    &:focus {
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 50%,
        lighten(${hoverColour}, 20%) 50%
      );
    }

    `;
    }};
  }
`;

export const Blockquote = styled.blockquote`
  ${Paragraph} {
    ${props => props.theme.sb.blockquote.paragraph};
  }
  ${props => props.theme.sb.breakpoint('break-1')(`margin-left: -1rem;`)};
`;

export const Caption = styled(Paragraph)`
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'regular' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('theta', 'heading', 2, 2, 'all')};
  ${props => `color: ${props.theme.sb.captionColour};`};
`;
export const Heading1 = styled.h1`
  color: #161a29;
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('alpha', 'heading', 3, 1, 'all')};
  + ${Caption} {
    margin-top: -1rem;
  }
`;
export const Heading2 = styled.h2`
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('beta', 'heading', 3, 1, 'all')};
  + ${Caption} {
    margin-top: -1rem;
  }
`;
export const Heading3 = styled.h3`
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('gamma', 'heading', 3, 1, 'all')};
  + ${Caption} {
    margin-top: -1rem;
  }
`;
export const Heading4 = styled.h4`
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('delta', 'heading', 2, 0, 'all')};
  + ${Caption} {
    margin-top: -1rem;
  }
`;
export const Heading5 = styled.h5`
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('epsilon', 'heading', 2, 0, 'all')};
  + ${Caption} {
    margin-top: -1rem;
  }
`;
export const Heading6 = styled.h6`
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('zeta', 'heading', 2, 0, 'all')};
  + ${Caption} {
    margin-top: -1rem;
  }
`;

export const Bold = styled.b`
  font-weight: ${props => props.theme.sb.bodyType.bold};
`;
export const Strong = styled(Bold.withComponent('strong'))``;

export const Emphasis = styled.em`
  font-style: ${props => props.theme.sb.bodyType.italic};
`;
export const Italic = styled(Emphasis.withComponent('i'))``;
export const Small = styled.small`
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'regular' })};
  font-style: normal;
  line-height: 1rem;
`;

export const Anchor = styled.a`
  color: ${props => props.theme.sb.linkColour};
  text-decoration: none;
  transition: color 0.1s, background-color 0.1s;

  &:hover,
  &:active,
  &:focus {
    color: ${props => props.theme.sb.hoverColour};
    text-decoration: none;
  }
`;
export const Button = styled.button`
  color: white;
  background-color: ${props => props.theme.sb.callToAction};
  border: 1px solid ${props => props.theme.sb.callToAction};
  box-shadow: none;
  border-radius: 3px;
  padding: 0.8rem 1rem 0.8rem 1.2rem;
  &:hover {
    background-color: ${props => props.theme.sb.darkAccent};
    border: 1px solid ${props => props.theme.sb.darkAccent};
  }

  ${props => props.theme.sb.setFont({ type: 'heading' })};
  ${props => props.theme.sb.fontSize('iota', 'all')};

  letter-spacing: 0.2rem;
  &[disabled] {
    background-color: ${props => props.theme.sb.lightAccent};
    border: 1px solid ${props => props.theme.sb.lightAccent};
  }
`;

export const Pre = styled.pre`
  display: block;
  margin-bottom: 2rem;
  padding: 1rem;
  white-space: pre-wrap;
  word-break: break-all;
  word-wrap: break-word;
  ${props => `background-color: ${props.theme.sb.codeBackgroundColour};`};
`;

export const Code = styled.code`
  ${props => props.theme.sb.fontSize('theta', 'all')};
  ${props => props.theme.sb.setFont({ type: 'monospace', weight: 'regular' })};
  line-height: 0.5rem;
`;
export const HorizontalRule = styled.hr`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 50%,
    ${props => props.theme.sb.captionColour} 50%
  );
  background-position: 0 50%;
  background-repeat: repeat-x;
  background-size: 100% 0.15rem;
  border: 0;
  margin: 0;
  padding-bottom: 3rem;
  padding-top: 3rem;
`;
export const ListItem = styled.li``;
export const UnorderedList = styled.ul`
  ${props => props.theme.sb.baseline('theta', 'body', 2, 2, 'all')};
  ${ListItem} {
    font-feature-settings: 'kern', 'onum', 'liga';
    margin-left: 2rem;
    ${props => props.theme.sb.breakpoint('break-1')(`margin-left: 0;`)};
    ul {
      padding-top: 1rem;
      margin-bottom: 1rem;
      margin-left: 2rem;
      border: 1px solid red;
    }
  }
`;
export const OrderedList = styled(UnorderedList.withComponent('ol'))`
  list-style-type: none;

  ${ListItem} {
    counter-increment: top-level;

    &:before {
      content: counter(top-level) '.';
      font-feature-settings: 'lnum', 'tnum';
      margin-left: -3rem;
      position: absolute;
      text-align: right;
      width: 2em;
    }

    ul {
      li {
        &:before {
          content: '';
        }

        ol {
          li {
            counter-increment: alt-level;

            &:before {
              content: counter(alt-level) '.';
            }
          }
        }
      }
    }

    ol {
      li {
        counter-increment: sub-level;

        &:before {
          content: counter(top-level) '.' counter(sub-level);
        }

        ul {
          li {
            &:before {
              content: '';
            }
          }
        }

        ol {
          li {
            counter-increment: sub-sub-level;

            &:before {
              content: counter(top-level) '.' counter(sub-level) '.'
                counter(sub-sub-level);
            }
          }
        }
      }
    }
  }
`;
