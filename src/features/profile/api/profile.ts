import { SuccessResponse } from 'features/common/dto-types'
import { ResponseLoginDto, ResponseRegisterDto } from 'features/join/dto-types'
import {
  LoginParams,
  ResetParams,
  RestoreParams,
  SignUpParams,
} from 'features/join/types'
import { profile } from 'mocks/profile'
import { request, AuthorizedRequest } from 'shared/lib/request'
import { ResponseUserDto } from '../dto-types'
import { ChangeLanguageParams } from '../types'

// export const profileRequest = ({
//   token,
// }: AuthorizedRequest): Promise<ResponseUserDto> =>
//   request({ method: 'GET', url: '/me/' }, token)

// export const loginRequest = ({
//   ...body
// }: LoginParams): Promise<ResponseLoginDto> =>
//   request({
//     url: '/signin/',
//     method: 'POST',
//     body,
//   })

export const profileRequest = ({
  token,
}: AuthorizedRequest): Promise<ResponseUserDto> =>
  new Promise((resolve, _) => resolve({ user: profile.admin, success: true }))

export const loginRequest = ({
  ...body
}: LoginParams): Promise<ResponseLoginDto> =>
  new Promise((resolve, _) =>
    resolve({
      auth_token: '1',
      isAdmin: true,
      success: true,
    })
  )

export const registerUserRequest = ({
  ...body
}: SignUpParams): Promise<ResponseRegisterDto> =>
  request({
    url: '/signup',
    method: 'POST',
    body,
  })

export const restorePasswordRequest = ({
  ...body
}: RestoreParams): Promise<boolean> =>
  request({
    url: '/users/restorePass',
    method: 'POST',
    body,
  })

export const resetPasswordRequest = ({
  ...body
}: ResetParams): Promise<boolean> =>
  request({
    url: '/users/reset',
    method: 'POST',
    body,
  })

export const updateProfileNameRequest = ({
  token,
  ...body
}: AuthorizedRequest<{
  name: string
}>): Promise<ResponseUserDto> =>
  request(
    {
      url: '/me/',
      method: 'PATCH',
      body,
    },
    token
  )

export const updateProfileThemeRequest = ({
  token,
  ...body
}: AuthorizedRequest<{
  theme: TTheme
}>): Promise<ResponseUserDto> =>
  request(
    {
      url: '/me/',
      method: 'PATCH',
      body,
    },
    token
  )

// export const updateProfileLanguageRequest = ({
//   token,
//   ...body
// }: AuthorizedRequest<ChangeLanguageParams>): Promise<ResponseUserDto> =>
//   request(
//     {
//       url: '/me/',
//       method: 'PATCH',
//       body,
//     },
//     token
//   )

// TODO: Uncommit after BE

export const updateProfileLanguageRequest = ({
  token,
  ...body
}: AuthorizedRequest<ChangeLanguageParams>): Promise<ResponseUserDto> =>
  new Promise((resolve, _) =>
    resolve({
      user: { ...profile.admin, language: body.language },
      success: true,
    })
  )

export const deleteAccountRequest = ({
  token,
}: AuthorizedRequest<void>): Promise<SuccessResponse> =>
  request(
    {
      url: '/me/',
      method: 'DELETE',
    },
    token
  )

export const sendEmailRequest = ({
  token,
  ...body
}: AuthorizedRequest): Promise<SuccessResponse> =>
  request(
    {
      url: '/user/send/me',
      method: 'POST',
      body,
    },
    token
  )
