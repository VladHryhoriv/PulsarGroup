type TBalanceKey = 'users' | 'system' | 'pool' | 'reserve'

type TBalanceData = {
  balance: number
  increase: boolean
}

export type TStatisticBalance = Record<TBalanceKey, TBalanceData>
