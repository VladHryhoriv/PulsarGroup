import { COLORS } from '../colors'
import { DefaultTheme } from '../types'

export const dark: DefaultTheme = {
  name: 'dark',
  colors: {
    buttons: {
      ghostG: {
        text: COLORS.mainColorDark,
        background: COLORS.mainDark,
      },
      primary: {
        text: COLORS.white,
      },
    },
    common: {
      background: '',
      text: '',
      cardBG: '',
    },
    modal: {
      main: '',
      overlay: '',
      background: COLORS.mainDark,
      color: COLORS.mainColorDark,
    },
    input: {
      background:
        'linear-gradient(101.07deg, rgba(141, 171, 185, 0.15) -10.36%, rgba(67, 45, 98, 0.15) 86.57%)',
      color: '#FAF0F9',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '40px',
      link: '#EF5DA8',
    },
  },
  auth: {
    background: '../../../../assets/images/bg-page-dark.png',
  },
  main: {
    background: COLORS.mainBgDark,
    header: {
      color: COLORS.mainColorDark,
      background: COLORS.mainDark,
    },
    card: {
      color: COLORS.mainColorDark,
      background: COLORS.mainDark,
    },
    table: {
      color: COLORS.mainColorDark,
      borderColor: COLORS.mainColorLight,
    },
    option: {
      inputBg:
        'linear-gradient(101.07deg, rgba(141, 171, 185, 0.15) -10.36%, rgba(67, 45, 98, 0.15) 86.57%)',
    },
  },
  sideNav: {
    background: 'linear-gradient(to bottom, #262626 0%, #3e3e3e 100%);',
  },
}
