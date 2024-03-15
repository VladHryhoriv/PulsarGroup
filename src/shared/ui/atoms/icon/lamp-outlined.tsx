import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const LampOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="lamp" {...props} />
)

LampOutlined.displayName = 'LampOutlined'
export default LampOutlined
