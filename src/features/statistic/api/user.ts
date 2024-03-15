import {
  ResponseInvestStatistic,
  ResponseWithdrawnStatistic,
  ResponseReinvestStatistic,
} from './../dto-types/user'
import { AuthorizedRequest, request } from 'shared/lib/request'

export const requestInvestStatistic = ({
  option,
  token,
}: AuthorizedRequest<{ option: number }>): Promise<ResponseInvestStatistic> =>
  request(
    {
      url: `/options/statistic/invest/${option.toString()}`,
      method: 'GET',
    },
    token
  )

export const requestReinvestStatistic = ({
  option,
  token,
}: AuthorizedRequest<{ option: number }>): Promise<ResponseReinvestStatistic> =>
  request(
    {
      url: `/options/statistic/reinvest/${option.toString()}`,
      method: 'GET',
    },
    token
  )

export const requestWithdrawnStatistic = ({
  option,
  token,
}: AuthorizedRequest<{
  option: number
}>): Promise<ResponseWithdrawnStatistic> =>
  request(
    {
      url: `/options/statistic/withdrawn/${option.toString()}`,
      method: 'GET',
    },
    token
  )
