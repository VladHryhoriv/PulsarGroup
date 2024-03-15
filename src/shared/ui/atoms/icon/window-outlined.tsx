import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const WindowOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="window" {...props} />
)

WindowOutlined.displayName = 'WindowOutlined'

export default WindowOutlined
