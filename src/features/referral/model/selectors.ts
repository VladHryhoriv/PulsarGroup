import { useStore } from 'effector-react'
import * as stores from './stores'
import * as events from './events'
import { ReferralLinkType, ReferralProfitType, ReferralUser } from '../types'

export const useReferralLink = (): ReferralLinkType | null => {
  return useStore(stores.$referralLink)
}

export const useReferralLinkPending = (): boolean => {
  return useStore(events.referralLinkRequestFx.pending)
}

export const useReferralProfit = (): ReferralProfitType | null => {
  return useStore(stores.$referralProfit)
}

export const useReferralProfitPending = (): boolean => {
  return useStore(events.referralProfitRequestFx.pending)
}

export const useReferralUsers = (): ReferralUser[] | null => {
  return useStore(stores.$referralUsers)
}

export const useReferralUsersPending = (): boolean => {
  return useStore(events.referralUsersRequestFx.pending)
}

export const useReferralWithdrawnPending = (): boolean => {
  return useStore(events.withdrawReferralProfitRequestFx.pending)
}
