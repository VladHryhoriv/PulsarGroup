import { useStore } from 'effector-react'

import * as stores from './model'

export const useLocale = (): TLocale => {
  return useStore(stores.$locale)
}
