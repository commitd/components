import { RecipeVariantProps, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { ConditionalWrapper } from '../../utils'
import { UseFormControlProps, useFormControl } from '../FormControl'
import { Label, LabelOptional } from '../Label'
import { inputStyles, readonlyStyles } from './inputStyles'
export { inputStyles, readonlyStyles }

const DEFAULT_TAG = 'input'

const input = cva(inputStyles)

const StyledInput = styled(DEFAULT_TAG, input)

type InputVariants = Omit<RecipeVariantProps<typeof input>, 'state'>

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
  }

export const Input = forwardRef<ElementRef<typeof DEFAULT_TAG>, InputProps>(
  ({ label, onValueChange, className, ...props }, forwardedRef) => {
    const [id, { state, disabled, required }, remainingProps] =
      useFormControl(props)
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
          className={cx('c-input', className)}
          state={state}
          disabled={disabled}
          required={required}
          ref={forwardedRef}
        />
      </ConditionalWrapper>
    )
  }
)
Input.displayName = 'Input'
