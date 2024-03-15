import { TTheme } from '../types'

const showConsole = (theme: TTheme) => {
  // eslint-disable-next-line no-console
  console.log(
    '%c 📔 Loaded catalog: %s',
    'color: #2c3e50; font-size: 16px; font-weight: 700',
    theme
  )
}

export const dynamicTheme = async (theme: TTheme): Promise<void> => {
  try {
    localStorage.setItem('theme', theme)

    if (process.env.NODE_ENV !== 'production') {
      showConsole(theme)
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Theme not loaded!')
  }
}
