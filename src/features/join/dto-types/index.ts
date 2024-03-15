import { SuccessResponse } from 'features/common/dto-types'

export interface ResponseLoginDto extends SuccessResponse {
  auth_token: string
  isAdmin: boolean
}

export type ResponseRegisterDto = SuccessResponse

export interface ErrorRegisterDto {
  error: {
    message: string
    emailUsed: boolean
  }
}
