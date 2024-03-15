export interface ExportParams {
  unit: 'USD' | 'BTC'
  account: string
  amount: number
}

export type ExportType = 'mastercard' | 'binance'
