import { Trans, t } from '@lingui/macro'
import { RestoreForm } from 'features/join/containers/restore-form'
import { RestoreParams } from 'features/join/types'
import { FC } from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import ArrowOutlined from 'shared/ui/atoms/icon/arrow-outlined'
import { Title } from 'shared/ui/atoms/typography/title'
import { AuthGradientTemp } from 'shared/ui/molecules/gradient-block'
import { AuthTemplate } from 'shared/ui/templates/auth-template'
import { CenterTemplate } from 'shared/ui/templates/center-template'
import { GradientTemplate } from 'shared/ui/templates/gradient-template'
import styled from 'styled-components'

import * as join from 'features/join/model'
import { usePendingRestore } from 'features/join/model/selectors'
import { Loader } from 'features/common/components/loader'
import { Helmet } from 'react-helmet'

export const RestorePage: FC<RouteConfigComponentProps> = (props) => {
  const pending = usePendingRestore()
  const handleSubmit = async (values: RestoreParams) => {
    join.restorePasswordRequestFx(values)
  }
  const goBack = () => props.history.goBack()

  if (pending) {
    return <Loader />
  }

  return (
    <>
      <Helmet>
        <title>Pulsar Group | {t({ id: 'helmet.restore' })}</title>
      </Helmet>
      <GradientTemplate>
        <AuthTemplate>
          <CenterTemplate>
            <AuthGradientTemp rounded>
              <CenterTemplate>
                <AuthTitle level={2}>
                  <ArrowOutlined className="arrow" onClick={goBack} />
                  <Trans id="title.restore">Забыли пароль?</Trans>
                </AuthTitle>
              </CenterTemplate>
              <RestoreForm handleSubmit={handleSubmit} loading={pending} />
            </AuthGradientTemp>
          </CenterTemplate>
        </AuthTemplate>
      </GradientTemplate>
    </>
  )
}

const AuthTitle = styled(Title)`
  margin-top: 0;
  display: flex;
  margin-bottom: 0.3rem;
  align-items: center;
  .arrow {
    cursor: pointer;
    margin-right: 0.3rem;
    margin-top: 0.34rem;
    width: 20px;
    height: 20px;
  }

  @media only screen and (min-width: 768px) {
    .arrow {
      margin-right: 1.83rem;
      margin-top: 0.34rem;
      width: 36px;
      height: 25px;
    }
    margin-bottom: 3rem;
  }
`
