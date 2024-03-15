import { Trans } from '@lingui/macro'
import { useLocale } from 'entities/i18n/models/selectors'
import { ThemeProps } from 'entities/theme/types'
import { settingsModal } from 'features/modals/settings'
import { useProfile } from 'features/profile/model/selectors'
import React, { FC, MouseEvent, useState } from 'react'
import { Avatar } from 'shared/ui/atoms/avatar'
import ArrowSmallOutlined from 'shared/ui/atoms/icon/arrow-small-outlined'
import LanguageOutlined from 'shared/ui/atoms/icon/language-outlined'
import LogoutOutlined from 'shared/ui/atoms/icon/logout-outlined'
import SettingsOutlined from 'shared/ui/atoms/icon/settings-outlined'
import { Dropdown } from 'shared/ui/molecules/dropdown'
import { Menu } from 'shared/ui/molecules/menu'
import styled from 'styled-components'

const regExp = '^.*(menu_button|user_info|arrow|user_name|avatar).*$'
const regExpMenu = '^.*(main_menu).*$'

interface Props {
  handleLogout: () => void
  handleLanguage: () => void
}

export const MenuDesktop: FC<Props> = (props) => {
  const { handleLogout, handleLanguage } = props

  const $locale = useLocale()
  const $user = useProfile()
  const [focus, setFocus] = useState(false)

  const handleOpenChange = (e: MouseEvent<HTMLDivElement>): void => {
    if ((e.target as Element)?.className.match(regExp)?.length) {
      setFocus(!focus)
    }
  }

  const handleOnBlur = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target as Element)?.className.match(regExpMenu)?.length) {
      setFocus(false)
    }
  }

  const renderMenu = () => (
    <Menu className="main_menu">
      <Menu.Item
        icon={<LanguageOutlined />}
        suffix={<ArrowSmallOutlined width="10px" />}
        subLinks={[
          <Menu.Item key="language" onClick={handleLanguage}>
            {$locale === 'ru' ? 'EN' : 'RU'}
          </Menu.Item>,
        ]}
      >
        {$locale.toUpperCase()}
      </Menu.Item>
      <Menu.Item
        icon={<SettingsOutlined />}
        onClick={() => settingsModal.open()}
      >
        <Trans id="menu-settings" />
      </Menu.Item>
      <Menu.Item onClick={handleLogout} icon={<LogoutOutlined />}>
        <Trans id="menu-logout" />
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <Dropdown
        onOpenChange={(e: MouseEvent<HTMLDivElement>) => handleOpenChange(e)}
        data-focus={focus}
        onBlur={(e: MouseEvent<HTMLDivElement>) => handleOnBlur(e)}
        className="menu_button"
        overlay={renderMenu()}
      >
        <NameWrap className="user_info" open={focus}>
          <ArrowSmallOutlined className="arrow" width="10px" />
          <Name className="user_name">{$user?.name}</Name>
          <Avatar.Small className="avatar" name={$user?.name} />
        </NameWrap>
      </Dropdown>
    </>
  )
}

type StyledProps = ThemeProps & {
  open: boolean
}

const NameWrap = styled.div<StyledProps>`
  display: flex;
  align-items: center;

  color: ${(props) =>
    props.open ? 'var(--color-dark-pink)' : props.theme.main.header.color};

  &:hover,
  &:focus {
    color: var(--color-dark-pink);
    .arrow path {
      fill: var(--color-dark-pink);
    }
  }

  .arrow {
    path {
      fill: ${(props) =>
        props.open ? 'var(--color-dark-pink)' : props.theme.main.header.color};
    }
    transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`
const Name = styled.span`
  font-weight: 500;

  margin-right: 10px;
  margin-left: 10px;
`
