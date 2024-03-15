import { Event, Store, is, guard } from 'effector'

interface ConditionParams<E, S, T, L> {
  source: Event<E>
  if: Store<S>
  then: Event<T>
  else: Event<L>
}

export const condition = <E = unknown, S = unknown, T = unknown, L = unknown>({
  if: test,
  then: thenBranch,
  else: elseBranch,
  source,
}: ConditionParams<E, S, T, L>): Event<E> => {
  // const checker =
  //   is.unit(test) || isFunction(test) ? test : (value) => value === test

  // if (thenBranch) {
  //   guard({
  //     source,
  //     filter: checker,
  //     target: thenBranch,
  //   })
  // }

  // if (elseBranch) {
  //   guard({
  //     source,
  //     filter: inverse(checker),
  //     target: elseBranch,
  //   })
  // }

  return source
}

// function isFunction(value) {
//   return typeof value === 'function'
// }

// function inverse(fnOrUnit) {
//   if (is.unit(fnOrUnit)) {
//     return fnOrUnit.map((value) => !value)
//   }
//   return (value) => !fnOrUnit(value)
// }
