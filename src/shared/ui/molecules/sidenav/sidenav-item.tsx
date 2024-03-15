import { cloneElement, FC, HTMLAttributes, forwardRef } from 'react'
import { getVariable } from 'shared/lib/getCssVariable'
import useMediaQuery from 'shared/lib/useMediaQuery'

import styled, { css } from 'styled-components'

export interface SideNavItemProps
  extends Partial<HTMLAttributes<HTMLDivElement>> {
  index?: number
  icon?: React.ReactNode
  label?: string | React.ReactNode
  suffix?: React.ReactNode
  href?: string
  arialLabel?: string
  ref?: React.Ref<HTMLDivElement> | null
  component?: React.ReactElement
  onClick?: (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>
  ) => void
  selected?: boolean
  className?: string
  mode?: 'vertical' | 'horizontal'
  collapsed?: boolean
}

const Item: FC<SideNavItemProps> = forwardRef(
  (
    {
      icon,
      label,
      className,
      selected,
      id,
      suffix,
      component,
      arialLabel,
      onClick,
      collapsed,
      ...rest
    },
    ref
  ) => {
    const isMobile = useMediaQuery(
      `(max-width: ${getVariable('--breakpoint-md')})`
    )

    const renderLabel = () => {
      if (isMobile || !collapsed) {
        return (
          <LabelWrap icon={icon}>
            <Label aria-label={arialLabel}>{label}</Label>
          </LabelWrap>
        )
      } else return null
    }

    const renderContent = () => (
      <Wrapper>
        {icon && <IconWrap data-icon="left">{icon}</IconWrap>}
        {renderLabel()}
        {suffix && <IconWrap>{suffix}</IconWrap>}
      </Wrapper>
    )

    if (component) {
      return cloneElement(
        component,
        {
          id,
          className,
          'role': 'button',
          onClick,
          'data-active': Boolean(selected).toString(),
          ...rest,
        },
        renderContent()
      )
    }

    return (
      <div
        ref={ref}
        id={id}
        className={className}
        role="button"
        onClick={onClick}
        data-active={Boolean(selected).toString()}
        {...rest}
      >
        {renderContent()}
      </div>
    )
  }
)

const withIconsStyled = css`
  margin-right: 1.25rem;
  margin-left: 1.25rem;
`

const IconWrap = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
`

const LabelWrap = styled.div`
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  ${(props: { icon: React.ReactNode }) => props.icon && withIconsStyled}

  @media only screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (max-width: 460px) {
    font-size: 12px;
  }
`

const Label = styled.span`
  overflow-wrap: break-word;
  min-width: 0px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  max-width: 100%;
  padding-left: 0;
  margin-top: 1.56rem;
  margin-bottom: 1.56rem;
  width: 100%;

  border: 2px solid transparent;
  height: 2rem;

  &:focus {
    border-radius: 0.3125rem;
    border: 2px solid var(--color-primary);
  }

  @media only screen and (min-width: 461px) {
    height: 3rem;
  }

  @media only screen and (min-width: 769px) {
    padding-left: 1.87rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const SideNavItem = styled(Item)`
  position: relative;
  display: flex;
  align-items: flex-start;
  color: var(--color-light-gray);
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  transition: all 200ms;
  letter-spacing: 0.5px;

  margin-bottom: 2px;
  margin-top: 2px;

  &[data-active='true'],
  &:active,
  &:hover,
  &:focus {
    color: var(--color-dark-pink);
    font-weight: bold;

    [data-icon] {
      path {
        fill: var(--color-dark-pink);
        stroke: var(--color-dark-pink);
      }
    }
  }

  &[aria-disabled] {
    background-color: var(--color-lighting);
  }
  [data-icon] {
    path {
      color: transparent;
      stroke: var(--color-light-gray);
    }
  }

  @media only screen and (max-width: 560px) {
    min-width: 100px;
  }
  @media only screen and (max-width: 460px) {
    min-width: 75px;
  }
  @media only screen and (max-width: 320px) {
    min-width: 76px;
  }
` as FC<SideNavItemProps>

SideNavItem.displayName = 'SideNavItem'
