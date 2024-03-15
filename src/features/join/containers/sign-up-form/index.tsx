import { useFormik } from 'formik'
import React, { FC, useState } from 'react'
import { FormField } from 'shared/ui/molecules/form'
import styled from 'styled-components'
import * as Yup from 'yup'
import { t, Trans } from '@lingui/macro'
import { Link } from 'react-router-dom'

import { Input } from 'shared/ui/atoms/input'
import { PrimaryButton } from 'shared/ui/atoms/button'

import { SignUpParams } from 'features/join/types'
import EmailOutlined from 'shared/ui/atoms/icon/email-outlined'
import PasswordOutlined from 'shared/ui/atoms/icon/password-outlined'
import EyeOutlined from 'shared/ui/atoms/icon/eye-outlined'
import { isString } from 'lodash'
import { useLingui } from '@lingui/react'
import { Checkbox } from 'shared/ui/atoms/checkbox'
import { paths } from 'pages/paths'
import UserOutlined from 'shared/ui/atoms/icon/user-outlined'
import { InnerWrapp } from 'features/join/components/inner-wrap'

interface Props {
  handleSubmit: (values: SignUpParams) => void
  loading?: boolean
}

export const SignUpForm: FC<Props> = (props) => {
  const { handleSubmit, loading } = props

  const { i18n } = useLingui()
  const [accept, setAccept] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(i18n._(t`error.required`)),
      email: Yup.string()
        .email(i18n._(t`error.invalid_email`))
        .required(i18n._(t`error.required`)),
      password: Yup.string()
        .required(i18n._(t`error.required`))
        .min(6, i18n._(t`error.minLength`)),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
      ),
    }),
    validateOnMount: false,
    onSubmit: async (values) => {
      try {
        await handleSubmit(values)
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
      <InnerWrapp>
        <Field
          name="name"
          placeholder={i18n._(t`labels.name`)}
          value={formik.values.name}
          error={formik.errors.name}
          onChange={formik.handleChange}
        >
          <Input
            error={isString(formik.errors.name)}
            prefix={<UserOutlined height="1rem" />}
          />
        </Field>
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
        <OtherField>
          <Checkbox
            onChange={() => setAccept((prev) => !prev)}
            label={
              <span>
                <Trans id="labels.iAccept">I agree to the</Trans> &nbsp;
                <Link to={paths.privacy}>
                  <Trans id="labels.termsAndConditions">privacy policy</Trans>
                </Link>
              </span>
            }
          />
        </OtherField>
      </InnerWrapp>
      <ButtonWrap
        type="submit"
        disabled={[loading, !accept].some(Boolean)}
        loading={loading}
      >
        <Trans id="buttons.login">Login</Trans>
      </ButtonWrap>
      <Link to={paths.login}>
        <Trans id="title.alreadyHas">У меня уже есть аккаунт</Trans>
      </Link>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.3rem;
  font-size: 0.6875rem;
  a {
    text-decoration: underline;
    color: var(--color-white);
  }

  @media only screen and (min-width: 767px) {
    font-size: 0.93rem;
  }
`

const Field = styled(FormField)`
  width: 17.9rem;

  @media only screen and (min-width: 768px) {
    width: 28.125rem;
  }
`

const OtherField = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 0.25rem;

  @media only screen and (max-width: 768px) {
    margin-top: 0.83rem;
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
