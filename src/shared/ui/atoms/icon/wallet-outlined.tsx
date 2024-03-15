import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const WalletOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="wallet" {...props} />
)

WalletOutlined.displayName = 'WalletOutlined'
export default WalletOutlined
