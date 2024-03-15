import * as events from './events'
import { $balanceStatistic } from './stores'

$balanceStatistic.on(events.getBalanceStatistic, (_, statistic) => statistic)
