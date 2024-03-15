import { Effect, is } from 'effector-root'
import { toast as toastFn } from 'react-toastify'

interface RetoastProps<S, E> {
  effect: Effect<any, S, E>
  success?: (data: S) => string
  fail?: (data: E) => string
}

export const retoast = <S = unknown, E = unknown, W = unknown>(
  config: RetoastProps<S, E>
): void => {
  const { effect, success, fail } = config

  if (!is.effect(effect)) {
    throw Error('not effect')
  }

  if (fail) {
    effect.fail.watch(({ error }) => {
      toastFn(fail(error), { type: 'error' })
    })
  }
  if (success) {
    effect.doneData.watch((data) => toastFn(success(data), { type: 'success' }))
  }
}
