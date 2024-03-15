import { en, ru } from 'make-plural/plurals'

import { i18n } from '@lingui/core'

i18n.loadLocaleData({
  en: { plurals: en },
  ru: { plurals: ru },
})

const showConsole = (lang: TLocale) => {
  // eslint-disable-next-line no-console
  console.log(
    '%c 📔 Loaded catalog: %s',
    'color: #2c3e50; font-size: 16px; font-weight: 700',
    lang
  )
}

const changeHTMLLangAttr = (lang: TLocale) => {
  /* CHANGE HTML ATTR LANG */
  const html = document.querySelector('html')

  if (html) {
    html.lang = lang
  }
}

export const dynamicLocale = async (lang: TLocale): Promise<void> => {
  try {
    const { messages } = await import(
      /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
      `@lingui/loader!entities/i18n/locales/${lang}.po`
    )

    i18n.load({ [lang]: messages })
    i18n.activate(lang)

    changeHTMLLangAttr(lang)

    if (process.env.NODE_ENV !== 'production') {
      showConsole(lang)
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Locale not loaded!')
  }
}
