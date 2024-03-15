import * as events from './events'
import {
  $investStatistic,
  $reinvestStatistic,
  $withdrawnStatistic,
} from './stores'

$investStatistic.on(events.investStatistic, (_, statistics) =>
  statistics.length
    ? statistics.map((element, index) => {
        element.id = index + 1
        element.amount = element.amount + ' USDp'
        return element
      })
    : null
)
$reinvestStatistic.on(events.reinvestStatistic, (_, statistics) =>
  statistics.length
    ? statistics.map((element, index) => {
        element.id = index + 1
        element.amount = element.amount + ' USDp'
        return element
      })
    : null
)
$withdrawnStatistic.on(events.withdrawnStatistic, (_, statistics) =>
  statistics.length
    ? statistics.map((element, index) => {
        element.id = index + 1
        element.amount = element.amount + ' USDp'
        return element
      })
    : null
)
