import React, { FC, forwardRef, useCallback } from 'react'

import styled from 'styled-components'

export interface SafeAnchorProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  className?: string
  href?: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  ref?: React.Ref<HTMLAnchorElement> | null
}

export const Control: FC<SafeAnchorProps> = forwardRef(
  ({ className, href, disabled, onClick, children, ...rest }, ref) => {
    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (disabled) {
          event.preventDefault()
          event.stopPropagation()
          return
        }

        onClick?.(event)
      },
      [onClick, disabled]
    )
    if (disabled) {
      rest.tabIndex = -1
      rest['aria-disabled'] = true
    }
    return (
      <a
        {...rest}
        className={className}
        onClick={handleClick}
        ref={ref}
        href={href}
      >
        {children}
      </a>
    )
  }
)

export const SafeAnchor = styled(Control)`
  &[aria-disabled='true'] {
    color: var(--color-gray);
  }
` as FC<SafeAnchorProps>
SafeAnchor.displayName = 'SafeAnchor'
