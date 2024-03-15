import { useFormik } from 'formik'
import React, { FC } from 'react'
import { FormField } from 'shared/ui/molecules/form'
import styled from 'styled-components'
import * as Yup from 'yup'
import { t, Trans } from '@lingui/macro'
import { Link } from 'react-router-dom'

import { Input } from 'shared/ui/atoms/input'
import { PrimaryButton } from 'shared/ui/atoms/button'

import { LoginParams } from 'features/join/types'
import EmailOutlined from 'shared/ui/atoms/icon/email-outlined'
import PasswordOutlined from 'shared/ui/atoms/icon/password-outlined'
import EyeOutlined from 'shared/ui/atoms/icon/eye-outlined'
import { isString } from 'lodash'
import { useLingui } from '@lingui/react'
import { paths } from 'pages/paths'
import { InnerWrapp } from 'features/join/components/inner-wrap'
import { ThemeProps } from 'entities/theme/types'

interface Props {
  handleSubmit: (values: LoginParams) => void
  loading?: boolean
}

export const SignInForm: FC<Props> = (props) => {
  const { handleSubmit, loading } = props

  const { i18n } = useLingui()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email(i18n._(t`error.invalid_email`))
        .required(i18n._(t`error.required`)),
      password: Yup.string().required(i18n._(t`error.required`)),
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
        <Links>
          <Link to={paths.restore}>
            <Trans id="link.reset">Forgot your password?</Trans>
          </Link>
          <Link to={paths.signup}>
            <Trans id="link.signup">Don`t have an account yet?</Trans>
          </Link>
        </Links>
      </InnerWrapp>
      <ButtonWrap type="submit" disabled={loading} loading={loading}>
        <Trans id="buttons.login">Login</Trans>
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

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: underline;
    color: var(--color-white);
    font-size: 0.9375rem;
  }

  a:hover {
    color: ${({ theme }: ThemeProps) => theme.colors.input.link};
  }

  @media only screen and (max-width: 767px) {
    margin-top: 0.83rem;

    a {
      font-size: 0.6875rem;
    }
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
