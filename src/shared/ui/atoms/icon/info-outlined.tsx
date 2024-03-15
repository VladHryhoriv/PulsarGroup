import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const InfoOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="info" {...props} />
)

InfoOutlined.displayName = 'InfoOutlined'

export default InfoOutlined
