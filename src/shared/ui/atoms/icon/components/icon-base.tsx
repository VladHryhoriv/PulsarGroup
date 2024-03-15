import { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

import { svgBaseProps } from '../utlis'

export interface IconBaseProps extends Partial<HTMLAttributes<HTMLElement>> {
  className?: string
  width?: string
  height?: string
}

interface IconProps extends IconBaseProps {
  name: string
  outlined?: boolean
}

const Icon: FC<IconProps> = ({
  name,
  className,
  outlined = true,
  ...props
}) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const SvgIcon = require(`!babel-loader!svg-react-loader!ui/svgs/${
    outlined ? 'outlined' : 'filled'
  }/${name}.svg`)
  return <SvgIcon className={className} {...svgBaseProps} {...props} />
}

export const IconBase = styled(Icon)`
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  user-select: none;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`
