import {
  createEffect,
  createEvent,
  Store,
  Event,
  Effect,
  attach,
  is,
  split,
  forward,
} from 'effector-root'
import { AxiosError } from 'axios'

type TAuthorizedRequest<S = unknown> = {
  session: Store<S>
  failAuthorized?: Event<AxiosError<unknown>>
  notFounded?: Event<AxiosError<unknown>>
  serverError?: Event<AxiosError<unknown>>
  fail?: Event<AxiosError<unknown>>
}

type TCreateRequest<P = unknown, R = unknown> = {
  name?: string
  request: (params: P & { token: string }) => Promise<R>
}

type RequestFactory = <P = unknown, R = unknown, E = unknown>({
  name,
  request,
}: TCreateRequest<P, R>) => Effect<P, R, AxiosError<E>>

export const authorizedCreateFactory = <S = unknown>(
  params: TAuthorizedRequest<S>
): RequestFactory => {
  const { session, failAuthorized, serverError, notFounded } = params

  const serverErrorEvent = !serverError
    ? createEvent<AxiosError<unknown>>('serverErrorEvent')
    : serverError

  const notFoundedEvent = !notFounded
    ? createEvent<AxiosError<unknown>>('notFoundedEvent')
    : notFounded

  const failAuthorizedEvent = !failAuthorized
    ? createEvent<AxiosError<unknown>>('failAuthorizedEvent')
    : failAuthorized

  if (!is.store(session)) {
    throw Error('session must be a store')
  }

  if (!is.event(failAuthorizedEvent)) {
    throw Error('failAuthorized must be a event')
  }

  if (!is.event(notFoundedEvent)) {
    throw Error('notFounded must be a event')
  }

  if (!is.event(serverErrorEvent)) {
    throw Error('serverError must be a event')
  }

  return <P = unknown, R = unknown, E = unknown>({
    name,
    request,
  }: TCreateRequest<P, R>): Effect<P, R, AxiosError<E>> => {
    const effect = createEffect<P & { token: string }, R, AxiosError<E>>(
      name
    ).use(request)

    const splitErrors = split(effect.failData, {
      unauthorized: ({ response }) => response?.status === 401,
      notfound: ({ response }) => response?.status === 404,
      serverError: ({ response }) => response?.status === 500,
      error: ({ response }) => response?.status === 400,
    })

    forward({
      from: splitErrors.unauthorized,
      to: failAuthorizedEvent,
    })

    forward({
      from: splitErrors.notfound,
      to: notFoundedEvent,
    })

    forward({
      from: splitErrors.serverError,
      to: serverErrorEvent,
    })

    const authorizedRequest = attach({
      effect,
      source: session,
      mapParams: (params: any, token): any => {
        return isObject(params) ? { ...params, token } : { params, token }
      },
      name: `attached-token-${name}`,
    })

    return authorizedRequest as Effect<P, R, AxiosError<E>>
  }
}
function isObject(value: unknown) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}
