import { useStore } from 'effector-react'

import * as model from './model'

export const usePendingAuth = (): boolean => {
  return useStore(model.$isLoading)
}

export const useAuthenticated = (): boolean => {
  return useStore(model.$isAuthenticated)
}

export const useIsAdmin = (): boolean => {
  return useStore(model.$isAdmin)
}
