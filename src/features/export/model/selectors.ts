import { useStore } from 'effector-react'
import { exportRequestFx } from './events'

export const useExportPending = (): boolean => {
  return useStore(exportRequestFx.pending)
}
