import { Font, FontUsage, Fonts, FontWeight } from '../types';

export default ({ fonts }: { fonts: Fonts }) => ({
  type,
  style,
  weight
}: {
  type: FontUsage;
  style?: string;
  weight?: FontWeight;
}) => {
  const font: Font = fonts[type];
  if (font) {
    const { fontFamily, [weight || 'regular']: fontWeight } = font;
    return `font-family: ${fontFamily};
    font-style: ${style || 'normal'};
    ${
      fontWeight
        ? `font-weight: ${fontWeight};
      `
        : ``
    }
    `;
  }
  return '';
};
