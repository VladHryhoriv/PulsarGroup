import { useRef, useCallback, useEffect } from 'react'

import { useDialogState, DialogStateReturn } from 'reakit/Dialog'
import { useOnClickOutside } from './useClickOutside'

interface useModalProps {
  visible?: boolean
  closable?: boolean
  onClose?: () => void
}

interface useModalReturn {
  dialog: DialogStateReturn
  onHide: () => void
  onShow: () => void
  body: React.MutableRefObject<undefined>
}

export const useModal = ({
  visible = false,
  closable = false,
  onClose,
}: useModalProps): useModalReturn => {
  const body = useRef()
  const dialog = useDialogState({
    visible,
    modal: true,
  })

  const handleHide = useCallback(() => {
    if (dialog.visible) {
      dialog.hide()

      onClose?.()
    }
  }, [dialog, onClose])

  const handleShow = useCallback(() => {
    dialog.show()
  }, [dialog])

  useOnClickOutside(body, () => (closable ? handleHide() : null))

  const handleChange = useCallback(() => {
    if (visible) {
      handleShow()
    } else {
      handleHide()
    }
  }, [handleHide, handleShow, visible])

  useEffect(() => {
    handleChange()
  }, [handleChange])

  return { dialog, onHide: handleHide, onShow: handleShow, body }
}
