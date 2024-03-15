import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const PasswordOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="password" {...props} />
)

PasswordOutlined.displayName = 'PasswordOutlined'
export default PasswordOutlined
