import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const CopyOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="copy" {...props} />
)

CopyOutlined.displayName = 'CopyOutlined'
export default CopyOutlined
