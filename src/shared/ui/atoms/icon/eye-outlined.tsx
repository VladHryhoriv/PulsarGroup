import { FC } from 'react'
import styled from 'styled-components'

import { IconBase, IconBaseProps } from './components/icon-base'

export const EyeOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBaseStyle name="eye" {...props} />
)

const IconBaseStyle = styled(IconBase)`
  &:hover {
    > * {
      fill: var(--color-light-blue);
      stroke: var(--color-light-blue);
    }
  }
`
EyeOutlined.displayName = 'EyeOutlined'
export default EyeOutlined
