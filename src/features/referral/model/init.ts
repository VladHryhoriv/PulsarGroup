import { forward } from 'effector'
import { profileRequestFx } from 'features/profile/model'
import * as events from './events'

forward({
  from: events.referralLinkRequestFx.doneData.map(({ link }) => ({ link })),
  to: events.referralLinkRequest,
})

forward({
  from: events.referralProfitRequestFx.doneData.map(({ profit }) => ({
    profit,
  })),
  to: events.referralProfitRequest,
})

forward({
  from: events.referralUsersRequestFx.doneData.map(({ users }) => users),
  to: events.referralUsers,
})

forward({
  from: events.withdrawReferralProfitRequestFx.doneData,
  to: [events.referralProfitRequestFx, profileRequestFx],
})
