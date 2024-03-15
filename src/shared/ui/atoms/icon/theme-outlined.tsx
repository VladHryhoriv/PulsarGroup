import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const ThemeOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="theme" {...props} />
)

ThemeOutlined.displayName = 'ThemeOutlined'
export default ThemeOutlined
