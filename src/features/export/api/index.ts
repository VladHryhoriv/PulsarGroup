import { AuthorizedRequest, request } from 'shared/lib/request'
import { ResponseExportDto } from '../dto-types'
import { ExportParams } from '../types'

export const exportRequest = ({
  token,
  ...body
}: AuthorizedRequest<ExportParams>): Promise<ResponseExportDto> =>
  // request({ url: '/options', method: 'POST', body }, token)
  new Promise((resolve, _) =>
    resolve({
      balance: body.amount,
      success: true,
    })
  )

// request({ url: '/options', method: 'GET' }, token)
