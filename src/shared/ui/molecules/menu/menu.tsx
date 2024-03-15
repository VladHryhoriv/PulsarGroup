import {
  FC,
  cloneElement,
  isValidElement,
  Children,
  MouseEvent,
  forwardRef,
} from 'react'
import styled from 'styled-components'
import uniqueId from 'lodash/uniqueId'

import {
  Menu as MenuBase,
  MenuProps as MenuBaseProps,
  MenuStateReturn,
} from 'reakit/Menu'

import { MenuItemProps } from './item'
import { ThemeProps } from 'entities/theme/types'

export interface MenuProps extends Partial<Omit<MenuBaseProps, 'onSelect'>> {
  ariaLabel?: string
  onSelect?: (value: string, index: number) => void
  menu?: MenuStateReturn
  isSubMenu?: boolean
}

type TChild = {
  displayName: string
}

const ControlComponent: FC<MenuProps> = forwardRef(
  ({ ariaLabel, className, children, menu, onSelect, ...props }, ref) => {
    const childrenItems = children as React.ReactElement[]

    const items = Array.isArray(childrenItems)
      ? childrenItems.flat()
      : childrenItems

    const cloneChild = (
      child: React.ReactElement<
        MenuItemProps,
        string | React.JSXElementConstructor<MenuItemProps>
      >,
      index: number
    ) =>
      cloneElement(child, {
        ...child.props,
        onClick: (event: MouseEvent<HTMLButtonElement>) => {
          menu?.hide()
          child.props.onClick?.(event, child.props.value)
          if (child.props.value) {
            onSelect?.(child.props.value, index)
          }
        },
      })

    const renderItems = () =>
      Children.map(items, (child: React.ReactElement<MenuItemProps>, index) => {
        if (isValidElement(child)) {
          const type = child.type as unknown
          const { displayName } = type as TChild
          if (displayName === 'Item') {
            return cloneChild(child, index)
          }
          return child
        }
        return child
      })
    const id = uniqueId('menu-')
    return (
      <MenuBase
        ref={ref}
        {...props}
        {...menu}
        aria-label={ariaLabel || id}
        aria-labelledby={ariaLabel || id}
        className={className}
      >
        <Container className="menu">{renderItems()}</Container>
      </MenuBase>
    )
  }
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 4999;
  padding: 0.525rem 1.25rem 0.525rem 1.25rem;
`

export const Menu = styled(ControlComponent)`
  outline: none;
  z-index: ${(props) => (props.isSubMenu ? '5000' : '4999')};
  background-color: ${({ theme }: ThemeProps) => theme.main.header.background};

  overflow: hidden;

  [role='menu'] {
    inset: 0 px 0 px auto auto;
  }

  box-shadow: 0.17rem 0.33rem 0.8333333333333334rem 0px rgba(0, 0, 0, 0.05);
` as FC<MenuProps>
