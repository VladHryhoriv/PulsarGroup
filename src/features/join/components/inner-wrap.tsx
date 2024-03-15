import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

export const InnerWrapp: FC<Props> = ({ children }) => {
  return <InnerWrapper>{children}</InnerWrapper>
}

const InnerWrapper = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 0.11rem;
  }

  @media only screen and (min-width: 768px) {
    > * {
      margin-bottom: 1.1111111rem;
    }
    margin-bottom: 2.64rem;
  }
`
