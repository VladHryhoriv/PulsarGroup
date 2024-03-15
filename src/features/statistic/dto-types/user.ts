import {
  InvestStatistic,
  ReinvestStatistic,
  WithdrawnStatistic,
} from './../types/user'
import { SuccessResponse } from 'features/common/dto-types'

export interface ResponseInvestStatistic extends SuccessResponse {
  statistic: InvestStatistic[]
}
export interface ResponseReinvestStatistic extends SuccessResponse {
  statistic: ReinvestStatistic[]
}
export interface ResponseWithdrawnStatistic extends SuccessResponse {
  statistic: WithdrawnStatistic[]
}
