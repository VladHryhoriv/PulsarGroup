import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const UserOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="user" {...props} />
)

UserOutlined.displayName = 'UserOutlined'

export default UserOutlined
