import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const ArrowSmallOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="arrow-small" {...props} />
)

ArrowSmallOutlined.displayName = 'ArrowSmallOutlined'

export default ArrowSmallOutlined
