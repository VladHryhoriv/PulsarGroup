import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const ImportOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="import" {...props} />
)

ImportOutlined.displayName = 'ImportOutlined'

export default ImportOutlined
