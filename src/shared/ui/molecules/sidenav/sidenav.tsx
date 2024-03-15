import React, { FC, isValidElement, useEffect, useState } from 'react'
import ArrowOutlined from 'shared/ui/atoms/icon/arrow-outlined'
import LogoFilled from 'shared/ui/atoms/icon/logo-filled'
import styled, { css } from 'styled-components'
import useMediaQuery from 'shared/lib/useMediaQuery'
import { getVariable } from 'shared/lib/getCssVariable'

import { SideNavItemProps } from './sidenav-item'
import LogoCollapsedFilled from 'shared/ui/atoms/icon/logo-collapsed-filled'
import { collapsedEventFx } from 'features/home/model'
import { useCollapse } from 'features/home/model/selectors'

export interface SideNavProps {
  children: React.ReactElement[]
  selectedKey?: string
  className?: string
  id?: string
  mode?: 'vertical' | 'horizontal'
}

type TChild = {
  displayName: string
}

const Component: FC<SideNavProps> = ({
  id,
  children,
  className,
  selectedKey,
  mode,
  ...props
}) => {
  const childrenItems = children as React.ReactElement[]

  const [skip, setSkip] = useState<number>(0)
  const isLarge = useMediaQuery(
    `(min-width: ${getVariable('--breakpoint-xl')})`
  )
  const isMobile = useMediaQuery(
    `(max-width: ${getVariable('--breakpoint-md')})`
  )
  const $collapsed = useCollapse()

  useEffect(() => {
    collapsedEventFx(!isLarge)
  }, [isLarge])

  const handleSetSkip = (): void => {
    if (+(childrenItems.length / 4).toFixed() > skip) {
      setSkip(skip + 1)
    } else {
      setSkip(0)
    }
  }

  const handleSetCollapsed = () => () => collapsedEventFx(!$collapsed)

  const items = Array.isArray(childrenItems)
    ? childrenItems.flat()
    : childrenItems

  const renderChilds = () => {
    return React.Children.map(
      items,
      (child: React.ReactElement<SideNavItemProps>, index: number) => {
        const type = child.type as unknown
        const { displayName } = type as TChild
        if (!isValidElement(child) && displayName !== 'SideNavItem') {
          return null
        }
        return React.cloneElement(child, {
          ...child.props,
          collapsed: $collapsed,
          index,
          selected: selectedKey === child.key,
          mode,
          tabIndex: 0,
        })
      }
    )
  }

  return (
    <div {...props} data-collapsed={$collapsed} id={id} className={className}>
      {!isMobile && (
        <CollapseBtn collapsed={$collapsed}>
          <ArrowOutlined
            width="15px"
            height="15px"
            onClick={handleSetCollapsed()}
          />
        </CollapseBtn>
      )}
      <LogoWrap collapsed={$collapsed}>
        <a href="http://pulsik.site/">
          {$collapsed ? (
            <LogoCollapsedFilled />
          ) : (
            <LogoFilled height="50px" width="100%" max-width="120px" />
          )}
        </a>
      </LogoWrap>
      <ItemsWrap skip={skip}>{renderChilds()}</ItemsWrap>
      <ArrowWrap skip={skip}>
        <ArrowOutlined onClick={handleSetSkip} />
      </ArrowWrap>
    </div>
  )
}

interface Props {
  mode?: 'vertical' | 'horizontal'
}

const LogoWrap = styled.div<{ collapsed: boolean }>`
  margin-top: 1.87rem;
  padding-left: ${(props) => (props.collapsed ? '1.17rem' : '1.87rem')};
  padding-right: ${(props) => (props.collapsed ? '0' : '1.87rem')};
  font-size: 3rem;
  margin-bottom: 20px;
  width: 100%;
  max-width: 42%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

interface ArrowProps {
  skip: number
}

const ArrowWrap = styled.div`
  /* transform: rotate(180deg); */
  transform: ${(props: ArrowProps) =>
    !props.skip ? 'rotate(180deg)' : 'rotate(0)'};
  display: none;
  position: absolute;
  right: ${(props: ArrowProps) => (props.skip ? 'auto' : 0)};
  left: ${(props: ArrowProps) => (props.skip ? 0 : 'auto')};
  top: 35%;

  @media only screen and (max-width: 560px) {
    display: block;
  }
  @media only screen and (max-width: 460px) {
    svg {
      width: 30px;
      height: 20px;
    }
  }
`

const CollapseBtn = styled.div<{ collapsed: boolean }>`
  position: absolute;
  top: 44px;
  right: 9px;
  cursor: pointer;
  &:hover {
    path {
      fill: var(--color-dark-pink);
    }
  }

  transform: ${(props) => (props.collapsed ? 'rotate(180deg)' : 'rotate(0)')};
`

const ItemsWrap = styled.div`
  display: block;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  @media only screen and (max-width: 560px) {
    padding-right: ${(props: ArrowProps) => !props.skip && '1rem'};
    padding-left: ${(props: ArrowProps) => props.skip && '1rem'};
    /* transform: ${(props: ArrowProps) =>
      !props.skip ? `translateX(0px)` : `translateX(-${90 * props.skip}px)`}; */
    max-width: 400px;

    ${(props: ArrowProps) =>
      props.skip &&
      css`
        > * {
          transform: ${`translateX(-${120 * props.skip}px)`};
        }
      `}
  }
  @media only screen and (max-width: 460px) {
    max-width: 294px;
    ${(props: ArrowProps) =>
      props.skip &&
      css`
        > * {
          transform: ${`translateX(-${80 * props.skip}px)`};
        }
      `}
  }
  @media only screen and (max-width: 320px) {
    max-width: 300px;
    ${(props: ArrowProps) =>
      props.skip &&
      css`
        > * {
          transform: ${`translateX(-${80 * props.skip}px)`};
        }
      `}
  }
`

export const SideNav = styled(Component)`
  z-index: 100;
  display: flex;
  flex-direction: ${(props: Props) =>
    props.mode === 'vertical' ? 'column' : 'row'};

  background: linear-gradient(
    180deg,
    #000000 -90.21%,
    #0b111b 68.42%,
    #0b111b 168.26%
  );
  border-radius: 0px 40px 40px 0px;
  box-shadow: 5px 0px 15px rgba(5, 7, 11, 0.3);

  bottom: 0;

  @media only screen and (min-height: 1024px) {
    background-size: cover !important;
  }

  @media only screen and (min-width: 769px) {
    position: relative;
    background: url('../../../../assets/images/bg-side-nav.png');
  }
  @media only screen and (max-width: 768px) {
    position: fixed;
    width: 100%;
    flex-direction: row;
    border-radius: 20px 20px 0px 0px;
  }
  @media only screen and (max-width: 560px) {
    justify-content: center;
  }
` as FC<SideNavProps>

SideNav.displayName = 'SideNav'

SideNav.defaultProps = {
  mode: 'vertical',
}
