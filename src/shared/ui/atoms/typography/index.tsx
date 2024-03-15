import React, { FC, forwardRef } from 'react'

import styled from 'styled-components'

import { Title } from './title'

export interface OriginTypography {
  className?: string
  component?: string
  ariaLabel?: string
  ref?: React.Ref<HTMLElement> | null
}

export const ControlComponent: FC<OriginTypography> = forwardRef(
  ({ className, ariaLabel, component = 'article', children, ...rest }, ref) => {
    const Component = component as any

    return (
      <Component
        className={className}
        aria-label={ariaLabel}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)

export type TypographyProps = typeof ControlComponent & {
  Title: typeof Title
}

const Control = ControlComponent as TypographyProps

export const Typography = styled(Control)`
  max-width: 100%;
` as TypographyProps

Typography.Title = Title
