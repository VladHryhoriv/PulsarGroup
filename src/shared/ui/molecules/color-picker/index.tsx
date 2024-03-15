import { FC, useState } from 'react'

import styled from 'styled-components'

import { Dropdown } from 'shared/ui/molecules/dropdown'
import { Menu } from '../menu'
import { Separator } from 'shared/ui/atoms/seperator'
import { useControlled } from 'shared/lib/useControlled'

interface ColorsProps {
  colors?: string[]
  color?: string
  defaultColor?: string
  className?: string
  onChange?: (color: string) => void
}

const Control: FC<ColorsProps> = ({
  color,
  defaultColor,
  onChange,
  className,
  colors,
  ...props
}) => {
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useControlled(color, defaultColor)
  const handleChange = (target: string) => {
    setValue(target)
    onChange?.(target)
  }

  const menu = () => (
    <MenuStyled>
      <Header>Settings of colour</Header>
      <Separator />
      <ColorList>
        {colors?.map((color) => (
          <ColorWrap
            key={color}
            tabIndex={0}
            onClick={() => handleChange(color)}
          >
            <MinColor style={{ backgroundColor: color || 'red' }}></MinColor>
          </ColorWrap>
        ))}
      </ColorList>
    </MenuStyled>
  )
  return (
    <div className={className} aria-label="color picker" {...props}>
      <Dropdown
        overlay={menu()}
        data-focus={focus}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        <Color style={{ backgroundColor: value || 'red' }} />
      </Dropdown>
    </div>
  )
}

const MenuStyled = styled(Menu)`
  width: 13rem;
`

const Color = styled.div`
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`

const Header = styled.div`
  padding: 0.5rem 0.4rem;
`

const MinColor = styled.div`
  border-radius: 9999px;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`

const ColorWrap = styled.button`
  padding: 0.4rem;
  cursor: pointer;

  border-radius: 0.4rem;

  user-select: none;
  white-space: nowrap;
  border: 0;
  background-color: transparent;

  &:hover {
    background-color: #d2e9f0;
  }
`

const ColorList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.2rem 0.4rem;
`

export const ColorPicker = styled(Control)`
  display: inline-flex;
` as FC<ColorsProps>
