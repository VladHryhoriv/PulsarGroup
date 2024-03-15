import { createEvent } from 'effector-root'

import * as api from 'features/admins/api'

import { createRequest } from 'entities/auth/model/model'
import { TStatisticBalance } from '../types'
import { ResponseBalanceDto } from '../dto-types'

export const getBalanceStatistic = createEvent<TStatisticBalance>(
  'getBalanceStatistic'
)

export const balanceStatisticRequestFx = createRequest<
  void, //@TODO: Describe request params type (date)
  ResponseBalanceDto,
  Error
>({
  name: 'balanceStatisticRequestFx',
  request: api.statisticBalanceRequest,
})
