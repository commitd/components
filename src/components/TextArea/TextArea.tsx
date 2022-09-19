import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { useFormControl, UseFormControlProps } from '../FormControl'
import { defaultStyles, inputStyles, readonlyStyles } from '../Input/Input'
import { Label, LabelOptional } from '../Label'

const DEFAULT_TAG = 'textarea'

const StyledTextArea = styled(
  DEFAULT_TAG,
  defaultStyles,
  readonlyStyles,
  inputStyles,
  {
    padding: '$2',
    height: '$8',

    variants: {
      resize: {
        none: {
          resize: 'none',
        },
        vertical: {
          resize: 'vertical',
        },
        horizontal: {
          resize: 'horizontal',
        },
      },
      constrain: {
        true: {
          maxWidth: '100%',
          maxHeight: '100%',
        },
      },
    },
  }
)

type TextAreaVariants = Omit<VariantProps<typeof StyledTextArea>, 'state'>
type TextAreaProps = ComponentProps<typeof DEFAULT_TAG> &
  UseFormControlProps &
  CSSProps &
  TextAreaVariants & {
    /** Add a label to the TextArea */
    label?: string
    // Should not be required but type is missing.
    /** Called on input change with full event */
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
    // Should not be required but type is missing.
    /** Called on input change with new value */
    onValueChange?: (value: string) => void
  }

export const TextArea = forwardRef<
  ElementRef<typeof DEFAULT_TAG>,
  TextAreaProps
>(({ label, onValueChange, ...props }, forwardedRef) => {
  const [id, { state, disabled, required }, remainingProps] =
    useFormControl(props)
  return (
    <>
      {label && (
        <Label id={`label-${id}`} variant="above" htmlFor={id}>
          {label} {required === false && <LabelOptional />}
        </Label>
      )}
      <StyledTextArea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onValueChange && onValueChange(e.target.value)
        }
        {...remainingProps}
        id={id}
        state={state}
        disabled={disabled}
        required={required}
        ref={forwardedRef}
      />
    </>
  )
})
TextArea.toString = () => `.${StyledTextArea.className}`
