import { FC, memo } from 'react'
import styled from 'styled-components'

import {
  Dialog,
  DialogBackdrop,
  DialogDisclosure,
  DialogProps as BaseProps,
} from 'reakit/Dialog'
import { Portal } from 'reakit/Portal'

import { useModal } from './useModal'
import CloseOutlined from 'shared/ui/atoms/icon/close-outlined'
import { useTheme } from 'entities/theme/selectors'
import { ThemeProps } from 'entities/theme/types'

export interface DialogProps extends BaseProps {
  buttonChildren?: React.ReactNode
  footerChildren?: React.ReactNode
  visible?: boolean
  onClose?: () => void
  closable?: boolean
}

const Control: FC<DialogProps> = memo(
  ({
    className,
    closable = true,
    visible = false,
    footerChildren,
    buttonChildren,
    onClose,
    children,
  }) => {
    const { dialog, body } = useModal({
      visible,
      onClose,
      closable,
    })

    return (
      <>
        <DialogDisclosure as="div" {...dialog}>
          {buttonChildren}
        </DialogDisclosure>
        {dialog.visible && (
          <Portal>
            <StyledDialogBackdrop {...dialog}>
              <Dialog
                ref={body as any}
                {...dialog}
                className={className}
                aria-label="Welcome"
                hideOnClickOutside={false}
              >
                {closable && <CloseIcon onClick={onClose} />}
                <Container>
                  <Inner>{children}</Inner>
                </Container>
                {footerChildren && <Footer>{footerChildren}</Footer>}
              </Dialog>
            </StyledDialogBackdrop>
          </Portal>
        )}
      </>
    )
  }
)

const Container = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 1;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  border-radius: 0.625rem;
`

const CloseIcon = styled(CloseOutlined)`
  position: absolute;
  cursor: pointer;
  top: 15px;
  right: 15px;

  z-index: 1000;

  path {
    stroke: ${(props: ThemeProps) => props.theme.colors.modal.color};
  }
`

const StyledDialogBackdrop = styled(DialogBackdrop)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  background: rgba(50, 50, 50, 0.6);
  /* backdrop-filter: blur(20px); */
  position: fixed;
  top: 0;
  z-index: 5000;
  transition: opacity 250ms ease-in-out 0s;
  overflow: auto;
`

const Footer = styled.div`
  background-color: var(--color-lighting);

  padding: 1.875rem 1.375rem;
`

export const SimpleModal = styled(Control)`
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  position: fixed;
  outline: 0px;
  box-shadow: 0.17rem 0.33rem 0.8333333333333334rem 0px rgba(0, 0, 0, 0.05);
  z-index: 999;

  max-height: calc(100vh - 56px);
  border-radius: var(--default-border-radius);
  background-color: var(--color-white);

  max-width: 80vw;
  min-width: 19.5rem;

  overflow: auto;
` as FC<DialogProps>

const ModalBase = styled(Control)`
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  position: fixed;
  outline: 0px;
  box-shadow: 0.17rem 0.33rem 0.8333333333333334rem 0px rgba(0, 0, 0, 0.05);
  z-index: 999;

  max-height: calc(100vh - 56px);
  border-radius: var(--default-border-radius);

  max-width: 80vw;
  min-width: 19.5rem;

  overflow: auto;

  ${
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (props) => props.style
  }
` as FC<DialogProps>

export const Modal: FC<DialogProps> = (props) => {
  const $theme = useTheme()

  // Using outside ThemeProvider

  return (
    <ModalBase
      {...props}
      style={{
        backgroundColor: $theme.colors.modal.background,
        color: $theme.colors.modal.color,
      }}
    />
  )
}
