import styled from 'styled-components'

import React, { FC, ReactNode } from 'react'
import ArrowFilled from '../icon/arrow-filled'

type Position = {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

interface TooltipProps {
  className?: string
  position?: Position
  children: ReactNode | ReactNode[]
}

const Control: FC<TooltipProps> = (props) => {
  const { className, children } = props

  return (
    <div className={className}>
      {children}
      <ErrorTooltipArrow>
        <ArrowFilled className="arrow" />
      </ErrorTooltipArrow>
    </div>
  )
}

const ErrorTooltipArrow = styled.div`
  position: absolute;
  bottom: -0.5rem;
  right: 0.5rem;
  color: var(--color-white);
  transform: rotate(180deg);
`

export const Tooltip = styled(Control)`
  position: absolute;
  color: var(--color-danger);
  z-index: 2;

  background-color: var(--color-white);
  border-radius: 0.31rem;

  padding: 0.43rem 0.87rem;

  font-size: 0.68rem;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  top: ${({ position }) => (position?.top ? position?.top : '-0.75rem')};
  right: ${({ position }) => (position?.right ? position?.right : '0.50rem')};
  left: ${({ position }) => (position?.left ? position?.left : '')};
  bottom: ${({ position }) => (position?.bottom ? position?.bottom : '')};
`
