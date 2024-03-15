import * as events from './events'
import * as stores from './stores'

stores.$collapsed.on(events.collapsedEvent, (_, profile) => profile)
