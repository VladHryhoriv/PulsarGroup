import { Option, OptionsId } from 'features/main/types/options'
import React, { FC } from 'react'
import styled from 'styled-components'
import { InstrutionCard } from '../instruction'
import { OptionCard } from '../option'

interface Props {
  id: OptionsId
  name: string | number
  option: Option
  contributionValue: string
  incomePercent: string
  outputPercent: string
  icon: string
  onInvest: (id: OptionsId, value: number) => void
}

export const OptionTemplate: FC<Props> = (props) => {
  const {
    id,
    name,
    option,
    contributionValue,
    incomePercent,
    outputPercent,
    icon,
    onInvest,
  } = props

  return (
    <Wrap>
      <OptionCard name={name} option={option} />
      <InstrutionCard
        id={id}
        name={name}
        optionStatus={option.status}
        contributionValue={contributionValue}
        incomePercent={incomePercent}
        outputPercent={outputPercent}
        icon={icon}
        onInvest={onInvest}
      />
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  max-width: 398px;
  display: flex;
  flex-direction: column;

  margin-top: 30px;

  &:first-child {
    margin-top: 0;
  }

  @media only screen and (min-width: 1159px) {
    &:first-child {
      margin-top: 30px;
    }
  }
  @media only screen and (min-width: 1600px) {
    &:first-child {
      margin-top: 0;
    }
    margin-top: 0;
  }
`
