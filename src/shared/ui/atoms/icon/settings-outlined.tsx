import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const SettingsOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="settings" {...props} />
)

SettingsOutlined.displayName = 'SettingsOutlined'

export default SettingsOutlined
