import { AuthorizedRequest, request } from 'shared/lib/request'
import { ResponseBalanceDto } from '../dto-types'

//@TODO: Check api end point

export const statisticBalanceRequest = ({
  token,
}: AuthorizedRequest<void>): Promise<ResponseBalanceDto> =>
  request({ url: '/statistic/balance', method: 'GET' }, token)
