import { forward } from 'effector'
import * as events from './events'

forward({
  from: events.getOptionStatistic.map((option) => ({ option })),
  to: [
    events.requestInvestStatisticFx,
    events.requestReinvestStatisticFx,
    events.requestWithdrawnStatisticFx,
  ],
})

forward({
  from: events.requestInvestStatisticFx.doneData.map(
    ({ statistic }) => statistic
  ),
  to: events.investStatistic,
})

forward({
  from: events.requestReinvestStatisticFx.doneData.map(
    ({ statistic }) => statistic
  ),
  to: events.reinvestStatistic,
})

forward({
  from: events.requestWithdrawnStatisticFx.doneData.map(
    ({ statistic }) => statistic
  ),
  to: events.withdrawnStatistic,
})
