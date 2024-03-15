import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const PartnershipOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="partnership" {...props} />
)

PartnershipOutlined.displayName = 'PartnershipOutlined'

export default PartnershipOutlined
