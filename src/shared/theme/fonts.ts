import { css } from 'styled-components'

// import RobotWoffTwo from 'assets/fonts/roboto-regular-webfont.woff2'
// import RobotWoff from 'assets/fonts/roboto-regular-webfont.woff'

// import RobotBoldWoffTwo from 'assets/fonts/roboto-bold-webfont.woff2'
// import RobotBoldWoff from 'assets/fonts/roboto-bold-webfont.woff'

// import RobotMediumWoffTwo from 'assets/fonts/roboto-medium-webfont.woff2'
// import RobotMediumWoff from 'assets/fonts/roboto-medium-webfont.woff'

import OpenSansLight from 'assets/fonts/OpenSans-Light.ttf'
import OpenSansRegular from 'assets/fonts/OpenSans-Regular.ttf'
import OpenSansBold from 'assets/fonts/OpenSans-Bold.ttf'
// Lato
import LatoLight from 'assets/fonts/Lato-Light.ttf'
import LatoRegular from 'assets/fonts/Lato-Regular.ttf'
import LatoBold from 'assets/fonts/Lato-Bold.ttf'
// Styrene A Web
import StyreneAWebLight from 'assets/fonts/StyreneAWeb-Light.ttf'
import StyreneAWebRegular from 'assets/fonts/StyreneAWeb-Regular.ttf'
import StyreneAWebBold from 'assets/fonts/StyreneAWeb-Bold.ttf'
// Styrene A Web woff2
import StyreneAWebLightW2 from 'assets/fonts/StyreneAWeb-Light.woff2'
import StyreneAWebRegularW2 from 'assets/fonts/StyreneAWeb-Regular.woff2'
import StyreneAWebBoldW2 from 'assets/fonts/StyreneAWeb-Bold.woff2'

// Comfortaa

export const fonts = css`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    src: url('${OpenSansLight}') format('ttf');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url('${OpenSansRegular}') format('ttf');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src: url('${OpenSansBold}') format('ttf');
  }

  @font-face {
    font-family: 'Styrene A Web';
    font-style: normal;
    font-weight: normal;
    src: url('${StyreneAWebLight}') format('ttf');
  }

  @font-face {
    font-family: 'Styrene A Web';
    font-style: normal;
    font-weight: 400;
    src: url('${StyreneAWebRegular}') format('ttf');
  }

  @font-face {
    font-family: 'Styrene A Web';
    font-style: normal;
    font-weight: 600;
    src: url('${StyreneAWebBold}') format('ttf');
  }

  @font-face {
    font-family: 'Styrene A Web';
    font-style: normal;
    font-weight: normal;
    src: url('${StyreneAWebLightW2}') format('woff2');
  }

  @font-face {
    font-family: 'Styrene A Web';
    font-style: normal;
    font-weight: 400;
    src: url('${StyreneAWebRegularW2}') format('woff2');
  }

  @font-face {
    font-family: 'Styrene A Web';
    font-style: normal;
    font-weight: 600;
    src: url('${StyreneAWebBoldW2}') format('woff2');
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: normal;
    src: url('${LatoLight}') format('ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: url('${LatoRegular}') format('ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    src: url('${LatoBold}') format('ttf');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gTD_vx3rCubqg.woff2')
      format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;
  }
`
