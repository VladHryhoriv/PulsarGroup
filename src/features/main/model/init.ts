import { forward } from 'effector'
import * as events from './events'
import { updateProfileBalance } from 'features/profile/model'

forward({
  from: events.optionsRequestFx.doneData.map(({ options }) => options),
  to: events.getOptions,
})

forward({
  from: events.intervalRequestFx.doneData.map(({ options }) => options),
  to: events.intervalWorker,
})

forward({
  from: events.investOptionsRequestFx.doneData.map(({ option }) => option),
  to: events.investOption,
})

forward({
  from: events.intervalRequestFx.doneData.map(({ balance }) => balance),
  to: updateProfileBalance,
})

forward({
  from: events.withdrawnOptionRequestFx.doneData.map(({ option }) => option),
  to: events.withdrawnOption,
})

forward({
  from: events.investOptionsRequestFx.doneData.map(({ balance }) => balance),
  to: updateProfileBalance,
})
