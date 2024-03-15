import { DefaultTheme } from 'entities/theme/types'
import { FC } from 'react'
import { PAGE_GRADIENT } from 'shared/theme/colors'
import styled, { css } from 'styled-components'

interface ContainerProps {
  rounded: boolean
  classNames?: string
  theme: DefaultTheme
}

type ControlProps = ContainerProps & {
  children: JSX.Element | JSX.Element[]
}

export const GradientBlock: FC<ControlProps> = ({
  rounded,
  classNames,
  ...props
}: ControlProps) => {
  return (
    <Container rounded={rounded} classNames={classNames} {...props}>
      {props.children}
    </Container>
  )
}

export const AuthGradientTemp = styled(GradientBlock)`
  padding: 1.85rem 0.65rem;

  @media only screen and (min-width: 400px) {
    padding: 10% 12%;
  }
  @media only screen and (min-width: 768px) {
    padding: 3% 6.25rem;
  }
`

AuthGradientTemp.displayName = 'AuthGradientTemp'

const Container = styled.div`
  ${({ theme, rounded }: ContainerProps) => {
    if (theme.name === 'dark') {
      return css`
        background: rgba(238, 186, 255, 0.05);
        box-shadow: inset -15.5772px -18.9151px 56.7454px
          rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(66.7593px);
        border-radius: 80px;
        border: 4.45px solid;

        border-image-source: linear-gradient(
          2.43deg,
          rgba(255, 255, 255, 0.1) -27.71%,
          rgba(255, 255, 255, 0) 69.18%
        );
      `
    } else {
      return css`
        background: ${PAGE_GRADIENT.modal};
        ${rounded && `border-radius: 1.25rem;`}
      `
    }
  }}
`
