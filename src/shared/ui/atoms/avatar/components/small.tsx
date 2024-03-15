import { useUpperName } from 'features/common/hooks/useUpperName'
import React, { FC, forwardRef } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  name?: string
  ref?: React.Ref<HTMLDivElement> | null
}

export const SmallAvatar: FC<Props> = forwardRef(({ name, className }, ref) => {
  const upper_name = useUpperName(name)

  return (
    <Wrap className={className} ref={ref}>
      {upper_name}
    </Wrap>
  )
})

const Wrap = styled.div`
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    180deg,
    #000000 15.2%,
    #0b111b 44.86%,
    #0b111b 100%
  );
  color: var(--color-white);

  font-size: 30px;

  width: 60px;
  height: 60px;
`
