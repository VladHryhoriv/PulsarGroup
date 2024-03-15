import { createStore } from 'effector-root'
import { SuccessResponse } from 'features/common/dto-types'
import { User } from '../dto-types'

/** 
@todo  add types
*/
export const $profile = createStore<User | null>(null, { name: '$profile' })
export const $sendEmail = createStore<SuccessResponse | null>(null, {
  name: '$sendEmail',
})
