import { Trans, t } from '@lingui/macro'
import { ExportType } from 'features/export/types'
import {
  ImportTitleCard,
  ImportTitle,
  ImportSubTitle,
  ImportWrap,
  ImportCard,
  ImportPaymentImg,
  ImportGhostButton,
} from 'features/import/components'
import { exportModal, setExportType } from 'features/modals/export'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

export const ExportPage: FC = () => {
  const handleChoose = (value: ExportType) => {
    setExportType(value)
    exportModal.open()
  }

  return (
    <>
      <Helmet>
        <title>Pulsar Group | {t({ id: 'helmet.export' })}</title>
      </Helmet>
      <ImportTitleCard>
        <ImportTitle>
          <Trans id="export.title" />
        </ImportTitle>
        <ImportSubTitle>
          <Trans id="export.sub-title" />
        </ImportSubTitle>
      </ImportTitleCard>
      <ImportWrap>
        <ImportCard>
          <ImportPaymentImg src="../../../assets/images/payment-masterCard.png" />
          <ImportGhostButton onClick={() => handleChoose('mastercard')}>
            <Trans id="side-link.export" />
          </ImportGhostButton>
        </ImportCard>
        <ImportCard>
          <ImportPaymentImg src="../../../assets/images/payment-masterCard.png" />
          <ImportGhostButton onClick={() => handleChoose('mastercard')}>
            <Trans id="side-link.export" />
          </ImportGhostButton>
        </ImportCard>
        <ImportCard>
          <ImportPaymentImg src="../../../assets/images/payment-masterCard.png" />
          <ImportGhostButton onClick={() => handleChoose('mastercard')}>
            <Trans id="side-link.export" />
          </ImportGhostButton>
        </ImportCard>
        <ImportCard>
          <ImportPaymentImg src="../../../assets/images/payment-masterCard.png" />
          <ImportGhostButton onClick={() => handleChoose('mastercard')}>
            <Trans id="side-link.export" />
          </ImportGhostButton>
        </ImportCard>
        <ImportCard>
          <ImportPaymentImg src="../../../assets/images/payment-masterCard.png" />
          <ImportGhostButton onClick={() => handleChoose('mastercard')}>
            <Trans id="side-link.export" />
          </ImportGhostButton>
        </ImportCard>
        <ImportCard>
          <ImportPaymentImg src="../../../assets/images/payment-masterCard.png" />
          <ImportGhostButton onClick={() => handleChoose('mastercard')}>
            <Trans id="side-link.export" />
          </ImportGhostButton>
        </ImportCard>
      </ImportWrap>
    </>
  )
}
