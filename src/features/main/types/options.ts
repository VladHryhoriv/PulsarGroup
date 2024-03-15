// type OptionsStatus = 'хз' | 'initial' | 'invested' | 'fully' | 'export'
export type OptionsStatus = 0 | 1 | 2 | 3 | 4
export type OptionsId = '1' | '2' | '3'

export interface Option {
  id: OptionsId
  status: OptionsStatus
  investedSum: number
  profit: number
  total: number
  allowedToWithdraw: number
  withdrawn: number
  outputPerDay: number
}

export type InvestOptionParams = {
  amount: number
  option_id: OptionsId
}

export type ReInvestOptionParams = InvestOptionParams

export type WithdrawnOptionParams = {
  id: OptionsId
}
