import { createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'
import { ExportType } from 'features/export/types'
import { createModal } from 'shared/lib/createModal'

export const exportModal = createModal<void>('export')

export const setExportType = createEvent<ExportType>('setExportType')

const $exportType = createStore<ExportType | null>(null, {
  name: '$exportType',
})

$exportType.on(setExportType, (_, type) => type)

export const useExportType = (): ExportType | null => {
  return useStore($exportType)
}
