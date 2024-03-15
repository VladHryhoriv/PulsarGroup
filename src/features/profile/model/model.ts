import { User } from '../dto-types'
import * as events from './events'
import * as stores from './stores'

stores.$profile
  .on(events.setProfile, (_, profile) => profile)
  .reset(events.deleteAccount)
stores.$profile.on(events.updateProfileName, (state, name) => {
  return { ...state, name } as User
})
stores.$profile.on(events.updateProfileBalance, (state, balance) => {
  return { ...state, balance } as User
})
stores.$profile.on(events.changeLocale, (state, language) => {
  return { ...state, language } as User
})
stores.$profile.on(events.updateProfileTheme, (state, theme) => {
  return { ...state, theme } as User
})

stores.$sendEmail.on(events.sendEmailStatus, (_, status) => status)
