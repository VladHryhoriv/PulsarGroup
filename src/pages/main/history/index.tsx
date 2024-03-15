import { OptionHistoryParams } from 'features/common/dto-types'
import { UserStatistic } from 'features/main/containers/statistics'
import { getOptionStatistic } from 'features/statistic/user/model'
import { paths } from 'pages/paths'
import React, { FC, useEffect } from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import { history } from 'shared/lib/history'

export const UserHistory: FC<RouteConfigComponentProps<OptionHistoryParams>> = (
  props
) => {
  const option = props.match.params.option
  const goBack = props.history.goBack

  useEffect(() => {
    if (!option) {
      history.push(paths.error())
      return
    }
    if (+option === 3 || +option === 2 || +option === 1) {
      getOptionStatistic(+option)
    } else {
      history.push(paths.error())
    }
  }, [option])
  return <UserStatistic option={option} goBack={goBack} />
}
