import { SuccessResponse } from 'features/common/dto-types'

export interface UserId {
  _id: string
}
export interface User extends UserId {
  name: string
  admin: boolean
  email: string
  balance: number
  language: TLocale
  theme: TTheme
}

export interface ResponseUserDto extends SuccessResponse {
  user: User
}
