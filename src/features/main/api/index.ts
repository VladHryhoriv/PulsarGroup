import { AuthorizedRequest, request } from 'shared/lib/request'
import {
  ResponseOptionDto,
  ResponseOptionsDto,
  ResponseWithdrawnOptionDto,
} from '../dto-types/options'
import { InvestOptionParams, WithdrawnOptionParams } from '../types/options'

export const optionsRequest = ({
  token,
}: AuthorizedRequest<void>): Promise<ResponseOptionsDto> =>
  request({ url: '/options/', method: 'GET' }, token)

export const investOptionsRequest = ({
  token,
  ...body
}: AuthorizedRequest<InvestOptionParams>): Promise<ResponseOptionDto> =>
  request({ url: '/options/', method: 'POST', body }, token)

export const reInvestOptionsRequest = ({
  token,
  option_id,
  ...body
}: AuthorizedRequest<InvestOptionParams>): Promise<ResponseOptionDto> =>
  request(
    { url: `/options/reinvest/${option_id}`, method: 'POST', body },
    token
  )

export const withdrawnOptionsRequest = ({
  token,
  id,
}: AuthorizedRequest<WithdrawnOptionParams>): Promise<ResponseWithdrawnOptionDto> =>
  request({ url: `/options/withdraw/${id}`, method: 'GET' }, token)
