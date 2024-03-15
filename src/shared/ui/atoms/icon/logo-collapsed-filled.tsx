import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const LogoCollapsedFilled: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase outlined={false} name="logo-collapsed" {...props} />
)

LogoCollapsedFilled.displayName = 'LogoCollapsedFilled'

export default LogoCollapsedFilled
