import { useStore } from 'effector-react'
import * as stores from './stores'

export const useCollapse = (): boolean => {
  return useStore(stores.$collapsed)
}
