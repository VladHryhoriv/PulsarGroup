import { useStore } from 'effector-react'
import {
  requestInvestStatisticFx,
  requestReinvestStatisticFx,
  requestWithdrawnStatisticFx,
} from './events'
import {
  $investStatistic,
  $reinvestStatistic,
  $withdrawnStatistic,
} from './stores'
import {
  InvestStatistic,
  ReinvestStatistic,
  WithdrawnStatistic,
} from './../../types/user'

// User invest statistic

export const useInvestStatistic = (): InvestStatistic[] | null => {
  return useStore($investStatistic)
}

export const useInvestStatisticPending = (): boolean => {
  return useStore(requestInvestStatisticFx.pending)
}

export const useReinvestStatistic = (): ReinvestStatistic[] | null => {
  return useStore($reinvestStatistic)
}

export const useReinvestStatisticPending = (): boolean => {
  return useStore(requestReinvestStatisticFx.pending)
}

export const useWithdrawnStatistic = (): WithdrawnStatistic[] | null => {
  return useStore($withdrawnStatistic)
}

export const useWithdrawnStatisticPending = (): boolean => {
  return useStore(requestWithdrawnStatisticFx.pending)
}
