import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const HelpOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="help" {...props} />
)

HelpOutlined.displayName = 'HelpOutlined'

export default HelpOutlined
