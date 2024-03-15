import { forward } from 'effector'
import * as events from './events'
import { updateProfileBalance } from './../../profile/model/events'

forward({
  from: events.importRequestFx.doneData.map(({ user }) => user.balance),
  to: updateProfileBalance,
})
