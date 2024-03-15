import { css } from 'styled-components'
import {
  generateCSSVariables,
  setColorDarken,
  setColorLighten,
  generateCSSOpacitiyVariables,
} from './utils'

const BASE_COLORS = {
  blue: '#4F69F1',
  lightBlue: '#46BDE9',
  darkViolet: '#544976',
  indigo: '#6610f2',
  purple: '#6f42c1',
  darkPink: '#EF5DA8',
  pink: '#e83e8c',
  red: '#dc3545',
  orange: '#fd7e14',
  semiOrange: '#F97558',
  yellow: '#F3C655',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8',
  white: '#fff',
  semiWhite: '#fdfdfd',
  elemsWhite: '#FAF0F9',
  black: '#000',
  semiGreen: '#4DAB50',
  violet: '#4A4E97',
  semiBlack: '#141414',
  gray: '#8697A8',
  darkGray: '#44566C',
  darkBlue: '#303E70',
  lighting: '#F8FAFB',
  lightGray: '#D8D8D8',
  semiGray: '#767676',
  disabled: '#A1A1A1',
  darkDisabled: '#A2A2A2',
  someGray: '#F0F0F0',
  mainGray: '#F1F1F1',
  grey: '#C0C0C0',
}

export const PAGE_GRADIENT = {
  page: 'linear-gradient(0.01deg, #FFFFFF 0.01%, rgba(255, 255, 255, 0) 40.04%)',
  modal:
    'linear-gradient(82.64deg, #2F3D70 11.44%, #4A4E97 41.72%, #87387E 116.01%)',
  text: 'linear-gradient(90deg, rgba(42,162,207,1) 0%, rgba(169,65,158,1) 61%);',
  avatar:
    'linear-gradient(82.64deg, #2F3D70 11.44%, #4A4E97 41.72%, #87387E 116.01%);',
}

const STATUS_COLORS = {
  success: '#28a745',
  warning: '#ffc107',
  danger: '#dc3545',
  info: '#17a2b8',
}

const MAIN_COLORS = {
  primary: BASE_COLORS.blue,
  secondary: BASE_COLORS.gray,
}

const MAIN_COLORS_DARKEN = {
  primaryDark: setColorDarken(MAIN_COLORS.primary),
  secondaryDark: setColorDarken(MAIN_COLORS.secondary),
}

const MAIN_COLORS_LIGHTEN = {
  primaryLight: setColorLighten(MAIN_COLORS.primary),
  secondaryLight: setColorLighten(MAIN_COLORS.secondary),
}

export const colors = css`
  ${generateCSSVariables(BASE_COLORS)}
  ${generateCSSVariables(STATUS_COLORS)}
  ${generateCSSVariables(MAIN_COLORS)}
  ${generateCSSVariables(MAIN_COLORS_DARKEN)}
  ${generateCSSVariables(MAIN_COLORS_LIGHTEN)}
  ${generateCSSOpacitiyVariables(BASE_COLORS.white, 'w', 10)}
  ${generateCSSOpacitiyVariables(BASE_COLORS.black, 'b', 10)}
  ${generateCSSOpacitiyVariables(MAIN_COLORS.primary, 'p', 15)}
`
