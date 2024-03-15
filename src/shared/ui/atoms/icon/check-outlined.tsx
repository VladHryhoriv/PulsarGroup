import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const CheckOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="check" {...props} />
)

CheckOutlined.displayName = 'CheckOutlined'
export default CheckOutlined
