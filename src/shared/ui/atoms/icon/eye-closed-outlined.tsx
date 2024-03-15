import { FC } from 'react'
import styled from 'styled-components'

import { IconBase, IconBaseProps } from './components/icon-base'

export const EyeClosedOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBaseStyle name="eye-closed" {...props} />
)

EyeClosedOutlined.displayName = 'EyeClosedOutlined'

const IconBaseStyle = styled(IconBase)`
  &:hover {
    > * {
      fill: var(--color-light-blue);
      stroke: var(--color-light-blue);
    }
  }
`

export default EyeClosedOutlined
