import { FC } from 'react'

import { IconBase, IconBaseProps } from './components/icon-base'

export const LanguageOutlined: FC<IconBaseProps> = ({ ...props }) => (
  <IconBase name="language" {...props} />
)

LanguageOutlined.displayName = 'LanguageOutlined'

export default LanguageOutlined
