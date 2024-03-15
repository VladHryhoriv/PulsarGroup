import { Option, OptionsId } from 'features/main/types/options'
import { initialOption, initialOptions } from 'mocks/options'
import * as events from './events'
import { $options } from './stores'

$options.on(events.getOptions, (state, options) => {
  if (options.length) {
    options.map((option) => {
      state.map((stateOption, index) => {
        state[index] = option.id === stateOption.id ? option : stateOption
      })
    })
    return [...state]
  }
  return initialOptions
})

const setOldOptionLogic = (
  actual: Option,
  options: Option[],
  id: OptionsId
): Option => {
  if (options.find((item) => item.id === id)) {
    return actual
  }
  return initialOption(id)
}

$options.on(events.intervalWorker, (state, options) => {
  if (options.length) {
    options.map((option) => {
      state.map((stateOption, index) => {
        state[index] =
          option.id === stateOption.id
            ? option
            : setOldOptionLogic(stateOption, options, stateOption.id)
      })
    })
    return [...state]
  }
  return initialOptions
})

$options.on(events.withdrawnOption, (state, option) => {
  if (option) {
    const index = state.findIndex((item) => item.id === option.id)
    state[index] = option
    return [...state]
  }
  return initialOptions
})

$options.on(events.investOption, (state, option) => {
  return state.map((element) => (element.id === option.id ? option : element))
})
