import { AuthorizedRequest, request } from 'shared/lib/request'
import { ResponseImportDto } from '../dto-types'
import { ImportParams } from '../types'

export const importRequest = ({
  token,
  ...body
}: AuthorizedRequest<ImportParams>): Promise<ResponseImportDto> =>
  request({ url: '/me/', method: 'POST', body }, token)
