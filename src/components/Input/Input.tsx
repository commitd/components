import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { ConditionalWrapper } from '../../utils'
import { useFormControl, UseFormControlProps } from '../FormControl'
import { Label, LabelOptional } from '../Label'
import { defaultStyles, inputStyles, readonlyStyles } from './inputStyles'
export { inputStyles, defaultStyles, readonlyStyles }

const DEFAULT_TAG = 'input'

const StyledInput = styled(
  DEFAULT_TAG,
  defaultStyles,
  readonlyStyles,
  inputStyles
)

type InputVariants = Omit<VariantProps<typeof StyledInput>, 'state'>

// Required due to ts error forcing the enterKeyHint props. Likely can be removed in later version.
type StyledInputProps = Omit<ComponentProps<typeof StyledInput>, 'enterKeyHint'>

type InputProps = StyledInputProps &
  UseFormControlProps &
  InputVariants & {
    /** Add a label to the Input */
    label?: string
    /** Add the required props to mark input as required.*/
    required?: boolean
    /** Called on input change with new value */
    onValueChange?: (value: string) => void
    /* Added directly to correct ts error */
    enterKeyHint?:
      | 'enter'
      | 'done'
      | 'go'
      | 'next'
      | 'previous'
      | 'search'
      | 'send'
      | undefined
  } & CSSProps

export const Input = forwardRef<ElementRef<typeof DEFAULT_TAG>, InputProps>(
  ({ label, onValueChange, ...props }, forwardedRef) => {
    const [id, { state, disabled, required }, remainingProps] = useFormControl(
      props
    )
    return (
      <ConditionalWrapper
        condition={label}
        wrapper={(children) => (
          // htmlFor required here for auto linking as not a radix primitive
          <Label id={`label-${id}`} variant="wrapping" htmlFor={id}>
            <span>
              {label}
              {required === false && <LabelOptional />}
            </span>
            {children}
          </Label>
        )}
      >
        <StyledInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onValueChange && onValueChange(e.target.value)
          }
          {...remainingProps}
          id={id}
          state={state}
          disabled={disabled}
          required={required}
          ref={forwardedRef}
        />
      </ConditionalWrapper>
    )
  }
)
Input.toString = () => `.${StyledInput.className}`
