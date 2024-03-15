import { forward } from 'effector'
import * as events from './events'

forward({
  from: events.balanceStatisticRequestFx.doneData.map(
    ({ statistic }) => statistic
  ),
  to: events.getBalanceStatistic,
})
