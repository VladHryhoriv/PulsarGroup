import { FC } from 'react'
import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

import {
  ToastContainer as Container,
  ToastContainerProps as BaseProps,
} from 'react-toastify'
import { Portal } from 'reakit/Portal'

interface ToastContainerProps extends BaseProps {
  className?: string
}

const Component: FC<ToastContainerProps> = ({ className, ...props }) => (
  <Portal>
    <div className={className}>
      <StyledContainer />
    </div>
  </Portal>
)

const StyledContainer = styled(Container).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})`
  /* .toast-container */
  width: 100%;

  /* .toast is passed to toastClassName */
  .toast {
    background-color: var(--color-black);
  }

  button[aria-label='close'] {
    display: none;
  }

  /* .body is passed to bodyClassName */
  /* .body {
  } */

  /* .progress is passed to progressClassName */
  /* .progress {
  } */
`

export const ToastContainer = styled(Component).attrs({
  // custom props
})`
  /* .Toastify__toast-container {
  }
  .Toastify__toast {
  }
  .Toastify__toast--error {
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--success {
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  } */
` as FC<ToastContainerProps>
