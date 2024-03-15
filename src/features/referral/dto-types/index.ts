import { ReferralUser } from './../types/index'
import { SuccessResponse } from 'features/common/dto-types'
import { ReferralLinkType, ReferralProfitType } from '../types'

export type ResponseReferralLinkDto = ReferralLinkType & SuccessResponse
export type ResponseReferralProfitDto = ReferralProfitType & SuccessResponse
export type ResponseReferralUsersDto = {
  users: ReferralUser[]
} & SuccessResponse
