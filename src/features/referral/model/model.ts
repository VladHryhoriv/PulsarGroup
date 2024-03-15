import * as events from './events'
import * as stores from './stores'

stores.$referralLink.on(events.referralLinkRequest, (_, link) => link)
stores.$referralProfit.on(events.referralProfitRequest, (_, profit) => profit)
stores.$referralUsers.on(events.referralUsers, (_, users) => users)
