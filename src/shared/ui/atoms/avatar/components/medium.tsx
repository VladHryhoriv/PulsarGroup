import { useUpperName } from 'features/common/hooks/useUpperName'
import React, { FC, forwardRef } from 'react'
import { PAGE_GRADIENT } from 'shared/theme/colors'
import styled from 'styled-components'

interface Props {
  superAdmin: boolean
  name?: string
  ref?: React.Ref<HTMLDivElement> | null
}

export const MediumAvatar: FC<Props> = forwardRef((props, ref) => {
  const { superAdmin, name } = props

  const upper_name = useUpperName(name)

  return (
    <Wrap ref={ref} superAdmin={superAdmin}>
      {superAdmin && <EditIcon>S</EditIcon>}
      {upper_name}
    </Wrap>
  )
})

const Wrap = styled.div<{ superAdmin: boolean }>`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.superAdmin ? PAGE_GRADIENT.avatar : 'var(--color-semi-gray)'};

  width: 30px;
  height: 30px;

  @media only screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
`

const EditIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`
