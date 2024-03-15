import React, { FC, isValidElement, ReactNode, useMemo } from 'react'
import styled from 'styled-components'
import { Menu, MenuItem, useMenuState, MenuButton } from 'reakit/Menu'
import uniqueId from 'lodash/uniqueId'

import Input from 'shared/ui/atoms/input/input'
import { useControlled } from 'shared/lib/useControlled'
// import ArrowUpOutlined from 'shared/ui/atoms/icon/arrow-up-outlined'

type Placement =
  | 'auto-start'
  | 'auto'
  | 'auto-end'
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'left-end'
  | 'left'
  | 'left-start'

type DataItemType = {
  value: string
  label: React.ReactNode
}

interface SelectProps {
  data?: DataItemType[]
  onChange?: (value: string, event: any) => void
  onClose?: () => void
  onOpen?: () => void
  placement?: Placement
  value?: string
  placeholder?: string
  defaultValue?: string
  className?: string
  ariaLabel?: string
  disabled?: boolean
  prefix?: ReactNode
  suffix?: ReactNode
}

const Control: FC<SelectProps> = ({
  data,
  defaultValue,
  onChange,
  onClose,
  onOpen,
  placement = 'bottom',
  placeholder,
  className,
  value,
  ariaLabel,
  disabled,
  prefix,
  suffix,
  ...props
}) => {
  const [selectValue, setValue, isControlled] = useControlled(
    value,
    defaultValue
  )
  const menu = useMenuState({ unstable_offset: [0, 10], placement })

  const handleOpen = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    onOpen?.()
  }

  const handleClose = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault()
    menu.hide()
    onClose?.()
    console.log('IN ON CLOSE')
    onChange?.(id, e)

    setValue(id)
  }

  const renderItems = () => {
    if (!Array.isArray(data)) {
      return null
    }

    return data.map((item) => (
      <Item
        {...menu}
        onClick={(e) => handleClose(e, item.value)}
        value={item.value}
        tabIndex={0}
        key={item.value}
      >
        {item.label}
      </Item>
    ))
  }

  const inputValue = useMemo(() => {
    const item = data?.find((item) => item.value === selectValue)

    if (item && !isValidElement(item.label)) {
      return item.label as string
    }

    return ''
  }, [data, selectValue])

  const id = uniqueId('menu-')

  return (
    <div className={className} {...props}>
      <MenuButton {...menu} disabled={disabled} as="div">
        <Input
          placeholder={placeholder}
          readOnly
          disabled={disabled}
          value={inputValue}
          onClick={handleOpen}
          prefix={prefix}
          suffix={
            <IconWrap data-visible={menu.visible}>
              {/* <ArrowUpOutlined /> */}
            </IconWrap>
          }
        />
      </MenuButton>
      <List
        {...menu}
        aria-label={ariaLabel || id}
        aria-labelledby={ariaLabel || id}
      >
        {renderItems()}
      </List>
    </div>
  )
}

const List = styled(Menu)`
  z-index: 9999;
  background-color: var(--color-white);

  border-radius: 6.25696px;

  width: 100%;

  box-shadow: 0.17rem 0.33rem 0.8333333333333334rem 0px rgba(0, 0, 0, 0.05);

  border: 0.625696px solid #c2c2c2;

  max-height: 15.75rem;
  overflow: auto;
`

const Item = styled(MenuItem)`
  line-height: 1.5;
  height: 2.0625rem;
  text-align: left;
  justify-content: flex-start;
  border: 0px;
  border-radius: 0px;
  font-size: 100%;
  background: transparent;
  color: rgb(33, 33, 33);
  margin: 0px;
  user-select: none;
  text-decoration: none;

  cursor: pointer;

  width: 100%;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  &[data-visible='true'] {
    transform: rotate(180deg);
  }
`

export const Select = styled(Control)`
  position: relative;
` as FC<SelectProps>
