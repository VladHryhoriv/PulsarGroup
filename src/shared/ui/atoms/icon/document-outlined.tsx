import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const DocumentOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="document" {...props} />
)

DocumentOutlined.displayName = 'DocumentOutlined'
export default DocumentOutlined
