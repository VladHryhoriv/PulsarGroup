import { updateProfileLanguageRequestFx } from './../../../features/profile/model/events'
import {
  createStore,
  createEvent,
  createEffect,
  forward,
  sample,
  guard,
} from 'effector-root'
import { persist } from 'effector-storage/local'

import { dynamicLocale } from 'entities/i18n/lib/dynamic-locale'

const DEFAULT_LOCALE: TLocale =
  (process.env.REACT_APP_DEFAULT_LOCAL as TLocale | undefined) || 'en'

/* STORES */
export const $locale = createStore<TLocale>(DEFAULT_LOCALE)
export const $activatedLocale = createStore(false)

/* SYNC WITH LOCALE STORAGE */
persist({ store: $locale, key: 'sloudly-locale' })

/* EVENTS */
export const changeLocale = createEvent<TLocale>('changeLocale')
export const setActivate = createEvent<boolean>('setActivate')
export const activateLocale = createEvent('activateLocale')
export const changeLocaleFx = createEffect<TLocale, void, Error>(
  'changeLocaleFx'
).use(dynamicLocale)

sample({
  source: $locale,
  clock: activateLocale,
  fn: (locale) => locale,
  target: changeLocaleFx,
})

forward({
  from: changeLocaleFx.done.map(({ params }) => params),
  to: changeLocale,
})

forward({
  from: changeLocaleFx.done.map(({ params }) => ({ language: params })),
  to: updateProfileLanguageRequestFx,
})

/* ACTIVATE IT ONCE */
guard({
  source: $activatedLocale,
  clock: changeLocaleFx,
  filter: (is) => !is,
  target: setActivate.prepend(() => true),
})

$locale.on(changeLocale, (_, value: TLocale) => {
  return value
})
$activatedLocale.on(setActivate, (_, is: boolean) => is)
