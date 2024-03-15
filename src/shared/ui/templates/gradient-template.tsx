import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { DefaultTheme } from 'entities/theme/types'

interface Props {
  children: ReactNode
}

export const GradientTemplate: FC<Props> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
)

interface ThemeProps {
  theme: DefaultTheme
}

const Wrapper = styled.main`
  background-image: url(${({ theme }: ThemeProps) => theme.auth.background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  flex: 1;
`
