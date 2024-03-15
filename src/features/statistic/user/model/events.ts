import {
  ResponseInvestStatistic,
  ResponseReinvestStatistic,
  ResponseWithdrawnStatistic,
} from './../../dto-types/user'
import {
  InvestStatistic,
  ReinvestStatistic,
  WithdrawnStatistic,
} from './../../types/user'
import { createEvent } from 'effector-root'
import { createRequest } from 'entities/auth/model/model'

import * as api from '../../api/user'

export const investStatistic = createEvent<InvestStatistic[]>('investStatistic')
export const reinvestStatistic =
  createEvent<ReinvestStatistic[]>('reinvestStatistic')
export const withdrawnStatistic =
  createEvent<WithdrawnStatistic[]>('withdrawnStatistic')
export const getOptionStatistic = createEvent<number>('getOptionStatistic')

export const requestInvestStatisticFx = createRequest<
  { option: number },
  ResponseInvestStatistic,
  Error
>({
  name: 'requestInvestStatisticFx',
  request: api.requestInvestStatistic,
})

export const requestReinvestStatisticFx = createRequest<
  { option: number },
  ResponseReinvestStatistic,
  Error
>({
  name: 'requestInvestStatisticFx',
  request: api.requestReinvestStatistic,
})

export const requestWithdrawnStatisticFx = createRequest<
  { option: number },
  ResponseWithdrawnStatistic,
  Error
>({
  name: 'requestInvestStatisticFx',
  request: api.requestWithdrawnStatistic,
})
