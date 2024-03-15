import { Guard } from 'shared/lib/guards-route/config'

import { paths } from 'pages/paths'

export type UserSession = {
  isAuthenticated: boolean
  isAdmin: boolean
}

export function onlyAuth(): Guard<UserSession> {
  return (route, ctx, next) =>
    ctx && ctx.isAuthenticated ? route : next(paths.login())
}

export function onlyAnon(): Guard<UserSession> {
  return (route, ctx, next) => {
    if (ctx && !ctx.isAuthenticated) {
      return route
    } else if (ctx.isAdmin) {
      return next(paths.dashboard())
    } else {
      next(paths.home())
    }
  }
}

export function onlyAdmin(): Guard<UserSession> {
  return (route, ctx, next) =>
    ctx && ctx.isAdmin ? route : next(paths.login())
}

export function onlyUser(): Guard<UserSession> {
  return (route, ctx, next) =>
    ctx && !ctx.isAdmin ? route : next(paths.login())
}
