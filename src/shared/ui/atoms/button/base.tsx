import styled, { css } from 'styled-components'

import { Button as BaseComponent } from 'reakit/Button'

const iconStyles = css`
  background-color: transparent;
  color: inherit;
  font-size: 1.25rem;

  width: 2.5rem;
  height: 2.5rem;
`

export const Base = styled(BaseComponent)`
  display: inline-flex;

  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 1rem;
  user-select: none;
  white-space: nowrap;
  border: 0;
  cursor: pointer;

  transition: background 0.2s ease-out;

  height: 2.5rem;
  border-radius: 40px;

  ${(props: { rounded: string; icon: string }) =>
    props.rounded === 'true' && `border-radius: 2rem;`}

  ${(props: { icon: string; rounded: string }) =>
    props.icon === 'true' && iconStyles};
`
