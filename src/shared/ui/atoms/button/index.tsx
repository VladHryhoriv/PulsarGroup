import React, { FC, forwardRef, isValidElement } from 'react'
import styled from 'styled-components'

import { ButtonProps as BaseProps } from 'reakit/Button'

import { Spin } from 'shared/ui/atoms/spin'

import { Base } from './base'
import { useTheme } from 'entities/theme/selectors'
export interface ButtonProps extends BaseProps {
  loading?: boolean
  component?: string | React.ElementType
  to?: string
  icon?: React.ReactNode
  rounded?: boolean
}

const Control: FC<ButtonProps> = forwardRef(
  (
    {
      children,
      rounded = false,
      loading,
      icon,
      component = Base,
      className,
      ...props
    },
    ref
  ) => {
    const renderIcon = () => {
      if (isValidElement(icon)) {
        if (children) {
          return !loading ? <IconWrapRight>{icon}</IconWrapRight> : null
        }
        return <IconWrap>{loading ? <StyledSpin /> : icon}</IconWrap>
      }
      return null
    }
    return (
      <Base
        ref={ref}
        rounded={rounded.toString()}
        icon={(!!icon && !children).toString()}
        as={component}
        className={className}
        {...props}
      >
        {renderIcon()}
        {children && (
          <Container>
            <Content>{loading ? <StyledSpin /> : children}</Content>
          </Container>
        )}
      </Base>
    )
  }
)

const Container = styled.div`
  padding-left: 0.16666666666666666rem;
  padding-right: 0.16666666666666666rem;
`

const Content = styled.div`
  padding-left: 0.6666666666666666rem;
  padding-right: 0.6666666666666666rem;

  flex-grow: 0;
`
const StyledSpin = styled(Spin)`
  svg {
    color: inherit;
  }
`

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconWrapRight = styled(IconWrap)`
  padding-left: 0.6666666666666666rem;
`

export const PrimaryButton = styled(Control)`
  background: linear-gradient(
    291.56deg,
    #45bde9 33.27%,
    #926aef 71.14%,
    #d82fc6 106.4%
  );
  color: var(--color-white);

  &:hover {
    box-shadow: 0px 0px 20px rgba(79, 105, 241, 0.8);
  }
  &:active {
    background-color: var(--color-primary-light);
  }
  &:disabled {
    color: var(--color-white);
    background: var(--color-dark-disabled);
  }
` as FC<ButtonProps>

PrimaryButton.displayName = 'PrimaryButton'

export const PrimaryOrangeButton = styled(Control)`
  background-color: var(--color-semi-orange);
  color: var(--color-semi-white);

  &:hover {
    box-shadow: 0px 0px 15px rgba(249, 117, 88, 0.8);
  }
  &:active {
    box-shadow: 0px 0px 15px rgba(249, 117, 88, 0.8);
  }
  &:disabled {
    color: var(--color-semi-black);
    background-color: var(--color-opac-p-10);
  }
` as FC<ButtonProps>

PrimaryOrangeButton.displayName = 'PrimaryOrangeButton'

export const PrimaryPinkButton = styled(Control)`
  background-color: var(--color-dark-pink);
  color: var(--color-semi-white);

  &:hover {
    box-shadow: 0px 0px 15px rgba(239, 93, 168, 0.8);
  }
  &:active {
    box-shadow: 0px 0px 15px rgba(239, 93, 168, 0.8);
  }
  &:disabled {
    color: var(--color-semi-black);
    background-color: var(--color-opac-p-10);
  }
` as FC<ButtonProps>

PrimaryPinkButton.displayName = 'PrimaryPinkButton'

export const GhostButton = styled(Control)`
  background-color: transparent;
  color: var(--color-semi-orange);
  border: 1px solid var(--color-semi-orange);

  &:hover {
    box-shadow: 0px 0px 15px rgba(249, 117, 88, 0.8);
  }
  &:active {
    color: var(--color-primary-light);
    border-color: var(--color-primary-light);
  }
  &:disabled {
    color: var(--color-opac-p-10);
    border-color: var(--color-opac-p-10);
  }
` as FC<ButtonProps>

GhostButton.displayName = 'GhostButton'

export const GhostGradientButtonBase = styled(Control)`
  background-color: transparent;
  // -------
  // gradient border
  box-shadow: 0 0 6px 0 rgba(141, 171, 185, 0.5);
  border: solid 2px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, rgba(141, 171, 185, 0.5), rgba(67, 45, 98, 1));
  background-origin: border-box;
  background-clip: content-box, border-box;
  // ---------
  &:active {
    color: var(--color-primary-light);
    border-color: var(--color-primary-light);
  }
  &:disabled {
    color: var(--color-disabled);
    border-color: var(--color-disabled);
  }

  ${
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (props) => props.style
  }
` as FC<ButtonProps>

GhostGradientButtonBase.displayName = 'GhostGradientButtonBase'

export const GhostGradientButton = (props: any) => {
  const $theme = useTheme()

  // Using outside ThemeProvider

  return (
    <GhostGradientButtonBase
      {...props}
      style={{
        color: $theme.colors.buttons.ghostG.text,
        boxShadow: `2px 1000px 1px ${$theme.colors.buttons.ghostG.background} inset`,
      }}
    />
  )
}

export const InlineButton = styled(Control)`
  background-color: transparent;
  color: inherit;

  &:disabled {
    color: var(--color-opac-b-5);
  }
  &:hover {
    background-color: var(--color-opac-b-2);
  }
  &:active {
    background-color: var(--color-opac-b-1);
  }
` as FC<ButtonProps>

InlineButton.displayName = 'InlineButton'
