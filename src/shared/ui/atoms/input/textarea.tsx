import { FC, forwardRef } from 'react'
import styled from 'styled-components'

import { Input, InputProps } from './input'

const Component: FC<InputProps> = forwardRef(({ className, ...props }, ref) => (
  <Input
    {...props}
    className={className}
    ref={ref}
    renderInput={({ ...inputProps }) => <Control {...inputProps} />}
  />
))

export const Control = styled.textarea`
  padding: 0.3rem 0.7rem;
  border: 0.19rem solid transparent;
  border-radius: var(--input-primary-radius-default);
  outline: none;
  min-width: auto;
  width: 100%;
  min-height: 6rem;
  color: var(--color-dark-gray);

  background-color: var(--color-lighting);

  &[data-resize='false'] {
    resize: none;
  }
` as FC<InputProps>

export const TextArea = styled(Component)`
  display: inline-flex;
` as FC<InputProps>
