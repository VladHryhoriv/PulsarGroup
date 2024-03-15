import { createEvent } from 'effector-root'

import * as api from 'features/main/api'

import { createRequest } from 'entities/auth/model/model'
import {
  InvestOptionParams,
  ReInvestOptionParams,
  Option,
  WithdrawnOptionParams,
} from '../types/options'
import {
  ResponseOptionDto,
  ResponseOptionsDto,
  ResponseWithdrawnOptionDto,
} from '../dto-types/options'

export const getOptions = createEvent<Option[]>('getOptions')
export const investOption = createEvent<Option>('investOption')
export const intervalWorker = createEvent<Option[]>('intervalWorker')
export const withdrawnOption = createEvent<Option>('withdrawnOption')

export const optionsRequestFx = createRequest<void, ResponseOptionsDto, Error>({
  name: 'optionsRequestFx',
  request: api.optionsRequest,
})

export const intervalRequestFx = createRequest<void, ResponseOptionsDto, Error>(
  {
    name: 'intervalRequestFx',
    request: api.optionsRequest,
  }
)

export const withdrawnOptionRequestFx = createRequest<
  WithdrawnOptionParams,
  ResponseWithdrawnOptionDto,
  Error
>({
  name: 'withdrawnOptionRequestFx',
  request: api.withdrawnOptionsRequest,
})

export const investOptionsRequestFx = createRequest<
  InvestOptionParams,
  ResponseOptionDto,
  Error
>({
  name: 'investOptionsRequestFx',
  request: api.investOptionsRequest,
})

export const reInvestOptionsRequestFx = createRequest<
  ReInvestOptionParams,
  ResponseOptionDto,
  Error
>({
  name: 'reInvestOptionsRequestFx',
  request: api.reInvestOptionsRequest,
})
