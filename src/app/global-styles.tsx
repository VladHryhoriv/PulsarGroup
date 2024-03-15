import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import { base } from 'shared/theme/base'
import { colors } from 'shared/theme/colors'
import { fonts } from 'shared/theme/fonts'
import { classes } from 'shared/theme/classes'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${fonts}

  body,
  html {
    -webkit-font-smoothing: antialiased;
    font-display: swap;
    font-size: 16px;
    color: var(--color-dark-gray);
    background-color: var(--color-lighting);
    font-family: var(--font-family-styrene), sans-serif !important;
  }

  a {
    text-decoration: none;
    color: var(--color-primary);
  }

  :root {
    ${base}
    ${colors}
    ${classes}
  }

`
