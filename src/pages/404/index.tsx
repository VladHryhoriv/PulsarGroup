import { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { CenterTemplate } from 'shared/ui/templates/center-template'
import { Typography } from 'shared/ui/atoms/typography'
import { PrimaryButton } from 'shared/ui/atoms/button'
import { paths } from 'pages/paths'
import { PAGE_GRADIENT } from 'shared/theme/colors'
import { Trans } from '@lingui/macro'
import { GradientTemplate } from 'shared/ui/templates/gradient-template'

export const NotFoundPage: FC = () => (
  <>
    <Helmet>
      <title>Pulsar Group | 404</title>
    </Helmet>
    <Wrapper>
      <GradientTemplate>
        <CenterTemplateStyle>
          <InnerWrapper>
            <StyledTitle level={1}>404</StyledTitle>
            <StyledSubTitle level={1}>
              <Trans id="label.notFound">Страница не найдена</Trans>
            </StyledSubTitle>
            <ButtonWrap component={Link} to={paths.home()}>
              <Trans id="label.backToHome">Back to home</Trans>
            </ButtonWrap>
          </InnerWrapper>
        </CenterTemplateStyle>
      </GradientTemplate>
    </Wrapper>
  </>
)

const Wrapper = styled.main`
  display: flex;
  flex: 1;
  background-image: url('../../../assets/images/bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
`

const CenterTemplateStyle = styled(CenterTemplate)`
  flex: 1 1 0%auto;
`

const GradientText = styled(Typography.Title)`
  background: ${PAGE_GRADIENT.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StyledTitle = styled(GradientText)`
  font-style: normal;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 250px;
  }
`

const StyledSubTitle = styled(GradientText)`
  font-weight: normal;

  font-size: 1.5rem;

  @media only screen and (min-width: 769px) {
    font-size: 3rem;
  }
`

const ButtonWrap = styled(PrimaryButton)`
  width: 9rem;
  height: 2rem;
  margin-top: 0.8rem;

  @media only screen and (min-width: 769px) {
    width: 15rem;
    height: 3.375rem;
    margin-top: 1.2rem;
  }
`
