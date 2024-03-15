import { useFormik } from 'formik'
import React, { FC } from 'react'
import { FormField } from 'shared/ui/molecules/form'
import styled from 'styled-components'
import * as Yup from 'yup'
import { t, Trans } from '@lingui/macro'

import { Input } from 'shared/ui/atoms/input'
import { PrimaryButton } from 'shared/ui/atoms/button'

import { RestoreParams } from 'features/join/types'
import EmailOutlined from 'shared/ui/atoms/icon/email-outlined'
import { isString } from 'lodash'
import { useLingui } from '@lingui/react'
import { InnerWrapp } from 'features/join/components/inner-wrap'

interface Props {
  handleSubmit: (values: RestoreParams) => void
  loading?: boolean
}

export const RestoreForm: FC<Props> = (props) => {
  const { handleSubmit, loading } = props

  const { i18n } = useLingui()

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email(i18n._(t`error.invalid_email`))
        .required(i18n._(t`error.required`)),
    }),
    validateOnMount: false,
    onSubmit: handleSubmit,
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InnerWrapp>
        <Field
          name="email"
          placeholder={i18n._(t`labels.email`)}
          value={formik.values.email}
          error={formik.errors.email}
          onChange={formik.handleChange}
        >
          <Input
            error={isString(formik.errors.email)}
            prefix={<EmailOutlined height="1rem" />}
          />
        </Field>
      </InnerWrapp>
      <ButtonWrap type="submit" disabled={loading} loading={loading}>
        <Trans id="buttons.send">Send</Trans>
      </ButtonWrap>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.3rem;
`

const Field = styled(FormField)`
  width: 16.975rem;

  @media only screen and (min-width: 768px) {
    width: 28.125rem;
  }
`

const ButtonWrap = styled(PrimaryButton)`
  width: 9rem;
  height: 2.375rem;

  @media only screen and (min-width: 768px) {
    width: 15rem;
    height: 3.375rem;
  }
`
