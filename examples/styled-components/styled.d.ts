// import original module declarations
import 'styled-components';
import { Config } from './lib/baseline/types';
import { Theme } from './lib/styled-components-theme';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {
    sb: Config;
    theme: {
      sb: Config;
    };
  }
}
