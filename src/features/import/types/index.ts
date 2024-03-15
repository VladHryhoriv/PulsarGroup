export interface ImportParams {
  unit?: 'USD' | 'BTC'
  account?: string
  amount: number
}

export type ImportType = 'mastercard' | 'binance'
