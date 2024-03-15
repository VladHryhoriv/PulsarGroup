import { FC, MouseEvent, forwardRef, ReactElement, useState } from 'react'
import styled from 'styled-components'

import { MenuItemProps as MenuItemBaseProps, MenuItem } from 'reakit/Menu'
import { ThemeProps } from 'entities/theme/types'
export interface MenuItemProps extends Omit<MenuItemBaseProps, 'onClick'> {
  onClick: (event: MouseEvent<HTMLButtonElement>, value?: string) => void
  value?: string
  to?: string
  component?: any
  className?: string
  icon?: React.ReactNode
  ref?: React.Ref<HTMLButtonElement> | null
  suffix?: React.ReactNode
  subLinks?: ReactElement<MenuItemProps>[]
}
interface SubMenuProps {
  open: boolean
  className?: string
}

const Component: FC<MenuItemProps> = forwardRef(
  (
    {
      children,
      className,
      component = 'button',
      subLinks,
      icon,
      suffix,
      onClick,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)

    const handleSetOpen = (e: MouseEvent<HTMLButtonElement>) => {
      onClick(e)
      if (subLinks?.length) setOpen(!open)
    }

    return (
      <>
        <MenuItem
          {...props}
          onClick={(e: MouseEvent<HTMLButtonElement>) => handleSetOpen(e)}
          as={component}
          ref={ref}
          className={className}
        >
          <Container>
            {icon && <IconWrap className="icon">{icon}</IconWrap>}
            <Content className="menu_item_content">{children}</Content>
            {suffix && (
              <SuffixWrap className="suffix" open={open}>
                {suffix}
              </SuffixWrap>
            )}
          </Container>
        </MenuItem>
        {[subLinks, open].some(Boolean) && (
          <SubMenu open={open}>{subLinks}</SubMenu>
        )}
      </>
    )
  }
)

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 0.25rem;
`

const IconWrap = styled.div`
  display: flex;
  margin-top: 0.185rem;
  margin-right: 0.4rem;
  font-size: 1.2rem;
`

const SuffixWrap = styled(IconWrap)<SubMenuProps>`
  align-items: flex-end;
  margin-left: 0.4rem;
  transform: ${(props) => (props.open ? 'rotate(-180deg)' : 'rotate(0deg)')};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* flex: 1 auto; */
`

const SubMenu = styled.div<SubMenuProps>`
  max-height: ${(props) => (props.open ? 'auto' : '0')};
  height: ${(props) => (props.open ? 'auto' : '0')};
  padding-left: 26px;
  overflow: hidden;
`

export const Item = styled(Component)`
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  line-height: 1.5;
  border: 0px;
  border-radius: 0px;
  background-color: ${({ theme }: ThemeProps) => theme.main.header.background};
  margin: 0px;
  user-select: none;
  text-decoration: none;
  outline: none;

  color: ${({ theme }: ThemeProps) => theme.main.header.color};

  .icon path {
    fill: ${({ theme }: ThemeProps) => theme.main.header.color};
  }
  .suffix path {
    fill: ${({ theme }: ThemeProps) => theme.main.header.color};
  }

  &:focus {
    color: var(--color-dark-pink);
    .icon path {
      fill: var(--color-dark-pink);
    }
    .suffix path {
      fill: var(--color-dark-pink);
    }
  }

  &:hover {
    color: var(--color-dark-pink);
    .icon path {
      fill: var(--color-dark-pink);
    }
    .suffix path {
      fill: var(--color-dark-pink);
    }
  }

  &[aria-disabled='true'],
  &:disabled {
    color: var(--color-opac-b-5);
    cursor: not-allowed;
  }
` as FC<Partial<MenuItemProps>>
