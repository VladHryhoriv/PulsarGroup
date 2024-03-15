import { Modal as ModalComponent } from './modal'
import { confirm } from './confirm'

export type ModalProps = typeof ModalComponent & {
  confirm: typeof confirm
}

const Modal = ModalComponent as ModalProps

Modal.confirm = function confirmFn(props: any) {
  return confirm(props)
}

export { Modal }
