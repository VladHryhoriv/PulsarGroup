import { useLingui } from '@lingui/react'
import { changeLocaleFx } from 'entities/i18n/models/model'
import { useLocale } from 'entities/i18n/models/selectors'
import { logout } from 'features/logout/model'
import { localModal } from 'features/modals/local'
import React, { FC } from 'react'
import { getVariable } from 'shared/lib/getCssVariable'
import useMediaQuery from 'shared/lib/useMediaQuery'
import { Title } from 'shared/ui/atoms/typography/title'
import { Modal } from 'shared/ui/molecules/modal'
import styled from 'styled-components'
import { MenuDesktop } from './menu-desktop'
import { MenuMobile } from './menu-mobile'

interface Props {
  open: boolean
}

export const HeaderMenu: FC<Props> = ({ open }) => {
  const $locale = useLocale()
  const { i18n } = useLingui()

  const isMobile = useMediaQuery(
    `(max-width: ${getVariable('--breakpoint-sm')})`
  )

  const handleChangeLocale = () => {
    if (!isMobile) {
      if ($locale === 'ru') changeLocaleFx('en')
      else changeLocaleFx('ru')
    } else {
      localModal.open()
    }
  }

  const showLogoutConfirm = () => {
    Modal.confirm({
      theme: 'primary',
      content: (
        <ModalLargeText level={2}>{i18n._('logout_text')}</ModalLargeText>
      ),
      onOk: () => logout(),
    })
  }

  return (
    <>
      {isMobile ? (
        <MenuMobile
          open={open}
          handleLanguage={handleChangeLocale}
          handleLogout={showLogoutConfirm}
        />
      ) : (
        <MenuDesktop
          handleLanguage={handleChangeLocale}
          handleLogout={showLogoutConfirm}
        />
      )}
    </>
  )
}

const ModalLargeText = styled(Title)`
  margin: 0;
  max-width: 445px;
  color: inherit;

  font-size: 18px;

  @media only screen and (min-width: 485px) {
    font-size: 1.75rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 2.083rem;
  }
`
