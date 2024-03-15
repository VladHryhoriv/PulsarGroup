import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const RemoveOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="remove" {...props} />
)

RemoveOutlined.displayName = 'RemoveOutlined'
export default RemoveOutlined
