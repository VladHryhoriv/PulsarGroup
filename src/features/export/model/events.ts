import { createEvent } from 'effector-root'

import * as api from 'features/export/api'

import { createRequest } from 'entities/auth/model/model'
import { ResponseExportDto } from '../dto-types'
import { ExportParams } from '../types'

export const exportRequest = createEvent<number>('exportRequest')

export const exportRequestFx = createRequest<
  ExportParams,
  ResponseExportDto,
  Error
>({
  name: 'exportRequestFx',
  request: api.exportRequest,
})
