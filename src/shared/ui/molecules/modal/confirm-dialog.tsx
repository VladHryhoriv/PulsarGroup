import { FC, useState } from 'react'
import styled from 'styled-components'

import {
  GhostButton,
  GhostGradientButton,
  PrimaryButton,
  PrimaryOrangeButton,
} from 'shared/ui/atoms/button'

import { Modal } from './modal'
import { t } from '@lingui/macro'

export interface ConfirmProps {
  onOk?: () => void | Promise<unknown>
  onCancel?: () => void
  okText?: string | React.ReactNode
  cancelText?: string | React.ReactNode
  content?: string | React.ReactNode
  close?: () => void
  theme?: 'primary' | 'danger'
}

const renderButtons = (
  theme: 'primary' | 'danger',
  loading: boolean,
  onOk: () => void,
  onCancel: () => void
): JSX.Element => {
  return theme === 'danger' ? (
    <>
      <GhostButton loading={loading} disabled={loading} onClick={onOk}>
        {t`confirm`}
      </GhostButton>
      <PrimaryOrangeButton onClick={onCancel}>{t`cancel`}</PrimaryOrangeButton>
    </>
  ) : (
    <>
      <GhostGradientButton loading={loading} disabled={loading} onClick={onOk}>
        {t`confirm`}
      </GhostGradientButton>
      <PrimaryButton onClick={onCancel}>{t`cancel`}</PrimaryButton>
    </>
  )
}

export const ConfirmDialog: FC<ConfirmProps> = ({
  content,
  theme = 'primary',
  onOk,
  onCancel,
  close,
  ...props
}) => {
  const [loading, setLoading] = useState(false)

  const handleOnOk = async () => {
    try {
      setLoading(true)
      await onOk?.()
    } finally {
      setLoading(false)
      close?.()
    }
  }
  const handleCancel = () => {
    onCancel?.()
    close?.()
  }
  return (
    <Modal {...props} visible baseId="confirm" closable={false}>
      <Content>
        <span>{content}</span>
      </Content>
      <Actions>
        {renderButtons(theme, loading, handleOnOk, handleCancel)}
      </Actions>
    </Modal>
  )
}

const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 1.275rem 2.375rem;
  padding-top: 0;
`

const Content = styled.div`
  word-wrap: break-word;
  font-size: 14px;
  line-height: 1.5715;
  text-align: center;

  padding: 1.075rem 2.375rem;
  padding-bottom: 1.5rem;

  @media only screen and (min-width: 485px) {
    padding: 1.875rem 2.375rem;
    padding-bottom: 1.5rem;
  }
`
