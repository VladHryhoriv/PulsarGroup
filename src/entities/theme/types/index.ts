import { COLORS } from './../colors'

type ValueOf<T> = T[keyof T]
interface IButton {
  text: ValueOf<typeof COLORS>
  background?: ValueOf<typeof COLORS>
  border?: ValueOf<typeof COLORS>
}

interface IButtons {
  ghost?: IButton
  primary?: IButton
  ghostG: IButton
}

interface IModal {
  main: string
  overlay: string
  background: string
  color: string
}

interface ICommon {
  background: string
  text: string
  cardBG: string
}

interface IInput {
  background: string
  color: string
  border: string
  borderRadius: string
  link: string
}

interface IHeader {
  color: string
  background: string
}

interface ICard {
  color: string
  background: string
}

interface ITable {
  color: string
  borderColor: string
}

interface IOption {
  inputBg: string
}
interface IMain {
  background: string
  header: IHeader
  card: ICard
  table: ITable
  option: IOption
}

interface ISideNav {
  background: string
}

export type TTheme = 'dark' | 'light'

export interface DefaultTheme {
  name: TTheme
  colors: {
    common: ICommon
    buttons: IButtons
    modal: IModal
    input: IInput
  }
  auth: {
    background:
      | '../../../../assets/images/bg-page-dark.png'
      | '../../../../assets/images/bg-page-light.png'
  }
  main: IMain
  sideNav: ISideNav
}

export interface ThemeProps {
  theme: DefaultTheme
}
