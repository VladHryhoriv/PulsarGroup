import { Trans, t } from '@lingui/macro'
import { paths } from 'pages/paths'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { RouteConfigComponentProps } from 'react-router-config'
import { Link } from 'react-router-dom'
import { PrimaryButton } from 'shared/ui/atoms/button'
import { Title } from 'shared/ui/atoms/typography/title'
import { AuthGradientTemp } from 'shared/ui/molecules/gradient-block'
import { AuthTemplate } from 'shared/ui/templates/auth-template'
import { CenterTemplate } from 'shared/ui/templates/center-template'
import { GradientTemplate } from 'shared/ui/templates/gradient-template'
import styled from 'styled-components'

export const ChangedPage: FC<RouteConfigComponentProps> = () => {
  return (
    <>
      <Helmet>
        <title>Pulsar Group | {t({ id: 'helmet.success' })}</title>
      </Helmet>
      <GradientTemplate>
        <AuthTemplate>
          <CenterTemplate>
            <AuthGradientTemp rounded>
              <InnerWrap>
                <AuthTitle level={2}>
                  <Trans id="title.changed">Пароль изменен!</Trans>
                </AuthTitle>
                <ButtonWrap component={Link} to={paths.home()}>
                  <Trans id="label.backToHome" />
                </ButtonWrap>
              </InnerWrap>
            </AuthGradientTemp>
          </CenterTemplate>
        </AuthTemplate>
      </GradientTemplate>
    </>
  )
}

const InnerWrap = styled(CenterTemplate)`
  flex-direction: column;
`

const AuthTitle = styled(Title)`
  margin-top: 0;
  margin-bottom: 1.2rem;

  @media only screen and (min-width: 768px) {
    margin-bottom: 3rem;
  }
`

const ButtonWrap = styled(PrimaryButton)`
  width: 9rem;
  height: 2.375rem;

  @media only screen and (min-width: 768px) {
    width: 15rem;
    height: 3.375rem;
  }
`
