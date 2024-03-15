import { t, Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { useFormik } from 'formik'
import { isString } from 'lodash'
import React, { FC } from 'react'
import { GhostGradientButton } from 'shared/ui/atoms/button'
import UsdOutlined from 'shared/ui/atoms/icon/usd-outlined'
import WalletOutlined from 'shared/ui/atoms/icon/wallet-outlined'
import { Input } from 'shared/ui/atoms/input'
import { FormField } from 'shared/ui/molecules/form'
import { Select } from 'shared/ui/molecules/select'
import styled from 'styled-components'
import * as Yup from 'yup'
import { ExportParams } from '../types'

type DefaultItem = {
  value: string
  label: React.ReactNode
}

interface IProps {
  selectData: DefaultItem[]
  handleSubmit: (values: ExportParams) => void
  loading: boolean
}

export const ExportModalForm: FC<IProps> = (props): JSX.Element => {
  const { selectData, handleSubmit, loading } = props
  const { i18n } = useLingui()

  const handleFormSubmit = (values: ExportParams) => {
    handleSubmit(values)
  }

  const formik = useFormik({
    initialValues: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Defaul value
      unit: '',
      account: '',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Defaul value
      amount: '',
    },
    validationSchema: Yup.object().shape({
      unit: Yup.string().required(i18n._(t`error.required`)),
      account: Yup.string().required(i18n._(t`error.required`)),
      amount: Yup.number()
        .typeError(i18n._(t`error.isNotNumber`))
        .required(i18n._(t`error.required`)),
    }),
    validateOnMount: false,
    onSubmit: handleFormSubmit,
  })

  const handleChange = (item: string) => {
    formik.setFieldValue('unit', item)
  }

  return (
    <Form onSubmit={formik.handleSubmit}>
      {/* <InnerWrapp> */}
      <Field
        name="unit"
        placeholder={i18n._(t`labels.currency-type`)}
        value={formik.values.unit}
        error={formik.errors.unit}
      >
        <Select
          prefix={<WalletOutlined height="16px" />}
          onChange={handleChange}
          data={selectData}
          value={formik.values.unit}
        />
      </Field>
      <Field
        name="account"
        placeholder={i18n._(t`labels.account-number`)}
        value={formik.values.account}
        error={formik.errors.account}
        onChange={formik.handleChange}
      >
        <Input
          prefix={<WalletOutlined height="16px" />}
          error={isString(formik.errors.account)}
        />
      </Field>
      <Field
        name="amount"
        placeholder={i18n._(t`labels.sum`)}
        value={formik.values.amount}
        error={formik.errors.amount}
        onChange={formik.handleChange}
      >
        <Input
          error={isString(formik.errors.amount)}
          prefix={<UsdOutlined height="16px" />}
        />
      </Field>
      <ButtonWrap type="submit" disabled={loading} loading={loading}>
        <Trans id="side-link.export">Withdrawn</Trans>
      </ButtonWrap>
    </Form>
  )
}

const Form = styled.form`
  max-width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.3rem;
  padding: 0 10px;
  box-sizing: border-box;

  width: width: 100%;;

  @media only screen and (min-width: 818px) {
    width: 440px;
  }
`

const Field = styled(FormField)`
  width: 100%;
`

const ButtonWrap = styled(GhostGradientButton)`
  width: 120px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media only screen and (min-width: 321px) {
    width: 160px;
    margin-top: 30px;
  }
`
