import { useStore } from 'effector-react'
import { $balanceStatistic, balanceStatisticRequestFx } from '.'
import { TStatisticBalance } from '../types'

export const useBalanceStatistic = (): TStatisticBalance | null => {
  return useStore($balanceStatistic)
}

export const useOptionsPending = (): boolean => {
  return useStore(balanceStatisticRequestFx.pending)
}
