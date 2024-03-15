import { FC } from 'react'
import styled from 'styled-components'

import { IconBase, IconBaseProps } from './components/icon-base'

export const EmailOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBaseStyle name="email" {...props} />
)

EmailOutlined.displayName = 'EmailOutlined'

const IconBaseStyle = styled(IconBase)`
  &:hover {
    & > path {
      fill: red;
    }
  }
`

export default EmailOutlined
