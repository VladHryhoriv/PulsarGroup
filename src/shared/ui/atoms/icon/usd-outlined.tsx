import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const UsdOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="usd" {...props} />
)

UsdOutlined.displayName = 'UsdOutlined'
export default UsdOutlined
