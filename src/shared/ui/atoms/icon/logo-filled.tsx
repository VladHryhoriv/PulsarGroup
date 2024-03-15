import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const LogoFilled: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase outlined={false} name="logo" {...props} />
)

LogoFilled.displayName = 'LogoFilled'

export default LogoFilled
