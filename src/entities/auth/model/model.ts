import { createStore, createEvent, forward } from 'effector-root'
import { persist } from 'effector-storage/local'

import { authorizedCreateFactory } from 'entities/auth/lib/authorizedCreateFactory'
import { historyPush } from 'entities/common/model/navigations/model'
import { paths } from 'pages/paths'
// import { createFactorySocket } from 'shared/lib/createFactorySocket'

/* STORES */
export const $isAuthenticated = createStore(false, { name: '$isAuthenticated' })
export const $isAdmin = createStore(false, { name: '$isAdmin' })
export const $token = createStore<string | null>(null, { name: '$token' })
export const $isLoading = createStore(true, { name: '$isLoading' })

/* EVENTS */
export const dropSession = createEvent('dropSession')
export const setAuthorized = createEvent('setAuthorized')
export const setAdmin = createEvent<boolean>('setAdmin')
export const setSession = createEvent<string>('setSession')
export const dropLoading = createEvent('dropLoading')
export const getAuthProfile = createEvent('getAuthProfile')

/* Create  effect with session */
export const createRequest = authorizedCreateFactory({
  session: $token,
  failAuthorized: dropSession.prepend(() => true),
  serverError: historyPush.prepend(() => paths.error()),
})

// /* Create sockets with session */
// export const createSocket = createFactorySocket({
//   token: $token,
// })

persist({ store: $token, key: 'pulsar-group-token' })

forward({
  from: [setSession, setAuthorized, dropSession, setAdmin],
  to: dropLoading,
})

$isAuthenticated
  .on([setSession], () => true)
  .on(setAuthorized, () => true)
  .reset(dropSession)

$isAdmin.on(setAdmin, (_, isAdmin) => isAdmin)
$isLoading.on(dropLoading, () => false)
$token.on(setSession, (_, token) => token).reset(dropSession)
