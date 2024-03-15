TLocale

declare type TLocale = 'en' | 'ru'
declare type TTheme = 'dark' | 'light'

declare module '*.mp3'

declare interface I18n {
  locale: TLocale
}
