import { Loader } from 'features/common/components/loader'
import { OptionTemplate } from 'features/main/components/template'
import { useOptions, useOptionsPending } from 'features/main/model/selectors'
import React, { FC } from 'react'

import { CenterTemplate } from 'shared/ui/templates/center-template'
import styled from 'styled-components'
import { investOptionsRequestFx } from 'features/main/model'
import { OptionsId } from 'features/main/types/options'
import { toast as toastFn } from 'react-toastify'
import { t } from '@lingui/macro'
import { useCollapse } from 'features/home/model/selectors'
import { optionsAllowedToInvest, optionsCardTemplate } from 'mocks/options'

export const DesktopOptionsTemplate: FC = () => {
  const $options = useOptions()
  const pending = useOptionsPending()
  const $collapsed = useCollapse()

  const handleInvest = (option_id: OptionsId, amount: number) => {
    if (
      optionsAllowedToInvest[option_id][0] > amount ||
      optionsAllowedToInvest[option_id][1] < amount
    ) {
      toastFn(() => t({ id: 'error.incorect-sum' }), { type: 'error' })
      return
    }
    investOptionsRequestFx({ option_id, amount })
  }

  if (pending) {
    return (
      <CenterTemplate>
        <Loader />
      </CenterTemplate>
    )
  }

  return (
    <Wrap collapsed={$collapsed}>
      <OptionTemplate
        id={$options[0].id}
        name="1"
        option={$options[0]}
        contributionValue={optionsCardTemplate[0].contributionValue}
        incomePercent={optionsCardTemplate[0].incomePercent}
        outputPercent={optionsCardTemplate[0].outputPercent}
        icon="../../../../../assets/images/option1.png"
        onInvest={handleInvest}
      />
      <OptionTemplate
        id={$options[1].id}
        name="2"
        option={$options[1]}
        contributionValue={optionsCardTemplate[1].contributionValue}
        incomePercent={optionsCardTemplate[1].incomePercent}
        outputPercent={optionsCardTemplate[1].outputPercent}
        icon="../../../../../assets/svgs/option2.svg"
        onInvest={handleInvest}
      />
      <OptionTemplate
        id={$options[2].id}
        name="3"
        option={$options[2]}
        contributionValue={optionsCardTemplate[2].contributionValue}
        incomePercent={optionsCardTemplate[2].incomePercent}
        outputPercent={optionsCardTemplate[2].outputPercent}
        icon="../../../../../assets/images/option3.png"
        onInvest={handleInvest}
      />
    </Wrap>
  )
}

const Wrap = styled.div<{ collapsed: boolean }>`
  max-width: ${(props) => (props.collapsed ? 'auto' : '839px')};
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (min-width: 1200px) {
    justify-content: space-between;
  }

  @media only screen and (min-width: 1600px) {
    max-width: 1280px;
  }
`
