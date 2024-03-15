import { createRequest } from 'entities/auth/model/model'
import {
  ReferralLinkType,
  ReferralProfitType,
  ReferralUser,
} from './../types/index'
import { createEvent } from 'effector'
import {
  ResponseReferralLinkDto,
  ResponseReferralProfitDto,
  ResponseReferralUsersDto,
} from '../dto-types'
import * as api from '../api'
import { SuccessResponse } from 'features/common/dto-types'

export const referralLinkRequest = createEvent<ReferralLinkType>(
  'referralLinkRequest'
)
export const referralProfitRequest = createEvent<ReferralProfitType>(
  'referralProfitRequest'
)
export const referralUsers = createEvent<ReferralUser[]>('referralUsers')

export const referralLinkRequestFx = createRequest<
  void,
  ResponseReferralLinkDto,
  Error
>({
  request: api.referralLinkRequest,
})

export const referralProfitRequestFx = createRequest<
  void,
  ResponseReferralProfitDto,
  Error
>({
  request: api.referralProfitRequest,
})

export const withdrawReferralProfitRequestFx = createRequest<
  void,
  SuccessResponse,
  Error
>({
  request: api.withdrawReferralProfitRequest,
})

export const referralUsersRequestFx = createRequest<
  void,
  ResponseReferralUsersDto,
  Error
>({
  request: api.referralUsersRequest,
})
