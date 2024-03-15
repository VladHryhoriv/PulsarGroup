import React, { FC, forwardRef } from 'react'
import cn from 'classnames'
import styled, { keyframes } from 'styled-components'

export type TSpinSize = 'large' | 'default' | 'small'
export interface SpinProps {
  className?: string
  id?: string
  ref?: React.Ref<HTMLDivElement> | null
  size?: TSpinSize
}

const Component: FC<SpinProps> = forwardRef(
  ({ className, id, size, ...rest }, ref) => (
    <span ref={ref} id={id} className={className} {...rest}>
      <svg
        className={cn({
          'sl-sp-l': size === 'large',
          'sl-sp-m': size === 'default',
          'sl-sp-s': size === 'small',
        })}
        viewBox="0 0 1024 1024"
        focusable="false"
        data-icon="loading"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
      </svg>
    </span>
  )
)

const fadeIn = keyframes`
  100% {
    transform: rotate(1turn);
  }
`

export const Spin = styled(Component)`
  display: flex;
  align-items: center;

  .sl-sp-l {
    width: 2rem;
    height: 2rem;
  }
  .sl-sp-m {
    width: 1.6rem;
    height: 1.6rem;
  }
  .sl-sp-s {
    width: 1rem;
    height: 1rem;
  }

  svg {
    display: inline-block;

    color: var(--color-violet);
    animation: ${fadeIn} 1s infinite linear;
  }
` as FC<SpinProps>
