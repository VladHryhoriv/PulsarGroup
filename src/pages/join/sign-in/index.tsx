import { Trans, t } from '@lingui/macro'
import { SignInForm } from 'features/join/containers/sign-in-form'
import { LoginParams } from 'features/join/types'
import { FC } from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import { Title } from 'shared/ui/atoms/typography/title'
import { AuthGradientTemp } from 'shared/ui/molecules/gradient-block'
import { AuthTemplate } from 'shared/ui/templates/auth-template'
import { CenterTemplate } from 'shared/ui/templates/center-template'
import { GradientTemplate } from 'shared/ui/templates/gradient-template'
import styled from 'styled-components'

import * as join from 'features/join/model'
import { usePendingLogin } from 'features/join/model/selectors'
import { Loader } from 'features/common/components/loader'
import { Helmet } from 'react-helmet'

export const SignInPage: FC<RouteConfigComponentProps> = () => {
  const pending = usePendingLogin()
  const handleSubmit = async (values: LoginParams) => {
    join.loginRequestFx(values)
  }

  if (pending) {
    return <Loader />
  }
  return (
    <>
      <Helmet>
        <title>Pulsar Group | {t({ id: 'helmet.signIn' })}</title>
      </Helmet>
      <GradientTemplate>
        <AuthTemplate>
          <CenterTemplate>
            <AuthGradientTemp rounded>
              <CenterTemplate>
                <AuthTitle level={2}>
                  <Trans id="title.login">Login</Trans>
                </AuthTitle>
              </CenterTemplate>
              <SignInForm handleSubmit={handleSubmit} loading={pending} />
            </AuthGradientTemp>
          </CenterTemplate>
        </AuthTemplate>
      </GradientTemplate>
    </>
  )
}

const AuthTitle = styled(Title)`
  margin-top: 0;
`
