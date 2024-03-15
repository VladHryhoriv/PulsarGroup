import React, { FC, forwardRef } from 'react'

import styled, { css } from 'styled-components'

export interface TTitle extends Partial<React.HTMLAttributes<HTMLHtmlElement>> {
  className?: string
  ref?: React.Ref<HTMLSpanElement>
  level?: number
  id?: string
}

const Control: FC<TTitle> = forwardRef(
  ({ children, className, level, id, ...rest }, ref) => {
    const rc = React.createElement
    const getHTMLTag = () => {
      switch (level) {
        case 1:
          return 'h1'
        case 2:
          return 'h2'
        case 3:
          return 'h3'
        case 4:
          return 'h4'
        default:
          return 'h2'
      }
    }
    return rc(
      getHTMLTag(),
      {
        ref,
        className,
        id,
        ...rest,
      },
      children
    )
  }
)

const levelOneStyles = css`
  font-size: 3.125rem;
  font-weight: bold;
  @media only screen and (min-width: 768px) {
    font-size: 3.125rem;
  }
`
const levelTwoStyles = css`
  font-weight: bold;
  font-size: 1.75rem;
  @media only screen and (min-width: 768px) {
    font-size: 2.083rem;
  }
`
const levelThreeStyles = css`
  font-weight: bold;
  font-size: 1.875rem;
`
const levelFourStyles = css`
  font-size: 1.33rem;
  font-weight: bold;
`
const levelFiveStyles = css``

const getLevel = (props: TTitle) => {
  switch (props.level) {
    case 1: {
      return levelOneStyles
    }
    case 2: {
      return levelTwoStyles
    }
    case 3: {
      return levelThreeStyles
    }
    case 4: {
      return levelFourStyles
    }
    case 5: {
      return levelFiveStyles
    }
    default:
      return levelOneStyles
  }
}

export const Title = styled(Control)`
  color: var(--color-white);
  ${getLevel};
` as FC<TTitle>
