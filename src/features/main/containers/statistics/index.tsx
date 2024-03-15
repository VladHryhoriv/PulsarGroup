import { Trans } from '@lingui/macro'
import React, { FC } from 'react'
import { CardTemplate } from 'shared/ui/atoms/card'
import ArrowOutlined from 'shared/ui/atoms/icon/arrow-outlined'
import { Title as TitleTmp } from 'shared/ui/atoms/typography/title'
import styled from 'styled-components'
import { InvestTable } from './invest'
import { ReinvestTable } from './reinvest'
import { WithdrawnTable } from './withdrawn'

interface Props {
  goBack: () => void
  option?: string
}

export const UserStatistic: FC<Props> = (props) => {
  const { option, goBack } = props

  return (
    <>
      <Card>
        <ArrowWrap>
          <ArrowOutlined onClick={() => goBack()} />
        </ArrowWrap>
        <Title>
          <Trans id="history.user.title" /> {option}
        </Title>
      </Card>
      <InvestTable />
      <ReinvestTable />
      <WithdrawnTable />
    </>
  )
}

const Card = styled(CardTemplate)`
  max-width: 1255px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 10px;

  @media only screen and (min-width: 321px) {
    padding: 20px 10px;
  }
`

const ArrowWrap = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  path {
    fill: inherit;
  }

  svg {
    cursor: pointer;
    width: 10px;
  }

  @media only screen and (min-width: 321px) {
    svg {
      width: auto;
    }
  }
`

const Title = styled(TitleTmp)`
  width: 90%;
  text-align: center;
  color: inherit;
  margin: 0;

  font-size: 18px;

  @media only screen and (min-width: 321px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
`
