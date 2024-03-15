import { createStore } from 'effector-root'
import { config } from 'processes/config'
import { Option } from '../types/options'

/** 
@todo  add types
*/

export const $options = createStore<Option[]>(config.initialOptions, {
  name: '$options',
})
