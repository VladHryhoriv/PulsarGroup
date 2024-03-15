import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const CloseOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="close" {...props} />
)

CloseOutlined.displayName = 'CloseOutlined'
export default CloseOutlined
