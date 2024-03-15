import { createStore } from 'effector-root'

export const $collapsed = createStore<boolean>(false, { name: '$collapsed' })
