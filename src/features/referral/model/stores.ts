import { createStore } from 'effector'
import { ReferralLinkType, ReferralProfitType, ReferralUser } from '../types'

export const $referralLink = createStore<ReferralLinkType | null>(null, {
  name: '$referralLink',
})
export const $referralProfit = createStore<ReferralProfitType | null>(null, {
  name: '$referralProfit',
})
export const $referralUsers = createStore<ReferralUser[] | null>(null, {
  name: '$referralUsers',
})
