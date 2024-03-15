import { useStore } from 'effector-react'
import { SuccessResponse } from 'features/common/dto-types'
import { User } from '../dto-types'

import * as stores from './stores'

export const useProfile = (): User | null => {
  return useStore(stores.$profile)
}

export const useSendEmailStatus = (): SuccessResponse | null => {
  return useStore(stores.$sendEmail)
}
