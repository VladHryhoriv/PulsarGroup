import { useStore } from 'effector-react'
import { importModal, useImportType } from 'features/modals/import'
import { importItemType } from 'mocks/import'
import React, { FC } from 'react'
import { Title as TitleTmp } from 'shared/ui/atoms/typography/title'
import { Modal as ModalTmp } from 'shared/ui/molecules/modal'
import styled, { css } from 'styled-components'
import { importRequestFx, useImportPending } from '../model'
import { ImportParams } from '../types'
import { ImportModalForm } from './modal-form'

type DataType = {
  value: string
  label: ImportParams['unit']
}

const data: DataType[] = [
  { value: '1', label: 'USD' },
  { value: '2', label: 'BTC' },
]

export const ImportModal: FC = () => {
  const activeModal = useStore(importModal.visible)
  const loading = useImportPending()
  const $importType = useImportType()

  const setImportType = () => {
    if (!$importType) {
      return
    }
    return importItemType[$importType]
  }

  const handleClose = () => importModal.close()
  const handleSubmit = (values: ImportParams) => {
    importRequestFx(values)
    handleClose()
  }

  return (
    <Modal baseId="create-import" visible={activeModal} onClose={handleClose}>
      <Title>
        Пополнить баланс <br /> с <TitlePink>{setImportType()}</TitlePink>
      </Title>
      <ImportModalForm
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
