import { createStore } from 'effector-root'
import { TStatisticBalance } from '../types'

export const $balanceStatistic = createStore<TStatisticBalance | null>(null, {
  name: '$balanceStatistic',
})
