import React, { FC, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { changeThemeFx } from '../model'
import { useTheme } from '../selectors'
import { TTheme } from '../types'

export const ThemeProviderHOC: FC = (props) => {
  const { children } = props

  const $theme = useTheme()

  const activeTheme = localStorage.getItem('theme') as TTheme

  useEffect(() => {
    if (activeTheme) {
      changeThemeFx(activeTheme)
    } else {
      changeThemeFx('dark')
    }
  }, [activeTheme])

  return <ThemeProvider theme={$theme}>{children}</ThemeProvider>
}
