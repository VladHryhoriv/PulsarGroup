import React from 'react'
import styled from 'styled-components'

import { PrimaryButton } from 'shared/ui/atoms/button'
import { Typography } from 'shared/ui/atoms/typography'
import { CenterTemplate } from 'shared/ui/templates/center-template'
import { Trans } from '@lingui/macro'

type ErrorState = {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<
  Record<string, unknown>,
  ErrorState
> {
  constructor(props: ErrorState) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any): void {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo)
    console.error(errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Container>
          <CenterTemplate>
            <Wrapper>
              <Title>
                <Trans id="error-went-wrong" />
              </Title>
              <PrimaryButton onClick={() => window.location.reload()}>
                <Trans id="page-reload" />
              </PrimaryButton>
            </Wrapper>
          </CenterTemplate>
        </Container>
      )
    }

    return this.props.children
  }
}

const Container = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1;
  background-image: url('../assets/images/bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled(Typography.Title)`
  color: var(--color-semi-black);
`
