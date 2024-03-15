import { FC, useEffect } from 'react'
import { useStore } from 'effector-react'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'

import * as locales from 'entities/i18n/models/model'
import { CenterTemplate } from 'shared/ui/templates/center-template'
import { Spin } from 'shared/ui/atoms/spin'

export const LocaleProvider: FC = ({ children }) => {
  const activatedLocale = useStore(locales.$activatedLocale)
  useEffect(() => {
    locales.activateLocale()
  }, [])
  if (!activatedLocale)
    return (
      <CenterTemplate>
        <Spin size="large" />
      </CenterTemplate>
    )
  return <I18nProvider i18n={i18n}>{children}</I18nProvider>
}
