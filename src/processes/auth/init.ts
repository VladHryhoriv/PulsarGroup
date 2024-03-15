import { changeLocale } from './../../entities/i18n/models/model'
import { forward, split, sample } from 'effector-root'

import * as session from 'entities/auth/model/model'

import * as profile from 'features/profile/model'
import * as join from 'features/join/model'

import 'entities/auth/model/model'
// import { changeTheme } from 'entities/theme/model'
import { retoast } from 'features/common/lib/retoast'
import { t } from '@lingui/macro'

const splitAuth = split(sample(session.$token, session.getAuthProfile), {
  notFoundedToken: (token) => !token,
  foundedToken: (token) => token !== null,
})

forward({
  from: splitAuth.notFoundedToken,
  to: session.dropLoading,
})

forward({
  from: join.loginRequestFx.doneData.map(({ auth_token }) => auth_token),
  to: session.setSession,
})

forward({
  from: join.loginRequestFx.doneData.map(({ isAdmin }) => isAdmin),
  to: session.setAdmin,
})

forward({
  from: splitAuth.foundedToken,
  to: profile.profileRequestFx,
})

forward({
  from: join.loginRequestFx.done.map(() => null),
  to: profile.profileRequestFx,
})

forward({
  from: profile.profileRequestFx.done,
  to: session.setAuthorized,
})

forward({
  from: profile.profileRequestFx.done.map(({ result }) => result.user),
  to: profile.setProfile,
})

forward({
  from: profile.profileRequestFx.done.map(({ result }) => result.user.admin),
  to: session.setAdmin,
})

// forward({
//   from: profile.profileRequestFx.done.map(({ result }) => result.user.theme),
//   to: changeTheme,
// })

forward({
  from: profile.profileRequestFx.done.map(({ result }) => result.user.language),
  to: changeLocale,
})

forward({
  from: join.registerUserRequestFx.done.map(({ params }) => ({
    email: params.email,
    password: params.password,
  })),
  to: join.loginRequestFx,
})

retoast({
  effect: join.registerUserRequestFx,
  fail: () => t({ id: 'error.email_alreadt_used' }),
})

retoast({
  effect: join.loginRequestFx,
  fail: () => t({ id: 'error.wrong_login_password' }),
})
