import {
  InvestStatistic,
  ReinvestStatistic,
  WithdrawnStatistic,
} from './../../types/user'
import { createStore } from 'effector-root'

export const $investStatistic = createStore<InvestStatistic[] | null>(null, {
  name: '$investStatistic',
})
export const $reinvestStatistic = createStore<ReinvestStatistic[] | null>(
  null,
  {
    name: '$reinvestStatistic',
  }
)
export const $withdrawnStatistic = createStore<WithdrawnStatistic[] | null>(
  null,
  {
    name: '$withdrawnStatistic',
  }
)
