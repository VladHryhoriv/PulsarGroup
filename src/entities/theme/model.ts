import { createEffect, createEvent, forward, createStore } from 'effector-root'
import { dynamicTheme } from './lib/dynamic-theme'
import { Theme } from './themes'
import { DefaultTheme, TTheme } from './types'

export const $theme = createStore<DefaultTheme>(Theme.dark)
export const $activeTheme = createStore<TTheme>('light')

export const changeTheme = createEvent<TTheme>('changeTheme')
export const changeThemeFx = createEffect<TTheme, void, Error>(
  'changeThemeFx'
).use(dynamicTheme)

forward({
  from: changeThemeFx.done.map(({ params }) => params),
  to: changeTheme,
})

$theme.on(changeTheme, (_, theme) => {
  if (theme === 'dark') {
    return Theme.dark
  } else {
    return Theme.light
  }
})

$activeTheme.on(changeTheme, (_, theme) => {
  return theme
})
