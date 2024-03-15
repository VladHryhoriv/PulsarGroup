import { Trans, t } from '@lingui/macro'
import {
  ImportTitleCard,
  ImportTitle,
  ImportSubTitle,
  ImportWrap,
  ImportCard,
  ImportPaymentImg,
  ImportGhostButton,
  ImportPaymentImgWrap,
} from 'features/import/components'
import { ImportType } from 'features/import/types'
import { importModal, setImportType } from 'features/modals/import'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

export const ImportPage: FC = () => {
  const handleChoose = (value: ImportType) => {
    setImportType(value)
    importModal.open()
  }

  return (
    <>
      <Helmet>
        <title>Pulsar Group | {t({ id: 'helmet.import' })}</title>
      </Helmet>
      <ImportTitleCard>
        <ImportTitle>
          <Trans id="import.title" />
        </ImportTitle>
        <ImportSubTitle>
          <Trans id="import.sub-title" />
        </ImportSubTitle>
      </ImportTitleCard>
      <ImportWrap>
        <ImportCard>
          <ImportPaymentImgWrap>
            <ImportPaymentImg src="../../../assets/images/payment-masterCard.png" />
          </ImportPaymentImgWrap>
          <ImportGhostButton onClick={() => handleChoose('mastercard')}>
            <Trans id="side-link.import" />
          </ImportGhostButton>
        </ImportCard>
        <ImportCard>
          <ImportPaymentImgWrap>
            <ImportPaymentImg src="../../../assets/images/payment-binance.jpg" />
          </ImportPaymentImgWrap>
          <ImportGhostButton onClick={() => handleChoose('binance')}>
            <Trans id="side-link.import" />
          </ImportGhostButton>
        </ImportCard>
        <ImportCard>
          <ImportPaymentImgWrap>
            <ImportPaymentImg src="../../../assets/images/payment-liqpay.png" />
          </ImportPaymentImgWrap>
          <ImportGhostButton>
            <Trans id="side-link.import" />
          </ImportGhostButton>
        </ImportCard>
        <ImportCard>
          <ImportPaymentImgWrap>
            <ImportPaymentImg src="../../../assets/images/payment-masterCard.png" />
          </ImportPaymentImgWrap>
          <ImportGhostButton>
            <Trans id="side-link.import" />
          </ImportGhostButton>
        </ImportCard>
        <ImportCard>
          <ImportPaymentImgWrap>
            <ImportPaymentImg src="../../../assets/images/payment-masterCard.png" />
          </ImportPaymentImgWrap>
          <ImportGhostButton>
            <Trans id="side-link.import" />
          </ImportGhostButton>
        </ImportCard>
        <ImportCard>
          <ImportPaymentImgWrap>
            <ImportPaymentImg src="../../../assets/images/payment-masterCard.png" />
          </ImportPaymentImgWrap>
          <ImportGhostButton>
            <Trans id="side-link.import" />
          </ImportGhostButton>
        </ImportCard>
      </ImportWrap>
    </>
  )
}
