import { createEvent, forward } from 'effector-root'

import * as session from 'entities/auth/model/model'

export const pageLoaded = createEvent('pageLoaded')

forward({
  from: pageLoaded,
  to: session.dropSession,
})
