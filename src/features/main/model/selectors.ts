import { useStore } from 'effector-react'
import { $options, optionsRequestFx } from '.'
import { Option } from '../types/options'

export const useOptions = (): Option[] => {
  return useStore($options)
}

export const useOptionsPending = (): boolean => {
  return useStore(optionsRequestFx.pending)
}
