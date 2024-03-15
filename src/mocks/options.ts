import { Option, OptionsId } from 'features/main/types/options'

export const optionsAllowedToInvest = {
  1: [10, 50],
  2: [100, 300],
  3: [500],
}

export const optionsCardTemplate = [
  {
    contributionValue: '$ 10-50',
    incomePercent: '300',
    outputPercent: '10',
  },
  {
    contributionValue: '$ 100-300',
    incomePercent: '300',
    outputPercent: '15',
  },
  {
    contributionValue: ' 500',
    incomePercent: '300',
    outputPercent: '20',
  },
]

export const initialOption = (id: OptionsId): Option => ({
  id: id,
  status: 1,
  investedSum: 0.0,
  profit: 0.0,
  total: 0.0,
  allowedToWithdraw: 0.0,
  withdrawn: 0.0,
  outputPerDay: 0.0,
})

export const initialOptions: Option[] = [
  initialOption('1'),
  initialOption('2'),
  initialOption('3'),
]
