import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const PenOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="pen" {...props} />
)

PenOutlined.displayName = 'PenOutlined'

export default PenOutlined
