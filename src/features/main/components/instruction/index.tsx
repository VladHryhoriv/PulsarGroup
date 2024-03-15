import { Trans } from '@lingui/macro'
import { OptionsId, OptionsStatus } from 'features/main/types/options'
import React, { FC } from 'react'
import { CardTemplate } from 'shared/ui/atoms/card'
import { Title as TitleTemplate } from 'shared/ui/atoms/typography/title'
import styled from 'styled-components'
import { InvestingForm } from './form'

interface Props {
  id: OptionsId
  name: string | number
  optionStatus: OptionsStatus
  contributionValue: string
  incomePercent: string
  outputPercent: string
  icon: string
  onInvest: (id: OptionsId, value: number) => void
}

export const InstrutionCard: FC<Props> = (props) => {
  const {
    id,
    name,
    optionStatus,
    contributionValue,
    incomePercent,
    outputPercent,
    icon,
    onInvest,
  } = props

  const handleSubmit = (value: number) => {
    onInvest(id, value)
  }

  return (
    <Card>
      <Title level={4}>
        <img key={id} src={icon} width="90px" height="90px" />
        <Trans id="option-instruction" />
        {name}
      </Title>
      <Row>
        <LargeText>
          <Trans id="option-instruction-text" />
        </LargeText>
        <LargeTextValue>
          {+name === 3 ? (
            <>
              <Trans id="option_instruction-3" /> {contributionValue}
            </>
          ) : (
            contributionValue
          )}
        </LargeTextValue>
      </Row>
      <Row>
        <LargeText>
          <Trans id="options-income-text" />
        </LargeText>
        <LargeTextValue>{incomePercent}%</LargeTextValue>
      </Row>
      <Text>
        <Trans id="option-output_1" />
        {outputPercent}%
        <Trans id="option-output_2" />
      </Text>
      <InvestingForm status={optionStatus} onSubmit={handleSubmit} />
    </Card>
  )
}

const Card = styled(CardTemplate)`
  margin-top: 30px;
  padding: 25px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled(TitleTemplate)`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
  color: inherit;

  svg {
    color: var(--color-semi-black);
    margin-right: 15px;
  }

  @media only screen and (min-width: 321px) {
    margin-bottom: 25px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  max-width: 233px;
  margin-bottom: 15px;
  color: inherit;
`

const LargeText = styled.span`
  font-size: 16px;
  color: inherit;

  @media only screen and (min-width: 321px) {
    font-size: 20px;
  }
`

const Text = styled.span`
  color: inherit;
  max-width: 215px;
  text-align: center;

  font-size: 13px;

  @media only screen and (min-width: 321px) {
    font-size: 15px;
  }
`

const LargeTextValue = styled.span`
  color: inherit;

  font-size: 22px;

  @media only screen and (min-width: 321px) {
    font-size: 26px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
`

// const IncomePercent = styled.span`
//   background: ${PAGE_GRADIENT.text};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-weight: 700;
//   margin-top: 5px;
//   margin-bottom: 10px;

//   font-size: 32px;

//   @media only screen and (min-width: 321px) {
//     font-size: 35px;
//   }
//   @media only screen and (min-width: 768px) {
//     font-size: 40px;
//   }
// `
