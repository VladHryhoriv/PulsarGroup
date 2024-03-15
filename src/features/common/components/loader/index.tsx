import { FC } from 'react'
import { Spin } from 'shared/ui/atoms/spin'
import { CenterTemplate } from 'shared/ui/templates/center-template'

export const Loader: FC = () => (
  <CenterTemplate>
    <Spin size="large" />
  </CenterTemplate>
)
