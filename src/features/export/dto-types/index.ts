import { SuccessResponse } from 'features/common/dto-types'

export interface ResponseExportDto extends SuccessResponse {
  balance: number
}
