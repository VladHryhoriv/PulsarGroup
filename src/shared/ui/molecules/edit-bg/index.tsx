import { FC } from 'react'
import styled from 'styled-components'

import { Avatar, AvatarProps } from 'shared/ui/atoms/avatar'

interface EditBgProps extends AvatarProps {
  className?: string
}

const Component: FC<EditBgProps> = ({ className, ...props }) => {
  return (
    <Avatar
      {...props}
      className={className}
      type="rect"
      size={85}
      imageSrc="assets/images/bg-min.jpeg"
    />
  )
}

export const EditBg = styled(Component)`` as FC<EditBgProps>
