import { createEffect } from 'effector-root'
import * as api from 'features/profile/api/profile'
import { createRequest } from 'entities/auth/model/model'

import {
  LoginParams,
  ResetParams,
  RestoreParams,
  SignUpParams,
} from 'features/join/types'
import {
  ErrorRegisterDto,
  ResponseLoginDto,
  ResponseRegisterDto,
} from '../dto-types'

/* REQUESTS */
export const loginRequestFx = createRequest<
  LoginParams,
  ResponseLoginDto,
  Error
>({
  request: async (params) => await api.loginRequest({ ...params }),
  name: 'loginRequestFx',
})

export const registerUserRequestFx = createEffect<
  SignUpParams,
  ResponseRegisterDto,
  ErrorRegisterDto
>('registerUserRequestFx').use(api.registerUserRequest)

export const restorePasswordRequestFx = createEffect<
  RestoreParams,
  boolean,
  Error
>('restorePasswordRequestFx').use(api.restorePasswordRequest)

export const resetPasswordRequestFx = createEffect<
  ResetParams,
  boolean,
  boolean
>('restorePasswordRequestFx').use(api.resetPasswordRequest)
