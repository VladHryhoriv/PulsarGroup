import { FC, forwardRef, useState, ReactNode } from 'react'
// import { EyeOutlined } from 'shared/ui/atoms/icon/eye-outlined'
// import { EyeOffOutlined } from 'shared/ui/atoms/icon/eye-off-outlined'
// import LockOutlined from 'shared/ui/atoms/icon/lock-outlined'

import { Input, InputProps } from './input'
import styled from 'styled-components'
import EyeOutlined from '../icon/eye-outlined'
import EyeClosedOutlined from '../icon/eye-closed-outlined'

interface InputPasswordProps extends InputProps {
  suffixOn?: ReactNode
  suffixOff?: ReactNode
  error?: boolean
}

const Component: FC<InputPasswordProps> = forwardRef(({ ...props }, ref) => {
  const [show, setShow] = useState(false)
  return (
    <Input
      ref={ref}
      {...props}
      type={show ? 'text' : 'password'}
      suffix={
        props.suffix && show ? (
          <EyeOutlined onClick={() => setShow(!show)} />
        ) : (
          <EyeClosedOutlined onClick={() => setShow(!show)} />
        )
      }
    />
  )
})

export const Password = styled(Component)`
  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }
` as FC<InputProps>
