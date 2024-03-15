import { FC } from 'react'
import styled from 'styled-components'

interface PageTemplateProps {
  header?: React.ReactNode
}

export const PageTemplate: FC<PageTemplateProps> = ({ header, children }) => (
  <Wrapper>
    <HeaderWrap>{header}</HeaderWrap>
    {children}
  </Wrapper>
)

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  flex: 1;
`

const HeaderWrap = styled.nav`
  position: sticky;
  top: 0;
  display: block;
  z-index: 6000;
  height: 4rem;
  a {
    color: var(--color-dark-gray);
  }
`
