// import original module declarations
import 'styled-components';
import { Theme } from './lib/styled-components-theme';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
