import { useStore } from 'effector-react'
import { importRequestFx } from './events'

export const useImportPending = (): boolean => {
  return useStore(importRequestFx.pending)
}
