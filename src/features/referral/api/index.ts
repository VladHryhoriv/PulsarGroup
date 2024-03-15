import { SuccessResponse } from 'features/common/dto-types'
import { AuthorizedRequest, request } from 'shared/lib/request'
import {
  ResponseReferralLinkDto,
  ResponseReferralProfitDto,
  ResponseReferralUsersDto,
} from '../dto-types'

export const referralLinkRequest = ({
  ...body
}: AuthorizedRequest): Promise<ResponseReferralLinkDto> =>
  new Promise((resolve, _) =>
    resolve({
      link: 'https://www.youtube.com/',
      success: true,
    })
  )

export const referralProfitRequest = ({
  ...body
}: AuthorizedRequest): Promise<ResponseReferralProfitDto> =>
  new Promise((resolve, _) =>
    resolve({
      profit: 10.0,
      success: true,
    })
  )

export const withdrawReferralProfitRequest = ({
  ...body
}: AuthorizedRequest): Promise<SuccessResponse> =>
  new Promise((resolve, _) =>
    resolve({
      success: true,
    })
  )

export const referralUsersRequest = ({
  ...body
}: AuthorizedRequest): Promise<ResponseReferralUsersDto> =>
  new Promise((resolve, _) =>
    resolve({
      users: [
        { name: 'Jack Doe', id: '1', email: 'jackdoe@mail.com', award: 50 },
        { name: 'Jack Doe', id: '1', email: 'jackdoe@mail.com', award: 50 },
        { name: 'Jack Doe', id: '1', email: 'jackdoe@mail.com', award: 50 },
        { name: 'Jack Doe', id: '1', email: 'jackdoe@mail.com', award: 50 },
        { name: 'Jack Doe', id: '1', email: 'jackdoe@mail.com', award: 50 },
        { name: 'Jack Doe', id: '1', email: 'jackdoe@mail.com', award: 50 },
      ],
      success: true,
    })
  )
// request({
//   method: 'GET',
//   url: 'referral/link',
// })
