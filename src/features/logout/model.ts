import { createEvent, forward } from 'effector-root'
import * as session from 'entities/auth/model/model'

export const logout = createEvent('pageLoaded')

forward({
  from: logout,
  to: session.dropSession,
})
