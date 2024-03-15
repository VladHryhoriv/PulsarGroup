import { COLORS } from '../colors'
import { DefaultTheme } from '../types'

export const light: DefaultTheme = {
  name: 'light',
  colors: {
    buttons: {
      ghostG: {
        text: COLORS.darkViolet,
        background: COLORS.mainLight,
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
      background: COLORS.mainLight,
      color: COLORS.mainColorLight,
    },
    input: {
      background: '#EFEFEF',
      color: '#44566C',
      border: '1px solid rgba(0, 0, 0, 0.3)',
      borderRadius: '10px',
      link: '#4F69F1',
    },
  },
  auth: {
    background: '../../../../assets/images/bg-page-light.png',
  },
  main: {
    background: COLORS.mainBgLight,
    header: {
      color: COLORS.mainColorLight,
      background: COLORS.mainLight,
    },
    card: {
      color: COLORS.mainColorLight,
      background: COLORS.mainLight,
    },
    table: {
      color: COLORS.mainColorLight,
      borderColor: COLORS.darkBlue,
    },
    option: {
      inputBg: COLORS.gray,
    },
  },
  sideNav: {
    background: 'linear-gradient(to bottom, #FDFDFD 0%, #F0F0F0 100%);',
  },
}
