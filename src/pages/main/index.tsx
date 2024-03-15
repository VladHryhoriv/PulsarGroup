import { t } from '@lingui/macro'
import { useInterval } from 'features/common/hooks/useInterval'
import { OptionsTemplate } from 'features/main/containers/options'
import { intervalRequestFx, optionsRequestFx } from 'features/main/model'
import React, { FC, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { getVariable } from 'shared/lib/getCssVariable'
import useMediaQuery from 'shared/lib/useMediaQuery'

export const MainPage: FC = () => {
  const isMobile = useMediaQuery(
    `(max-width: ${getVariable('--breakpoint-xl')})`
  )

  useInterval(() => {
    intervalRequestFx()
  }, 1000)

  useEffect(() => {
    optionsRequestFx()
  }, [])

  return (
    <>
      <Helmet>
        <title>Pulsar Group | {t({ id: 'helmet.home' })}</title>
      </Helmet>
      <div>
        {isMobile ? <OptionsTemplate.Mobile /> : <OptionsTemplate.Desktop />}
      </div>
    </>
  )
}
