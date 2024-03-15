import { useLingui } from '@lingui/react'
import { useFormik } from 'formik'
import React, { FC } from 'react'
import { Input as InputTemplate } from 'shared/ui/atoms/input'
import { t, Trans } from '@lingui/macro'
import styled, { css } from 'styled-components'
import {
  GhostGradientButton,
  PrimaryButton as PrimaryTmp,
} from 'shared/ui/atoms/button'
import { isString } from 'lodash'

import * as Yup from 'yup'
import { FormField } from 'shared/ui/molecules/form'
import { OptionsStatus } from 'features/main/types/options'
import { ThemeProps } from 'entities/theme/types'
import UsdOutlined from 'shared/ui/atoms/icon/usd-outlined'

interface Props {
  status: OptionsStatus
  onSubmit: (values: number) => void
}

export const InvestingForm: FC<Props> = (props) => {
  const { status, onSubmit } = props

  const { i18n } = useLingui()

  const handleSubmit = (values: number) => {
    onSubmit(values)
    formik.resetForm()
  }

  const formik = useFormik({
    initialValues: {
      invest: '',
    },
    validationSchema: Yup.object().shape({
      invest: Yup.number().required(i18n._(t`error.required`)),
    }),
    validateOnMount: false,
    onSubmit: (values) => handleSubmit(+values.invest),
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormField
        name="invest"
        placeholder={i18n._(t`labels.invest`)}
        value={formik.values.invest}
        error={formik.errors.invest}
        onChange={formik.handleChange}
      >
        <Input
          error={isString(formik.errors.invest)}
          prefix={<UsdOutlined width="20px" />}
        />
      </FormField>
      {[1, 4].some((item) => item === status) ? (
        <PrimaryButton type="submit">
          <Trans id="buttons.invest">Invest</Trans>
        </PrimaryButton>
      ) : (
        <GhostButton
          disabled={[2, 3, 5].some((item) => item === status)}
          type="submit"
        >
          <Trans id="buttons.invest">Invest</Trans>
        </GhostButton>
      )}
    </Form>
  )
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled(InputTemplate)`
  background-color: ${({ theme }: ThemeProps) => theme.main.option.inputBg};
  margin-top: 15px;
  margin-bottom: 15px;
`

const basic_button_style = css`
  width: 9rem;
  height: 2.375rem;

  font-weight: normal;

  @media only screen and (min-width: 768px) {
    width: 10.625rem;
    height: 2.875rem;
  }
`

const PrimaryButton = styled(PrimaryTmp)`
  ${basic_button_style}
`

const GhostButton = styled(GhostGradientButton)`
  ${basic_button_style}
`
