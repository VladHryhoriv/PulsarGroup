import { createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'
import { ImportType } from 'features/import/types'
import { createModal } from 'shared/lib/createModal'

export const importModal = createModal<void>('import')

export const setImportType = createEvent<ImportType>('setImportType')

const $importType = createStore<ImportType | null>(null, {
  name: '$importType',
})

$importType.on(setImportType, (_, type) => type)

export const useImportType = (): ImportType | null => {
  return useStore($importType)
}
