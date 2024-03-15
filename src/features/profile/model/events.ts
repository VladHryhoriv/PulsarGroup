import { createEvent } from 'effector-root'

import * as api from 'features/profile/api/profile'

import { createRequest } from 'entities/auth/model/model'
import { ResponseUserDto, User } from '../dto-types'
import { SuccessResponse } from 'features/common/dto-types'
import { ChangeLanguageParams } from '../types'

export const setProfile = createEvent<User>('setProfile')
export const deleteAccount = createEvent<boolean>('setProfile')
export const updateProfileName = createEvent<string>('updateProfileName')
export const updateProfileTheme = createEvent<TTheme>('updateProfileTheme')
export const updateProfileBalance = createEvent<number>('updateProfileBalance')
export const sendEmailStatus = createEvent('sendEmailStatus')
export const changeLocale = createEvent<TLocale>('changeLocale')

export const profileRequestFx = createRequest<void, ResponseUserDto, Error>({
  request: api.profileRequest,
  name: 'profileRequestFx',
})

export const sendEmailStatusRequestFx = createRequest<
  void,
  SuccessResponse,
  Error
>({
  request: api.sendEmailRequest,
  name: 'sendEmailStatusRequestFx',
})

export const updateProfileNameRequestFx = createRequest<
  { name: string },
  ResponseUserDto,
  Error
>({
  request: api.updateProfileNameRequest,
  name: 'updateProfileRequestFx',
})

export const updateProfileThemeRequestFx = createRequest<
  { theme: TTheme },
  ResponseUserDto,
  Error
>({
  request: api.updateProfileThemeRequest,
  name: 'updateProfileThemeRequestFx',
})

export const updateProfileLanguageRequestFx = createRequest<
  ChangeLanguageParams,
  ResponseUserDto,
  Error
>({
  request: api.updateProfileLanguageRequest,
  name: 'updateProfileLanguageRequestFx',
})

export const deleteAccountRequestFx = createRequest<
  void,
  SuccessResponse,
  Error
>({
  request: api.deleteAccountRequest,
  name: 'deleteAccountRequestFx',
})
