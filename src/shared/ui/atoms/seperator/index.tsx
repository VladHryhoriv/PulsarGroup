import { FC } from 'react'
import styled from 'styled-components'

import {
  Separator as SeparatorBase,
  SeparatorProps as SeparatorBaseProps,
} from 'reakit/Separator'

type SeparatorProps = SeparatorBaseProps

const Component: FC<SeparatorProps> = ({ ...props }) => (
  <SeparatorBase {...props} />
)

export const Separator = styled(Component)`
  border: none;
  height: 1px;
  background-color: var(--color-light-gray);
  color: var(--color-light-gray);
  width: 100%;
` as FC<SeparatorProps>
