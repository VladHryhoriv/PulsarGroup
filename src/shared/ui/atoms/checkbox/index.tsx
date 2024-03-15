import React, { FC } from 'react'
import {
  Checkbox as CheckboxBase,
  CheckboxProps as CheckboxBaseProps,
  useCheckboxState,
} from 'reakit/Checkbox'
import styled from 'styled-components'

interface CheckboxProps extends Omit<Partial<CheckboxBaseProps>, 'onChange'> {
  label?: string | React.ReactNode
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const Control: FC<CheckboxProps> = ({
  checked = false,
  className,
  label,
  disabled,
  onChange,
  ...props
}) => {
  const checkboxState = useCheckboxState({ state: checked })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    checkboxState.setState(!checkboxState.state)
  }

  return (
    <StyledLabel aria-disabled={disabled}>
      <CheckboxBase
        {...props}
        disabled={disabled}
        className={className}
        checked={Boolean(checkboxState.state)}
        onChange={handleChange}
      />
      <span data-disabled={disabled}>{label}</span>
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  position: relative;

  display: flex;
  align-items: center;

  cursor: pointer;
  color: var(--color-white);

  span {
    margin-left: 8px;

    line-height: 1;

    &[data-disabled='true'] {
      color: var(--color-gray);
    }
  }
`

export const Checkbox = styled(Control)`
  position: relative;

  box-sizing: border-box;

  width: 0.9rem;
  height: 0.9rem;

  /* border: 1px solid var(--color-light-gray); */
  border-radius: 0.25rem;

  outline: none;
  cursor: pointer;

  appearance: none;

  &::after {
    position: absolute;
    display: block;
    z-index: 100;

    width: 1.125rem;
    height: 1.125rem;

    top: -20%;
    left: -16%;

    border: 1px solid var(--color-light-gray);
    border-radius: 0.31rem;
    /* border-width: 0 2px 2px 0; */

    /* transform: rotate(45deg); */

    content: '';
  }

  &:checked::after {
    border-color: var(--color-white);
  }

  &:checked {
    background-color: var(--color-white);
    border-color: transparent;
  }

  &:disabled {
    border-color: var(--silver-light-color);
    background-color: transparent;
  }

  &:disabled:checked::after {
    border-color: var(--silver-light-color);
  }
  &:focus {
    border-color: var(--color-primary);
    border-width: 2px;
  }
` as FC<CheckboxProps>

Checkbox.displayName = 'Checkbox'
