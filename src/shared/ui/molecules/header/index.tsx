import { ThemeProps } from 'entities/theme/types'
import { FC } from 'react'
import styled from 'styled-components'

export const HeaderTemplate: FC = ({ children }) => (
  <HeaderWrap>{children}</HeaderWrap>
)

const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  display: block;
  z-index: 99;
  background-color: ${({ theme }: ThemeProps) => theme.main.header.background};
  a {
    color: ${({ theme }: ThemeProps) => theme.main.header.color};
  }
`
