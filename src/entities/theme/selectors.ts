import { useStore } from 'effector-react'
import * as store from './model'
import { DefaultTheme, TTheme } from './types'

export const useTheme = (): DefaultTheme => {
  return useStore(store.$theme)
}

export const useActiveTheme = (): TTheme => {
  return useStore(store.$activeTheme)
}
