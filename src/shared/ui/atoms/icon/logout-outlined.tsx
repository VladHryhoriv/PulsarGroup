import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const LogoutOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="logout" {...props} />
)

LogoutOutlined.displayName = 'LogoutOutlined'

export default LogoutOutlined
