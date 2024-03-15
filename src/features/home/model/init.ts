import { forward } from 'effector'
import * as events from './events'
import './model'

forward({
  from: events.collapsedEventFx.map((params) => params),
  to: events.collapsedEvent,
})
