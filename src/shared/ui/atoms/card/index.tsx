import { ThemeProps } from 'entities/theme/types'
import styled from 'styled-components'

export const CardTemplate = styled.div`
  background: ${({ theme }: ThemeProps) => theme.main.card.background};
  color: ${({ theme }: ThemeProps) => theme.main.card.color};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`
