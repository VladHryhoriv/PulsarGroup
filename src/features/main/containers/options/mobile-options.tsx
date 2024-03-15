import { Trans } from '@lingui/macro'
import { config } from 'processes/config'
import { Loader } from 'features/common/components/loader'
import { OptionTemplate } from 'features/main/components/template'
import { useOptions, useOptionsPending } from 'features/main/model/selectors'
import React, { FC, useState } from 'react'
import {
  GhostGradientButton as GhostTmp,
  PrimaryPinkButton,
} from 'shared/ui/atoms/button'

import { CenterTemplate } from 'shared/ui/templates/center-template'
import styled, { css } from 'styled-components'
import { investOptionsRequestFx } from 'features/main/model'
import { OptionsId } from 'features/main/types/options'
import { toast as toastFn } from 'react-toastify'
import { t } from '@lingui/macro'
import { ThemeProps } from 'entities/theme/types'

const icons = [
  '../../../../../assets/images/option1.png',
  '../../../../../assets/svgs/option2.svg',
  '../../../../../assets/images/option3.png',
]

export const MobileOptionsTemplate: FC = () => {
  const $options = useOptions()
  const pending = useOptionsPending()

  const [activeOption, setActiveOption] = useState(0)

  const handleInvest = (option_id: OptionsId, amount: number) => {
    if (
      config.optionsAllowedToInves[option_id][0] > amount ||
      config.optionsAllowedToInves[option_id][1] < amount
    ) {
      toastFn(() => t({ id: 'error.incorect-sum' }), { type: 'error' })
      return
    }
    investOptionsRequestFx({ option_id, amount })
  }
  const handleSetActiveOption = (option: number) => {
    setActiveOption(option)
  }

  if (pending) {
    return (
      <CenterTemplate>
        <Loader />
      </CenterTemplate>
    )
  }

  return (
    <Wrap>
      <BuutonsWrap>
        {$options.map((_, index) =>
          activeOption === index ? (
            <PrimaryButton
              key={index}
              onClick={() => handleSetActiveOption(index)}
            >
              <Trans id="option-instruction" /> {index + 1}
            </PrimaryButton>
          ) : (
            <GhostButton
              key={index}
              onClick={() => handleSetActiveOption(index)}
            >
              <Trans id="option-instruction" /> {index + 1}
            </GhostButton>
          )
        )}
      </BuutonsWrap>
      <OptionTemplate
        id={$options[activeOption].id}
        name={activeOption + 1}
        option={$options[activeOption]}
        contributionValue={config.options[activeOption].contributionValue}
        incomePercent={config.options[activeOption].incomePercent}
        outputPercent={config.options[activeOption].outputPercent}
        icon={icons[activeOption]}
        onInvest={handleInvest}
      />
    </Wrap>
  )
}

const BuutonsWrap = styled.div`
  width: 100%;
  max-width: 398px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const basic_button_style = css`
  width: 90px;
  height: 32px;
  font-size: 12px;
`

const GhostButton = styled(GhostTmp)`
  ${basic_button_style}
  box-shadow: 2px 1000px 1px ${(props: ThemeProps) =>
    props.theme.main.background} inset !important;
`
const PrimaryButton = styled(PrimaryPinkButton)`
  ${basic_button_style}
`

const Wrap = styled.div`
  max-width: 839px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  flex-wrap: wrap;
`
