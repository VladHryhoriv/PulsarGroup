import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const ExportOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="export" {...props} />
)

ExportOutlined.displayName = 'ExportOutlined'

export default ExportOutlined
