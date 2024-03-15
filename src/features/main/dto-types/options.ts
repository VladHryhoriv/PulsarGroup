import { SuccessResponse } from 'features/common/dto-types'
import { Option } from '../types/options'

export interface ResponseOptionsDto extends SuccessResponse {
  balance: number
  options: Option[]
}

export interface ResponseOptionDto extends SuccessResponse {
  balance: number
  option: Option
}

export interface ResponseWithdrawnOptionDto extends SuccessResponse {
  balance: number
  option: Option
}
