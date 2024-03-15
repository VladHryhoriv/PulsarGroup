import { FC, cloneElement, isValidElement, forwardRef, MouseEvent } from 'react'

import styled from 'styled-components'
import { Portal } from 'reakit/Portal'

import {
  MenuButton as MenuBaseButton,
  MenuProps as MenuBaseProps,
  useMenuState,
} from 'reakit/Menu'

import { MenuProps } from 'shared/ui/molecules/menu'

export interface DropdownProps extends Partial<MenuBaseProps> {
  overlay?: React.ReactElement<MenuProps>
  onOpenChange?: (evt: MouseEvent<HTMLDivElement>) => void
  onBlur?: (e: MouseEvent<HTMLDivElement>) => void
  placement?:
    | 'auto-start'
    | 'auto'
    | 'auto-end'
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-end'
    | 'bottom'
    | 'bottom-start'
    | 'left-end'
    | 'left'
    | 'left-start'
}

const ControlComponent: FC<DropdownProps> = forwardRef(
  (
    {
      className,
      children,
      overlay,
      onOpenChange,
      onBlur,
      placement = 'auto',
      ...props
    },
    ref
  ) => {
    const menu = useMenuState({ unstable_offset: [0, 10], placement })

    const renderChildren = () => {
      if (children && isValidElement(children)) {
        return cloneElement(children, {
          ...props,
          className,
          onClick: (e: MouseEvent<HTMLDivElement>) => {
            onOpenChange?.(e)
            children.props.onClick?.(e)
          },
        })
      }
      return null
    }

    const renderOverlay = () => {
      if (overlay && isValidElement(overlay)) {
        return cloneElement(overlay, {
          menu,
          onBlur: (e: MouseEvent<HTMLDivElement>) => {
            onBlur?.(e)
          },
        })
      }
      return null
    }

    return (
      <MenuBaseButton
        {...props}
        {...menu}
        as="div"
        className={className}
        ref={ref}
      >
        {renderChildren()}
        <Portal>{renderOverlay()}</Portal>
      </MenuBaseButton>
    )
  }
)

export const Dropdown = styled(ControlComponent)`
  z-index: 999;
  cursor: pointer;
` as FC<DropdownProps>

Dropdown.defaultProps = {}
