import { Trans } from '@lingui/macro'
import {
  reInvestOptionsRequestFx,
  withdrawnOptionRequestFx,
} from 'features/main/model'
import { Option } from 'features/main/types/options'
import { paths } from 'pages/paths'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { PAGE_GRADIENT } from 'shared/theme/colors'
import {
  GhostGradientButton as GhostTmp,
  PrimaryButton as PrimaryTmp,
} from 'shared/ui/atoms/button'
import { CardTemplate } from 'shared/ui/atoms/card'
import DocumentOutlined from 'shared/ui/atoms/icon/document-outlined'
import { Title } from 'shared/ui/atoms/typography/title'
import styled, { css } from 'styled-components'

interface Props {
  name: string | number
  option: Option
}

export const OptionCard: FC<Props> = (props) => {
  const { name, option } = props

  const activeFirstBlock = [2, 3].some((item) => item === option.status)
  const activeSecondBlock = [4, 5].some((item) => item === option.status)

  const buttonStatus = [3, 5].some((item) => item === option.status)

  const handleReinvest = () => {
    reInvestOptionsRequestFx({ option_id: option.id, amount: option.total })
  }
  const handleWithdrawn = () => {
    withdrawnOptionRequestFx({ id: option.id })
  }

  return (
    <Card>
      <TitleTmp level={4}>
        <Trans id="option-name" />
        {name}
        <Link to={paths.main() + `/history/${name}`}>
          <DocumentIcon />
        </Link>
      </TitleTmp>
      <FirstBlock active={activeFirstBlock}>
        <CardRow>
          <CardText className="block-text">
            <Trans id="option-invested" />
          </CardText>
          <CardNum className="block-number">
            {option.investedSum.toFixed(2)} <CardUnit> USDp</CardUnit>
          </CardNum>
        </CardRow>
        <CardRow>
          <CardText className="block-text">
            <Trans id="option-profit" />
          </CardText>
          <CardNum className="block-number">
            {option.profit.toFixed(2)} <CardUnit> USDp</CardUnit>
          </CardNum>
        </CardRow>
        <CardRow>
          <CardText className="block-text">
            <Trans id="option-total" />
          </CardText>
          <GardientNum className="block-number_gradient">
            {option.total.toFixed(2)} <CardUnit> USDp</CardUnit>
          </GardientNum>
        </CardRow>
      </FirstBlock>
      <Line />
      <SecondBlock active={activeSecondBlock}>
        <CardRow>
          <CardText className="block-text">
            <Trans id="option-allowed-to-withdraw" />
          </CardText>
          <GardientNum className="block-number">
            {option.allowedToWithdraw.toFixed(2)} <CardUnit> USDp</CardUnit>
          </GardientNum>
        </CardRow>
        <CardRow>
          <CardText className="block-text">
            <Trans id="option-withdrawn" />
          </CardText>
          <GardientNum className="block-number">
            {option.withdrawn.toFixed(2)} <CardUnit> USDp</CardUnit>
          </GardientNum>
        </CardRow>
        <CardRow>
          <CardText className="block-text">
            <Trans id="option-output-per-day" />
          </CardText>
          <GardientNum className="block-number_gradient">
            {option.outputPerDay.toFixed(2)} <CardUnit> USDp</CardUnit>
          </GardientNum>
        </CardRow>
      </SecondBlock>
      {/*
      // eslint-disable-next-line
      // @ts-ignore: Status cand be other than 3, 4 */}
      <ButtonsWrap status={buttonStatus ? option.status : undefined}>
        {/* {option.status === 4 ? (
          <PrimaryButton>
            <Trans id="option-button-output" />
          </PrimaryButton>
        ) : ( */}
        <GhostButton onClick={() => handleWithdrawn()} disabled={!buttonStatus}>
          <Trans id="option-button-output" />
        </GhostButton>
        {/* )} */}
        <PrimaryButton
          onClick={() => handleReinvest()}
          disabled={!buttonStatus}
        >
          <Trans id="option-button-reinvest" />
        </PrimaryButton>
      </ButtonsWrap>
    </Card>
  )
}

const Card = styled(CardTemplate)`
  padding: 15px 10px;

  @media only screen and (min-width: 321px) {
    padding: 20px;
  }

  @media only screen and (min-width: 768px) {
    padding: 26px;
  }

  width: 100%;

  box-sizing: border-box;
`

const TitleTmp = styled(Title)`
  text-align: center;
  position: relative;
  color: inherit;

  margin-top: 0;
`

const DocumentIcon = styled(DocumentOutlined)`
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    path {
      fill: var(--color-dark-pink);
    }
  }
`

type BlockProps = {
  active: boolean
}
type ButtonsStatus = {
  status?: 3 | 4
}

const Block = styled.div<BlockProps>`
  width: 100%;
`

const text_color_disabled = css`
  .block-text {
    color: var(--color-semi-gray);
  }
  .block-number {
    color: var(--color-light-gray);
  }
  .block-number_gradient {
    color: var(--color-light-gray);
  }
`

const text_color_active = css`
  .block-text {
    color: inherit;
  }
  .block-number {
    color: var(--color-dark-pink);
  }
  .block-number_gradient {
    background: ${PAGE_GRADIENT.text};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const FirstBlock = styled(Block)`
  color: inherit;
  ${({ active }) => (active ? text_color_active : text_color_disabled)}
`
const SecondBlock = styled(Block)`
  color: inherit;
  ${({ active }) => (active ? text_color_active : text_color_disabled)}
`

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

const CardText = styled.span`
  font-size: 12px;

  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }
`

const numbersBaseStyle = css`
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`

const CardNum = styled.span`
  ${numbersBaseStyle}
`
const CardUnit = styled.span`
  font-size: 10px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;

  @media only screen and (min-width: 768px) {
    font-size: 13px;
  }
`

const GardientNum = styled.span`
  ${numbersBaseStyle}
`

const Line = styled.hr`
  color: var(--color-light-gray);
  margin-top: 5px;
  margin-bottom: 17px;
`

const ButtonsWrap = styled.div<ButtonsStatus>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  margin-top: 15px;
`

const buttonBaseStyle = css`
  width: 120px;
  height: 34px;

  font-weight: 400;

  @media only screen and (min-width: 768px) {
    width: 140px;
    height: 40px;
  }
`

const GhostButton = styled(GhostTmp)`
  ${buttonBaseStyle}
`

const PrimaryButton = styled(PrimaryTmp)`
  ${buttonBaseStyle}
`
