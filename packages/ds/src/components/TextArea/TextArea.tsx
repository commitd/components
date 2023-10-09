'use client'
import { RecipeVariantProps, cva, cx, styled } from '@committed/ss'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { Prettify } from '../../utils'
import { UseFormControlProps, useFormControl } from '../FormControl'
import { inputStyles } from '../Input/Input'
import { Label, LabelOptional } from '../Label'

const DEFAULT_TAG = 'textarea'
const TEXTAREA_CLASS = 'c-textarea'

const textarea = cva({
  base: {
    ...inputStyles.base,
    padding: '$2',
    height: '$8',
  },
  variants: {
    ...inputStyles.variants,
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
})

const StyledTextArea = styled(DEFAULT_TAG, textarea)

type AllTextAreaVariants = RecipeVariantProps<typeof textarea>
// NB using Omit here stops the type being correctly picked up by the component
type TextAreaVariants = AllTextAreaVariants // Omit<AllTextAreaVariants, 'state'>

type TextAreaProps = Prettify<
  ComponentProps<typeof DEFAULT_TAG> &
    UseFormControlProps &
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
>

export const TextArea = forwardRef<
  ElementRef<typeof DEFAULT_TAG>,
  TextAreaProps
>(({ className, label, onValueChange, ...props }, forwardedRef) => {
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
        className={cx(TEXTAREA_CLASS, className)}
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
TextArea.displayName = 'TextArea'
