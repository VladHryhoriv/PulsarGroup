import { t } from '@lingui/macro'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

export const Statistic: FC = () => {
  return (
    <>
      <Helmet>
        <title>Pulsar Group | {t({ id: 'helmet.import' })}</title>
      </Helmet>
      <div>Statistic</div>
    </>
  )
}
