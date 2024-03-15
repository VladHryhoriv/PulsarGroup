import { Trans, t } from '@lingui/macro'
import { ThemeProps } from 'entities/theme/types'
import { Loader } from 'features/common/components/loader'
import {
  referralLinkRequestFx,
  referralProfitRequestFx,
  referralUsersRequestFx,
  useReferralLink,
  useReferralLinkPending,
  useReferralProfit,
  useReferralProfitPending,
  useReferralUsers,
  useReferralUsersPending,
  useReferralWithdrawnPending,
  withdrawReferralProfitRequestFx,
} from 'features/referral/model'
import { ReferralUser } from 'features/referral/types'
import React, { FC, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { PAGE_GRADIENT } from 'shared/theme/colors'
import { GhostGradientButton } from 'shared/ui/atoms/button'
import { CardTemplate } from 'shared/ui/atoms/card'
import CopyOutlined from 'shared/ui/atoms/icon/copy-outlined'
import LampOutlined from 'shared/ui/atoms/icon/lamp-outlined'
import { TableTemplate } from 'shared/ui/atoms/table'
import { Title as TitleTmp } from 'shared/ui/atoms/typography/title'
import { CenterTemplate } from 'shared/ui/templates/center-template'
import styled, { css } from 'styled-components'

const properties_info = [
  {
    key: 'id',
    title: 'history.invest.id',
  },
  {
    key: 'name',
    title: 'history.invest.name',
  },
  {
    key: 'email',
    title: 'history.invest.email',
  },
  {
    key: 'award',
    title: 'history.invest.award',
  },
]

export const ReferralPage: FC = () => {
  const $referralLink = useReferralLink()
  const linkPending = useReferralLinkPending()
  const $referralProfit = useReferralProfit()
  const profitPending = useReferralProfitPending()
  const $referralUsers = useReferralUsers()
  const usersPending = useReferralUsersPending()
  const withdrawPending = useReferralWithdrawnPending()

  const properties = properties_info.map((property) => ({
    ...property,
    key: property.key as keyof ReferralUser,
  }))

  useEffect(() => {
    referralLinkRequestFx()
    referralProfitRequestFx()
    referralUsersRequestFx()
  }, [])

  if (linkPending || profitPending || usersPending) {
    return (
      <CenterTemplate>
        <Loader />
      </CenterTemplate>
    )
  }

  const handleCopyLink = () => {
    if ($referralLink) navigator.clipboard.writeText($referralLink.link)
  }
  const handleWithdrawProfit = () => {
    withdrawReferralProfitRequestFx()
  }

  return (
    <>
      <Helmet>
        <title>Pulsar Group | {t({ id: 'helmet.referral' })}</title>
      </Helmet>
      <Card>
        <Title level={2}>
          <Trans id="referral.title-1" />
        </Title>
        <SubTitle>Lorem ipsum dolor sit amet consecteur elit</SubTitle>
        <Content>
          <div className="icon-wrap d-flex justify-content-center w-100">
            <LampOutlinedControl />
          </div>
          <div>
            <div>
              <Text mode="bold">
                <Trans id="referral.text-1">Партнерское вознаграждение: </Trans>
              </Text>
              <Text mode="bold" color="dark-pink">
                5%
              </Text>
              <Text>
                <Trans id="referral.text-2"> от суммы депозита. </Trans>
              </Text>
            </div>
            <div className="text-wrap_second">
              <Text>
                <Text mode="bold">
                  <Trans id="referral.text-3">Пример:</Trans>
                </Text>
                <Trans id="referral.text-4">
                  человек, которого вы пригласили
                </Trans>
                <Text mode="bold" color="dark-pink">
                  <span>
                    <Trans id="referral.text-5">инвестировал 500$</Trans>
                  </span>
                </Text>
                <Trans id="referral.text-6">
                  , вы автоматически получаете на баланс партнерского{' '}
                </Trans>
                <Text mode="bold" color="dark-pink">
                  <Trans id="referral.text-7">вознаграждения 25$</Trans>
                </Text>
                <Trans id="referral.text-8">
                  , которые вы сможете вывести сразу на свой счет.
                </Trans>
              </Text>
            </div>
          </div>
        </Content>
        <ReferralTitle>
          <Trans id="referral.text-9">
            Ваша ссылка для привлечения рефералов
          </Trans>
        </ReferralTitle>
        <ReferralLink>
          <span>{$referralLink?.link ? $referralLink.link : 'Error'}</span>
          <CopyOutlined
            onClick={() => handleCopyLink()}
            className="copy-icon"
          />
        </ReferralLink>
      </Card>
      <Card>
        <Title level={2}>
          <Trans id="referral.title-2">Прибыль с рефералов</Trans>
        </Title>
        <SubTitle>
          <Trans id="referral.sub-title-2">
            Сумма ваших доходов с привлеченных партнеров, которые сделали
            инвестиции
          </Trans>
        </SubTitle>
        <ReferralProfit>
          {$referralProfit?.profit ? $referralProfit.profit.toFixed(2) : '0.00'}{' '}
          USDp
        </ReferralProfit>
        <Button
          disabled={withdrawPending}
          onClick={() => handleWithdrawProfit()}
        >
          <Trans id="side-link.export">Вывести</Trans>
        </Button>
      </Card>
      <Card>
        <Title level={2}>
          <Trans id="referral.title-3">Рефералы</Trans>
        </Title>
        <SubTitle>Lorem ipsum dolor sit amet consecteur elit</SubTitle>
        <TableTemplate<ReferralUser>
          properties={properties}
          objects={$referralUsers}
        />
      </Card>
    </>
  )
}

const Card = styled(CardTemplate)`
  padding: 23px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  margin-bottom: 15px;
  color: ${(props: ThemeProps) =>
    props.theme.name === 'dark' ? '#dbdbd7' : props.theme.main.card.color};
  @media only screen and (min-width: 321px) {
    padding: 20px 27px;
  }
  @media only screen and (min-width: 769px) {
    padding: 20px 50px;
    margin-bottom: 30px;
  }
  @media only screen and (min-width: 1000px) {
    padding: 40px 93px;
  }
`

const Title = styled(TitleTmp)`
  color: inherit;
  margin-bottom: 15px;

  font-size: 18px;

  @media only screen and (min-width: 321px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 769px) {
    font-size: 40px;
  }
`

const SubTitle = styled.span`
  color: inherit;
  max-width: 612px;
  margin-bottom: 15px;

  font-size: 15px;

  @media only screen and (min-width: 321px) {
    font-size: 20px;
    margin-bottom: 22px;
  }
  @media only screen and (min-width: 769px) {
    font-size: 25px;
    margin-bottom: 50px;
  }
`

const Button = styled(GhostGradientButton)`
  &:hover {
    background: linear-gradient(
      291.56deg,
      #45bde9 33.27%,
      #926aef 71.14%,
      #d82fc6 106.4%
    );
    box-shadow: none !important;
    color: ${(props: ThemeProps) =>
      props.theme.name === 'light'
        ? '#FAF0F9'
        : props.theme.colors.buttons.ghostG.text} !important;
    border: none;
  }
`

const Content = styled.div`
  width: 100%;
  text-align: start;
  display: block;
  align-items: center;

  font-size: 13px;
  .icon-wrap {
    margin-bottom: 20px;
  }

  .text-wrap_second {
    margin-top: 10px;
  }

  @media only screen and (min-width: 321px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 500px) and (max-width: 768px) {
    display: flex;
    .icon-wrap {
      margin-right: 45px;
      margin-bottom: 0;
    }
  }
  @media only screen and (min-width: 769px) {
    font-size: 22px;
  }
  @media only screen and (min-width: 1000px) {
    display: flex;
    .icon-wrap {
      margin-right: 45px;
      margin-bottom: 0;
    }
  }
`

const LampOutlinedControl = styled(LampOutlined)`
  height: 80px;
  width: 80px;

  @media only screen and (min-width: 321px) {
    height: 100px;
    width: 100px;
  }
  @media only screen and (min-width: 500px) {
    height: 110px;
    width: 110px;
  }
  @media only screen and (min-width: 769px) {
    height: 136px;
    width: 136px;
  }
`

type TextType = {
  mode?: 'bold' | 'normal'
  color?: 'semi-black' | 'dark-pink'
}

const Text = styled.span<TextType>`
  line-height: 17px;
  color: ${(props) =>
    props.color ? `var(--color-${props.color})` : 'inherit'};
  font-weight: ${(props) => (props.mode ? props.mode : 'normal')};

  @media only screen and (min-width: 500px) {
    line-height: 30px;
  }
`

const gradientTextBasic = css`
  background: ${PAGE_GRADIENT.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ReferralTitle = styled.span`
  ${gradientTextBasic}
  font-weight: bold;
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 8px;

  @media only screen and (min-width: 321px) {
    font-size: 22px;
    margin-top: 20px;
    margin-bottom: 13px;
  }
  @media only screen and (min-width: 769px) {
    font-size: 30px;
    margin-top: 35px;
    margin-bottom: 20px;
  }
`

const ReferralLink = styled.div`
  width: 100%;
  background: var(--color-main-gray);
  padding: 20px 28px;
  position: relative;
  color: var(--color-dark-pink);
  border: 1.78571px solid rgba(0, 0, 0, 0.3);
  border-radius: 18px;
  font-size: 15px;
  text-align: start;
  box-sizing: border-box;

  .copy-icon {
    &:hover,
    &:focus {
      path {
        fill: var(--color-dark-pink);
      }
    }
    cursor: pointer;
    position: absolute;
    top: 31%;
    right: 20px;
    height: 24px;
  }

  span {
    max-width: 200px;
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
  }

  @media only screen and (max-width: 480px) {
    max-width: 260px;
    padding: 20px 10px;
    padding-right: 25px;
    .copy-icon {
      right: 10px;
    }
  }
`

const ReferralProfit = styled.span`
  ${gradientTextBasic}
  margin-bottom: 15px;

  font-size: 45px;
  @media only screen and (min-width: 321px) {
    font-size: 50px;
  }
  @media only screen and (min-width: 500px) {
    font-size: 72px;
  }
  @media only screen and (min-width: 769px) {
    font-size: 100px;
  }
`
