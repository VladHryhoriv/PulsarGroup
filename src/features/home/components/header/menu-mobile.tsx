import { Trans } from '@lingui/macro'
import { ThemeProps } from 'entities/theme/types'
import { settingsModal } from 'features/modals/settings'
import { useProfile } from 'features/profile/model/selectors'
import React, { FC } from 'react'
import LanguageOutlined from 'shared/ui/atoms/icon/language-outlined'
import LogoutOutlined from 'shared/ui/atoms/icon/logout-outlined'
import SettingsOutlined from 'shared/ui/atoms/icon/settings-outlined'
import { Title } from 'shared/ui/atoms/typography/title'
import styled from 'styled-components'

interface Props {
  open: boolean
  handleLogout: () => void
  handleLanguage: () => void
}

export const MenuMobile: FC<Props> = (props) => {
  const { open, handleLogout, handleLanguage } = props

  const $user = useProfile()
  return (
    <>
      <BurgerContent open={open}>
        <HeadTextWrap>
          <HeadText level={3}>
            <Trans id="header.balance" />
          </HeadText>
          <HeadTextPink level={3}>{$user?.balance}$</HeadTextPink>
        </HeadTextWrap>
        <div className="icons-wrap">
          <LogoutOutlined onClick={handleLogout} />
          <LanguageOutlined onClick={handleLanguage} />
          <SettingsOutlined onClick={() => settingsModal.open()} />
        </div>
      </BurgerContent>
    </>
  )
}

const HeadTextWrap = styled.div`
  display: flex;
`

const HeadTextControl = styled(Title)`
  margin: 0;

  font-size: 18px;

  @media only screen and (min-width: 576px) {
    font-size: 28px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
`

const HeadText = styled(HeadTextControl)`
  display: flex;
  font-weight: 500;
  color: ${({ theme }: ThemeProps) => theme.main.header.color};
`

const HeadTextPink = styled(HeadTextControl)`
  font-weight: 700;
  color: var(--color-dark-pink);
  margin-left: 0.3rem;
`

const BurgerContent = styled.div<{ open: boolean }>`
  z-index: 2;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;

  padding: 8px 0;

  svg {
    cursor: pointer;
    margin-right: 5px;
  }
  .icons-wrap {
    svg path {
      fill: ${({ theme }: ThemeProps) => theme.main.header.color};
    }
  }
`
