import { DefaultTheme } from '../types'
import { dark } from './dark'
import { light } from './light'

interface Themes {
  dark: DefaultTheme
  light: DefaultTheme
}

export const Theme: Themes = {
  dark,
  light,
}
