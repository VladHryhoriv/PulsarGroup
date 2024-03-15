import { FC } from 'react'
import { Modal } from 'shared/ui/molecules/modal'
import { useStore } from 'effector-react'
import { localModal } from 'features/modals/local'
import styled from 'styled-components'
import { Title } from 'shared/ui/atoms/typography/title'
import { GhostButton, PrimaryPinkButton } from 'shared/ui/atoms/button'
import { useLocale } from 'entities/i18n/models/selectors'
import { Trans } from '@lingui/macro'
import { changeLocaleFx } from 'entities/i18n/models/model'

export const ChangeLocalModal: FC<unknown> = () => {
  const activeModal = useStore(localModal.visible)

  const locale = useLocale()

  const handleChangeLocal = () => {
    if (locale === 'ru') changeLocaleFx('en')
    else changeLocaleFx('ru')
    localModal.close()
  }

  return (
    <Modal
      baseId="-local"
      visible={activeModal}
      onClose={() => localModal.close()}
    >
      <ModalLargeText>
        <Trans id="locale-modal-text" />
      </ModalLargeText>
      <BuutonsWrap>
        <GhostButton>
          <Trans id={`locale-modal-${locale}`} />
        </GhostButton>
        <PrimaryPinkButton onClick={handleChangeLocal}>
          <Trans id={`locale-modal-${locale === 'ru' ? 'en' : 'ru'}`} />
        </PrimaryPinkButton>
      </BuutonsWrap>
    </Modal>
  )
}

const ModalLargeText = styled(Title)`
  margin: 0;
  max-width: 445px;
  color: var(--color-semi-black);

  text-align: center;

  margin-top: 30px;
  margin-bottom: 20px;

  font-size: 18px;

  @media only screen and (min-width: 485px) {
    font-size: 1.75rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 2.083rem;
  }
`

const BuutonsWrap = styled.div`
  max-width: 170px;
  display: block;
  margin: 0 auto;
  margin-bottom: 30px;

  button {
    &:first-child {
      margin-bottom: 20px;
    }
    width: 100%;
  }
`
