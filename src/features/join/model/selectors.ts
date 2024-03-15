import { useStore } from 'effector-react'

import * as events from './events'

export const usePendingRegister = (): boolean => {
  return useStore(events.registerUserRequestFx.pending)
}

export const usePendingLogin = (): boolean => {
  return useStore(events.loginRequestFx.pending)
}

export const usePendingRestore = (): boolean => {
  return useStore(events.restorePasswordRequestFx.pending)
}

export const usePendingReset = (): boolean => {
  return useStore(events.resetPasswordRequestFx.pending)
}
