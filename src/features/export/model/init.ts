import { forward } from 'effector'
import * as events from './events'
import { updateProfileBalance } from '../../profile/model/events'

forward({
  from: events.exportRequestFx.doneData.map(({ balance }) => balance),
  to: updateProfileBalance,
})
