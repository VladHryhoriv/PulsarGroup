import { Trans, t } from '@lingui/macro'
import { SignUpForm } from 'features/join/containers/sign-up-form'
import { SignUpParams } from 'features/join/types'
import { FC } from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import { Title } from 'shared/ui/atoms/typography/title'
import { AuthGradientTemp } from 'shared/ui/molecules/gradient-block'
import { AuthTemplate } from 'shared/ui/templates/auth-template'
import { CenterTemplate } from 'shared/ui/templates/center-template'
import { GradientTemplate } from 'shared/ui/templates/gradient-template'
import styled from 'styled-components'
import { Loader } from 'features/common/components/loader'
import { Helmet } from 'react-helmet'

import * as join from 'features/join/model'
import {
  usePendingLogin,
  usePendingRegister,
} from 'features/join/model/selectors'

export const SignUpPage: FC<RouteConfigComponentProps> = () => {
  const pending = usePendingRegister()
  const loginPending = usePendingLogin()
  const handleSubmit = async (values: SignUpParams) => {
    join.registerUserRequestFx(values)
  }
  if (pending || loginPending) {
    return <Loader />
  }
  return (
    <>
      <Helmet>
        <title>Pulsar Group | {t({ id: 'helmet.signUp' })}</title>
      </Helmet>
      <GradientTemplate>
        <AuthTemplate>
          <CenterTemplate>
            <AuthGradientTemp rounded>
              <CenterTemplate>
                <AuthTitle level={2}>
                  <Trans id="title.signup">Sign up</Trans>
                </AuthTitle>
              </CenterTemplate>
              <SignUpForm handleSubmit={handleSubmit} loading={pending} />
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
