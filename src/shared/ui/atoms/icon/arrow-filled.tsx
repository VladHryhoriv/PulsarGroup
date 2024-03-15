import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const ArrowFilled: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase outlined={false} name="arrow" {...props} />
)

ArrowFilled.displayName = 'ArrowFilled'

export default ArrowFilled
