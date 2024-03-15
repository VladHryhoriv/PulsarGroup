import { useLingui } from '@lingui/react'
import { FC, useRef, useState } from 'react'
import { useStore } from 'effector-react'

import { Modal } from 'shared/ui/molecules/modal'

import { settingsModal } from 'features/modals/settings'
import { Title as TitleBase } from 'shared/ui/atoms/typography/title'
import styled, { css } from 'styled-components'
import UserOutlined from 'shared/ui/atoms/icon/user-outlined'
import {
  useProfile,
  useSendEmailStatus,
} from 'features/profile/model/selectors'
import EmailOutlined from 'shared/ui/atoms/icon/email-outlined'
import PasswordOutlined from 'shared/ui/atoms/icon/password-outlined'
import RemoveOutlined from 'shared/ui/atoms/icon/remove-outlined'
import { Trans } from '@lingui/macro'
import { Input as InputBase } from 'shared/ui/atoms/input'
import PenOutlined from 'shared/ui/atoms/icon/pen-outlined'
import CloseOutlined from 'shared/ui/atoms/icon/close-outlined'
import CheckOutlined from 'shared/ui/atoms/icon/check-outlined'
import {
  deleteAccountRequestFx,
  sendEmailStatusRequestFx,
  updateProfileNameRequestFx,
  // TODO: Uncommit after BE fix
  // updateProfileThemeRequestFx,
} from 'features/profile/model'
import { ThemeProps } from 'entities/theme/types'
import ThemeOutlined from 'shared/ui/atoms/icon/theme-outlined'
import { Dropdown } from 'shared/ui/molecules/dropdown'
import ArrowSmallOutlined from 'shared/ui/atoms/icon/arrow-small-outlined'
import { Menu } from 'shared/ui/molecules/menu'
import { changeThemeFx } from 'entities/theme/model'
import { useActiveTheme } from 'entities/theme/selectors'

export const SettingsModal: FC = () => {
  const activeModal = useStore(settingsModal.visible)
  const $user = useProfile()
  const $sendEmailStatus = useSendEmailStatus()
  const $activeTheme = useActiveTheme()

  const [edit, setEdit] = useState(false)
  const [themeOpen, setThemeOpen] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const { i18n } = useLingui()

  const showDeleteAccountConfirm = () => {
    Modal.confirm({
      theme: 'danger',
      content: (
        <ModalLargeText level={2}>
          {i18n._('delete_account_1')}
          <ModalLargeTextRed>{i18n._('delete_account_2')}</ModalLargeTextRed>
          {i18n._('delete_account_3')}
        </ModalLargeText>
      ),
      onOk: () => deleteAccountRequestFx(),
    })
  }

  const handleSubmit = () => {
    if (inputRef && inputRef.current?.value.trim()) {
      updateProfileNameRequestFx({ name: inputRef.current.value })
      setEdit(false)
    } else {
      setEdit(false)
    }
  }

  const sendEmail = () => {
    sendEmailStatusRequestFx()
  }
  const handleUpdateTheme = () => {
    // TODO: Uncommit after BE fix
    // updateProfileThemeRequestFx({
    //   theme: $user?.theme === 'light' ? 'dark' : 'light',
    // })

    changeThemeFx($activeTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <MyModal
      visible={activeModal}
      onClose={() => settingsModal.close()}
      baseId="create-w"
    >
      <Title>{i18n._('menu-settings')}</Title>
      <InnerWrap>
        <ModalRow>
          <StaticBlock>
            <UserOutlined height="25px" width="25px" />
            <StaticText>
              <Trans id="settings.name" />
            </StaticText>
          </StaticBlock>
          {edit ? (
            <Input autoFocus ref={inputRef} defaultValue={$user?.name} />
          ) : (
            <DynamicText>{$user?.name}</DynamicText>
          )}
          {!edit && <EditIcon onClick={() => setEdit(true)} />}
          {edit && (
            <EditIconWrap>
              <CheckOutlined
                onClick={handleSubmit}
                height="25px"
                width="25px"
                className="check"
              />
              <CloseOutlined onClick={() => setEdit(false)} className="close" />
            </EditIconWrap>
          )}
        </ModalRow>
        <ModalRow>
          <StaticBlock>
            <ThemeOutlined height="25px" width="25px" />
            <StaticText>
              <Trans id="settings.theme" />
            </StaticText>
          </StaticBlock>
          {/* <DynamicText>{$user?.theme}</DynamicText> */}
          <Dropdown className="settings-dropdown">
            <Menu.Item
              className="settings-dropdown_item"
              suffix={<ArrowSmallOutlined width="10px" />}
              onClick={() => setThemeOpen(!themeOpen)}
              subLinks={[
                <Menu.Item
                  className="settings-dropdown_item settings-dropdown_subitem"
                  key="theme"
                  onClick={handleUpdateTheme}
                >
                  {themeOpen && (
                    <Trans
                      id={`settings.theme.${
                        $activeTheme === 'light' ? 'dark' : 'light'
                      }`}
                    />
                  )}
                </Menu.Item>,
              ]}
            >
              <Trans id={`settings.theme.${$activeTheme}`} />
            </Menu.Item>
          </Dropdown>
        </ModalRow>
        <ModalRow>
          <StaticBlock>
            <EmailOutlined height="25px" width="25px" />
            <StaticText>
              <Trans id="settings.email" />
            </StaticText>
          </StaticBlock>
          <DynamicText>{$user?.email}</DynamicText>
        </ModalRow>
        <ModalRow>
          <StaticBlock>
            <PasswordOutlined height="25px" width="25px" />
            <StaticText>
              <Trans id="settings.password" />
            </StaticText>
          </StaticBlock>
          <DynamicText onClick={sendEmail} isLink={true} type="password">
            {$sendEmailStatus === null ? (
              <Trans id="settings.password.change" />
            ) : $sendEmailStatus ? (
              <Trans id="settings.password.success" />
            ) : (
              <Trans id="settings.password.repeat" />
            )}
          </DynamicText>
        </ModalRow>
        <ModalRow>
          <StaticBlock>
            <RemoveOutlined height="25px" width="25px" />
            <StaticText>
              <Trans id="settings.deactivation" />
            </StaticText>
          </StaticBlock>
          <DynamicText
            onClick={() => showDeleteAccountConfirm()}
            isLink={true}
            type="deactivation"
          >
            <Trans id="settings.deactivation.change" />
          </DynamicText>
        </ModalRow>
      </InnerWrap>
    </MyModal>
  )
}

const MyModal = styled(Modal)`
  max-width: 758px;
  min-width: unset;
  margin: 0 auto;

  padding: 0 10px;
  width: 85%;

  @media only screen and (min-width: 485px) {
    padding: 0 43px;
    width: 75%;
  }
`

const Title = styled(TitleBase)`
  color: inherit;
  text-align: center;

  font-size: 18px;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 30px;
  }
`

const InnerWrap = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  margin-bottom: 25px;

  padding-right: 25px;

  color: inherit;

  @media only screen and (min-width: 768px) {
    max-width: 603px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 485px) {
    padding-right: 62px;
  }
`

const ModalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: inherit;
  position: relative;

  path {
    fill: inherit;
  }

  margin-bottom: 15px;

  .menu_item_content {
    font-size: 14px;
  }
  .suffix {
    align-items: center;
  }
  .settings-dropdown {
    position: relative;

    &_subitem {
      position: absolute;
      width: 100px;
      left: 0;
      padding-left: 20px;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 20px;

    .menu_item_content {
      font-size: 26px;
    }
  }
`

const StaticBlock = styled.div`
  display: flex;
  align-items: center;
`

const StaticText = styled.span`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;

  @media only screen and (min-width: 768px) {
    margin-left: 14px;
    font-size: 30px;
  }
`

type TextType = {
  isLink?: boolean
  type?: 'password' | 'deactivation'
}

const DynamicText = styled.span<TextType>`
  font-size: 14px;

  font-family: 'Open Sans', sans-serif;

  ${(props: TextType) =>
    props.isLink
      ? css`
          text-decoration: underline;
          cursor: pointer;
          &:hover {
            color: ${props.type === 'password'
              ? 'var(--color-dark-pink)'
              : 'var(--color-orange)'};
          }
        `
      : css``}

  @media only screen and (min-width: 768px) {
    margin-left: 14px;
    font-size: 26px;
  }
`

const EditIcon = styled(PenOutlined)`
  position: absolute;
  right: -25px;
  cursor: pointer;
`

const EditIconWrap = styled.div`
  position: absolute;
  right: 0;

  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    path {
      fill: rgb(118, 118, 118);
    }
  }

  .check {
    margin-right: 10px;
  }

  .check:hover {
    path {
      fill: var(--color-semi-green);
    }
  }
  .close:hover {
    path {
      stroke: var(--color-danger);
    }
  }

  @media only screen and (min-width: 485px) {
    right: -55px;
  }
`

const Input = styled(InputBase)`
  background: ${({ theme }: ThemeProps) => theme.colors.modal.background};
  border: none;
  justify-content: flex-end;

  height: 25px;
  margin-right: 55px;

  input {
    text-align: end;
    color: var(--color-black);
    width: 100%;

    font-size: 14px;
  }

  @media only screen and (min-width: 768px) {
    height: 29px;
    input {
      font-size: 26px;
    }
  }
  @media only screen and (min-width: 485px) {
    margin-right: 0;
  }
`

const ModalLargeText = styled(Title)`
  margin: 0;
  max-width: 445px;
  color: inherit;
`

const ModalLargeTextRed = styled.span`
  color: var(--color-orange);
`
