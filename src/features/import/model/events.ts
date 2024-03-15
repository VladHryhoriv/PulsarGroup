import { createEvent } from 'effector-root'

import * as api from 'features/import/api'

import { createRequest } from 'entities/auth/model/model'
import { ResponseImportDto } from '../dto-types'
import { ImportParams } from '../types'

export const importRequest = createEvent<number>('importRequest')

export const importRequestFx = createRequest<
  ImportParams,
  ResponseImportDto,
  Error
>({
  name: 'importRequestFx',
  request: api.importRequest,
})
