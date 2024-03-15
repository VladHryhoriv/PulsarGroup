import { Trans, t } from '@lingui/macro'
import { ResetForm } from 'features/join/containers/reset-form'
import { ResetParams } from 'features/join/types'
import { FC } from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import { Title } from 'shared/ui/atoms/typography/title'
import { AuthGradientTemp } from 'shared/ui/molecules/gradient-block'
import { AuthTemplate } from 'shared/ui/templates/auth-template'
import { CenterTemplate } from 'shared/ui/templates/center-template'
import { GradientTemplate } from 'shared/ui/templates/gradient-template'
import styled from 'styled-components'

import * as join from 'features/join/model'
import { usePendingReset } from 'features/join/model/selectors'
import { Loader } from 'features/common/components/loader'
import { Helmet } from 'react-helmet'

export const ResetPage: FC<RouteConfigComponentProps> = () => {
  const pending = usePendingReset()
  const handleSubmit = async (values: ResetParams) => {
    join.resetPasswordRequestFx(values)
  }
  if (pending) {
    return <Loader />
  }
  return (
    <>
      <Helmet>
        <title>Pulsar Group | {t({ id: 'helmet.reset' })}</title>
      </Helmet>
      <GradientTemplate>
        <AuthTemplate>
          <CenterTemplate>
            <AuthGradientTemp rounded>
              <CenterTemplate>
                <AuthTitle level={2}>
                  <Trans id="title.reset">Смена пароля</Trans>
                </AuthTitle>
              </CenterTemplate>
              <ResetForm handleSubmit={handleSubmit} loading={pending} />
            </AuthGradientTemp>
          </CenterTemplate>
        </AuthTemplate>
      </GradientTemplate>
    </>
  )
}

const AuthTitle = styled(Title)`
  margin-top: 0;
  margin-bottom: 0.4rem;

  @media only screen and (min-width: 768px) {
    margin-bottom: 3rem;
  }
`
