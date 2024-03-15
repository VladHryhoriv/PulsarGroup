import { useFormik } from 'formik'
import React, { FC } from 'react'
import { FormField } from 'shared/ui/molecules/form'
import styled from 'styled-components'
import * as Yup from 'yup'
import { t, Trans } from '@lingui/macro'

import { Input } from 'shared/ui/atoms/input'
import { PrimaryButton } from 'shared/ui/atoms/button'

import { ResetParams } from 'features/join/types'
import PasswordOutlined from 'shared/ui/atoms/icon/password-outlined'
import EyeOutlined from 'shared/ui/atoms/icon/eye-outlined'
import { isString } from 'lodash'
import { useLingui } from '@lingui/react'

interface Props {
  handleSubmit: (values: ResetParams) => void
  loading?: boolean
}

export const ResetForm: FC<Props> = (props) => {
  const { handleSubmit, loading } = props

  const { i18n } = useLingui()

  const formik = useFormik({
    initialValues: {
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().required(i18n._(t`error.required`)),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
      ),
    }),
    validateOnMount: false,
    onSubmit: async ({ password }) => {
      try {
        await handleSubmit({ password })
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Unreachable code error
        if (error.response.data.emailUsed) {
          formik.setFieldError('email', 'Email is already exsist')
        }
      }
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InnerWrapper>
        <Field
          name="password"
          placeholder={i18n._(t`labels.password`)}
          value={formik.values.password}
          error={formik.errors.password}
          onChange={formik.handleChange}
        >
          <Input.Password
            error={isString(formik.errors.password)}
            prefix={<PasswordOutlined height="1rem" />}
            suffix={<EyeOutlined height="1rem" />}
          />
        </Field>
        <Field
          name="passwordConfirmation"
          placeholder={i18n._(t`labels.repeatPassword`)}
          value={formik.values.passwordConfirmation}
          error={formik.errors.passwordConfirmation}
          onChange={formik.handleChange}
        >
          <Input.Password
            error={isString(formik.errors.passwordConfirmation)}
            prefix={<PasswordOutlined height="1rem" />}
            suffix={<EyeOutlined height="1rem" />}
          />
        </Field>
      </InnerWrapper>
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
  a {
    text-decoration: underline;
    color: var(--color-white);
  }
`

const Field = styled(FormField)`
  width: 16.975rem;

  @media only screen and (min-width: 768px) {
    width: 28.125rem;
  }
`

const InnerWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 0.2rem;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 2.64rem;
    > * {
      margin-bottom: 1.1111111rem;
    }
  }
`

const ButtonWrap = styled(PrimaryButton)`
  width: 9rem;
  height: 2.375rem;
  margin-bottom: 0.9rem;

  @media only screen and (min-width: 768px) {
    width: 15rem;
    height: 3.375rem;
  }
`
