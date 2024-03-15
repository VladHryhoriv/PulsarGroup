import {
  FC,
  cloneElement,
  isValidElement,
  forwardRef,
  ReactNode,
  useState,
} from 'react'
import styled, { css } from 'styled-components'
import classNames from 'classnames'
import { Input as InputBase, InputProps as InputBaseProps } from 'reakit/Input'
import { DefaultTheme, ThemeProps } from 'entities/theme/types'

type OverlayFunc<P> = (props: P) => React.ReactElement<P>

export interface InputNative
  extends Omit<InputBaseProps, 'prefix' | 'onChange'> {
  prefix?: ReactNode
  suffix?: ReactNode
  error?: boolean | string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type RenderProps = {
  renderInput?:
    | React.Component<InputNative>
    | React.FC<InputNative>
    | OverlayFunc<InputNative>
}

export type InputProps = InputNative & RenderProps

const Control: FC<InputProps> = forwardRef(
  (
    {
      value,
      className,
      prefix,
      disabled,
      renderInput,
      suffix,
      error = false,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [focus, setFocus] = useState(false)

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!disabled) {
        setFocus(true)
        onFocus?.(e)
      }
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!disabled) {
        setFocus(false)
        onBlur?.(e)
      }
    }

    const renderInputOverlay = () => {
      const propsOverlay = {
        value,
        prefix,
        renderInput,
        suffix,
        onBlur: handleBlur,
        onFocus: handleFocus,
        className: classNames('sl-input-control', {
          'sl-pd-r': !!prefix,
          'sl-pd-l': !!suffix,
        }),
        ...props,
      }
      if (typeof renderInput === 'function') {
        return renderInput(propsOverlay)
      }

      if (isValidElement(renderInput)) {
        return cloneElement(renderInput, propsOverlay)
      }

      return null
    }

    return (
      <div
        {...props}
        role="input"
        className={classNames(className, 'sl-input')}
        data-focus={focus}
        aria-disabled={disabled}
      >
        {prefix && (
          <IconPrefix error={error}>
            <InnerIconWrap>{prefix}</InnerIconWrap>
          </IconPrefix>
        )}
        {!renderInput ? (
          <StyledInput
            {...props}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: Unreachable code error
            error={error ? 1 : 0}
            className={classNames('sl-input-control', {
              'sl-pd-r': !!prefix,
              'sl-pd-l': !!suffix,
            })}
            ref={ref}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={value}
          />
        ) : (
          renderInputOverlay()
        )}

        {suffix && !error && (
          <IconSuffix>
            <InnerIconWrap>{suffix}</InnerIconWrap>
          </IconSuffix>
        )}
      </div>
    )
  }
)

const StyledInput = styled(InputBase)`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  line-height: 1;
  color: ${(props: { error: boolean; theme: DefaultTheme }) =>
    props.error
      ? 'var(--color-danger)'
      : props.theme.colors.input.color} !important;

  padding-top: 0.3rem;
  padding-bottom: 0.5rem;

  &::placeholder {
    font-size: 0.93rem;
    color: var(--color-gray);
  }
  &[aria-disabled='true'],
  &:disabled {
    color: var(--color-opac-b-5);
  }

  &[readonly] {
    cursor: pointer;
  }

  font-size: 0.8125rem;

  @media only screen and (min-width: 768px) {
    font-size: 100%;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: ${({ theme }: ThemeProps) => {
      if (theme.name === 'dark') {
        return ' 0 0 0 30px #23233e inset'
      }
      return ' 0 0 0 30px #EFEFEF inset'
    }} !important;
    -webkit-text-fill-color: ${({ theme }: ThemeProps) =>
      theme.colors.input.color};
  }
`

const InputIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-size: 1.4rem;
  min-width: 3rem;
  position: absolute;
  top: 0px;
  bottom: 0px;
`

const InnerIconWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
`

const IconPrefix = styled(InputIcon)<{ error: boolean | string }>`
  left: 0;
  path {
    fill: var(${(props) => props.error && '--color-danger'});
  }
`

const IconSuffix = styled(InputIcon)`
  right: 0;
`

export const Input = styled(Control)`
  position: relative;
  display: flex;
  border: 1px solid transparent;
  overflow: hidden;

  outline: none;
  border-radius: 0.625rem;
  background-color: var(--color-lighting);

  ${({ theme }: ThemeProps) => css`
    background: ${theme.colors.input.background};
    border-radius: ${theme.colors.input.borderRadius};
    border: ${theme.colors.input.border};
  `}

  .sl-input-control {
    padding-left: 1rem;
  }

  .sl-pd-r {
    padding-left: 2.4rem;
  }

  .sl-pd-l {
    padding-right: 2.4rem;
  }

  &[data-focus='true'] {
    border-color: var(--color-primary);
  }
  &:active,
  &:focus {
    border-color: var(--color-primary);
  }
  &[aria-disabled='true'],
  &:disabled {
    color: var(--color-opac-b-5);
  }
` as FC<InputProps>

Input.displayName = 'Input'

export default Input
