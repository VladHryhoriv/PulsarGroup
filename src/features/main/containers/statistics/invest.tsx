import React, { FC } from 'react'
import { useInvestStatistic } from 'features/statistic/user/model'
import styled from 'styled-components'
import { TableTemplate } from 'shared/ui/atoms/table'
import { InvestStatistic } from 'features/statistic/types/user'
import { Title as TitleTmp } from 'shared/ui/atoms/typography/title'
import { Trans } from '@lingui/macro'
import { TableCardTemplate } from 'features/main/components/template/card'
import { t } from '@lingui/macro'

const properties_info = [
  {
    key: 'id',
    title: 'history.invest.id',
  },
  {
    key: 'date',
    title: 'history.invest.date',
  },
  {
    key: 'time',
    title: 'history.invest.time',
  },
  {
    key: 'amount',
    title: 'history.invest.amount',
  },
]

export const InvestTable: FC = () => {
  const $statistic = useInvestStatistic()

  const properties = properties_info.map((property) => ({
    ...property,
    key: property.key as keyof InvestStatistic,
  }))

  return (
    <TableCardTemplate>
      <Title level={3}>
        <Trans id="table.invest.title" />
      </Title>
      <HideBlock>
        <TableTemplate<InvestStatistic>
          objects={$statistic}
          properties={properties}
        />
      </HideBlock>
    </TableCardTemplate>
  )
}

const Title = styled(TitleTmp)`
  color: inherit;
  text-align: center;

  font-size: 16px;

  @media only screen and (min-width: 321px) {
    font-size: 22px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
`

const HideBlock = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
`
