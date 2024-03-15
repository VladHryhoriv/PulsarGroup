import { SuccessResponse } from 'features/common/dto-types'
import { TStatisticBalance } from '../types'

type ResponseStatisticBalanceData = {
  statistic: TStatisticBalance
}

export interface ResponseBalanceDto
  extends ResponseStatisticBalanceData,
    SuccessResponse {}
