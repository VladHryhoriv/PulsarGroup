import { useUpperName } from 'features/common/hooks/useUpperName'
import React, { FC, forwardRef, useState } from 'react'
import { PAGE_GRADIENT } from 'shared/theme/colors'
import styled from 'styled-components'
import PenOutlined from '../../icon/pen-outlined'

interface Props {
  onOk: (_id: string) => void
  _id: string
  superAdmin: boolean
  name?: string
  ref?: React.Ref<HTMLDivElement> | null
}

export const LargeAvatar: FC<Props> = forwardRef((props, ref) => {
  const { onOk, superAdmin, name, _id } = props

  const [edit, setEdit] = useState<boolean>(false)
  const upper_name = useUpperName(name)

  return (
    <Wrap ref={ref} superAdmin={superAdmin}>
      {superAdmin && <EditIcon>S</EditIcon>}
      {!superAdmin && (
        <EditIcon onClick={() => setEdit(true)}>
          <PenOutlined />
        </EditIcon>
      )}
      {edit && (
        <RemoveWrap>
          <RemoveText>Remove</RemoveText>
          <RemoveIcon onClick={() => onOk(_id)}>y</RemoveIcon>
          <RemoveIcon onClick={() => setEdit(false)}>x</RemoveIcon>
        </RemoveWrap>
      )}
      {upper_name}
    </Wrap>
  )
})

const Wrap = styled.div<{ superAdmin: boolean }>`
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.superAdmin ? PAGE_GRADIENT.avatar : 'var(--color-semi-gray)'};

  width: 150px;
  height: 150px;

  @media only screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
  }
`

const EditIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`

const RemoveWrap = styled.div`
  display: flex;
  position: absolute;
  top: 5px;
  left: 5px;
`

const RemoveText = styled.span`
  color: var(--color-danger);
  font-size: 15px;
  margin-right: 30px;
`

const RemoveIcon = styled.button`
  margin-right: 13px;
`
