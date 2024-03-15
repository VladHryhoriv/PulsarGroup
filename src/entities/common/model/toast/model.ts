import { createEvent } from 'effector-root'
import { toast as toastFn, ToastContent, ToastOptions } from 'react-toastify'

export const showToast =
  createEvent<{ content: ToastContent; options?: ToastOptions }>('showToast')

showToast.watch((value) => toastFn(value))
