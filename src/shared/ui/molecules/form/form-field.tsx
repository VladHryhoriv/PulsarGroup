import {
  FC,
  cloneElement,
  isValidElement,
  forwardRef,
  HTMLAttributes,
  Ref,
} from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

import useId from 'shared/lib/useId'
import { InputProps } from 'shared/ui/atoms/input/input'
import InfoOutlined from 'shared/ui/atoms/icon/info-outlined'
import { Tooltip } from 'shared/ui/atoms/tooltip'

interface FormFieldProps extends Partial<HTMLAttributes<HTMLDivElement>> {
  className?: string
  label?: string
  a11yLabel?: string
  htmlFor?: string
  error?: boolean | string
  ref?: Ref<HTMLDivElement> | null
}

const Component: FC<FormFieldProps & InputProps> = forwardRef(
  (
    {
      children,
      htmlFor = 'form-field-',
      a11yLabel,
      error = false,
      label,
      className,
      ...props
    },
    ref
  ) => {
    const [id] = useId(1, htmlFor)

    const renderInput = () => {
      if (isValidElement(children)) {
        const input = cloneElement(children, {
          id,
          className: classNames(children.props.className, {
            'sl-form-e': error,
          }),
          ...children.props,
          ...props,
        })

        return input
      }

      return children
    }
    return (
      <div ref={ref} className={classNames(className, { 'sl-form-e': error })}>
        <Label htmlFor={id} area-label={a11yLabel}>
          {label}
        </Label>
        {renderInput()}
        {error && <InfoOutlined className="sl-form-i" />}
        <Tooltip className="sl-form-t">{error}</Tooltip>
      </div>
    )
  }
)

const Label = styled.label`
  margin-bottom: 0.8125rem;
`

export const FormField = styled(Component)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  .sl-form-e {
    border-color: var(--color-danger);
  }
  .sl-form-t {
    display: none;
  }
  .sl-form-i {
    position: absolute;
    right: 0.8rem;
    top: 48%;
    cursor: pointer;
  }
  .sl-form-i:hover ~ .sl-form-t {
    display: block;
  }
`
