import React, { FC, forwardRef, HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

type TBadgeSize = 'large' | 'default' | 'small'

export interface BadgeProps extends Partial<HTMLAttributes<HTMLDivElement>> {
  className?: string
  size?: TBadgeSize
  ref?: React.Ref<HTMLDivElement> | null
  content?: string | number | React.ReactNode
  color?: string
  styleBadge?: React.CSSProperties
  align?: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'
}

const Control: FC<BadgeProps> = forwardRef(
  (
    {
      children,
      content,
      className,
      color,
      style,
      size = 'default',
      align,
      ...rest
    },
    ref
  ) => (
    <div ref={ref} className={className} {...rest}>
      <Inner>
        {children}
        <BdControl
          size={size}
          color={color}
          style={style}
          align={align}
          className="sl-badge__control"
        >
          {content}
        </BdControl>
      </Inner>
    </div>
  )
)

const styleLargeSize = css`
  min-width: 1.8rem;
  height: 1.8rem;
  border: 0.26666666666666666rem solid var(--color-white);
`

const styleDefaultSize = css`
  min-width: 1.4rem;
  height: 1.4rem;
  border: 0.2111rem solid var(--color-white);
  font-size: 0.8rem;
`

const styleSmallSize = css`
  min-width: 1rem;
  height: 1rem;
  border: 0.2111rem solid var(--color-white);
  font-size: 0.6rem;
`

const topLeftBadge = css`
  left: 0%;
  top: 0;
  transform: translate(-50%, -50%);
`

const topRightBadge = css`
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
`

const rightBottomBadge = css`
  bottom: 0;
  right: 0;
  transform: translate(50%, 0%);
`
const leftBottomBadge = css`
  bottom: 0;
  left: 0;
  transform: translate(-50%, 0%);
`

const getAlign = (props: BadgeProps) => {
  switch (props.align) {
    case 'top-left':
      return topLeftBadge
    case 'top-right':
      return topRightBadge
    case 'bottom-right':
      return rightBottomBadge
    case 'bottom-left':
      return leftBottomBadge
    default:
      return topRightBadge
  }
}

const styleWithContent = css`
  position: absolute;

  transform-origin: 100% 0%;
  ${getAlign}
`

const getSize = (props: BadgeProps) => {
  switch (props.size) {
    case 'large':
      return styleLargeSize
    case 'small':
      return styleSmallSize
    default:
      return styleDefaultSize
  }
}

const BdControl = styled.div`
  ${styleWithContent}

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  border-radius: 10rem;
  color: var(--color-white);
  background-color: var(--color-green);
  ${getSize}
`

const Inner = styled.div`
  display: inline-flex;
  position: relative;
  vertical-align: middle;
`

export const Badge = styled(Control)`
  display: inline-flex;
` as FC<BadgeProps>
