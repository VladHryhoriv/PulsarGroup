import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const ArrowOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase width="36px" height="25px" name="arrow" {...props} />
)

ArrowOutlined.displayName = 'ArrowOutlined'
export default ArrowOutlined
