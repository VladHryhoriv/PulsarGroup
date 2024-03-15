import { useStore } from 'effector-react'
import { exportModal, useExportType } from 'features/modals/export'
import { exportItemType } from 'mocks/export'
import React, { FC } from 'react'
import { Title as TitleTmp } from 'shared/ui/atoms/typography/title'
import { Modal as ModalTmp } from 'shared/ui/molecules/modal'
import styled, { css } from 'styled-components'
import { exportRequestFx, useExportPending } from '../model'
import { ExportParams } from '../types'
import { ExportModalForm } from './modal-form'

type DataType = {
  value: string
  label: ExportParams['unit']
}

const data: DataType[] = [
  { value: '1', label: 'USD' },
  { value: '2', label: 'BTC' },
]

export const ExportModal: FC = () => {
  const activeModal = useStore(exportModal.visible)
  const loading = useExportPending()
  const $exportType = useExportType()

  const setExportType = () => {
    if (!$exportType) {
      return
    }
    return exportItemType[$exportType]
  }

  const handleClose = () => exportModal.close()
  const handleSubmit = (values: ExportParams) => {
    exportRequestFx(values)
  }

  return (
    <Modal baseId="create-import" visible={activeModal} onClose={handleClose}>
      <Title>
        Пополнить баланс <br /> с <TitlePink>{setExportType()}</TitlePink>
      </Title>
      <ExportModalForm
        loading={loading}
        selectData={data}
        handleSubmit={handleSubmit}
      />
    </Modal>
  )
}

const Modal = styled(ModalTmp)`
  padding: 30px 10px 10px 10px;
  box-sizing: border-box;

  @media only screen and (min-width: 518px) {
    padding: 45px 70px 25px 70px;
  }

  @media only screen and (min-width: 627px) {
    padding: 45px 110px 25px 110px;
  }
`

const basicTitle = css`
  font-size: 18px;

  @media only screen and (min-width: 321px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 769px) {
    font-size: 40px;
  }
`

const Title = styled(TitleTmp)`
  color: inherit;
  text-align: center;
  margin-bottom: 5px;
  ${basicTitle}
`

const TitlePink = styled.span`
  color: var(--color-dark-pink);
  ${basicTitle}
`
