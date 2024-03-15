import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const LogoMobileFilled: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase outlined={false} name="logo-mobile" {...props} />
)

LogoMobileFilled.displayName = 'LogoMobileFilled'

export default LogoMobileFilled
