import { useLabelContext } from '@radix-ui/react-label'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { inputStyles } from '../Input/Input'
import { Label } from '../Label'

const DEFAULT_TAG = 'textarea'

const StyledTextArea = styled(DEFAULT_TAG, inputStyles, {
  padding: '$2',
  height: '$8',
})

type TextAreaVariants = VariantProps<typeof StyledTextArea>
type TextAreaProps = ComponentProps<typeof DEFAULT_TAG> &
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
>(({ label, id, onValueChange, ...props }, forwardedRef) => {
  const labelId = useLabelContext()
  return (
    <>
      {label && (
        <Label variant="above" htmlFor={id || labelId}>
          {label}
        </Label>
      )}
      <StyledTextArea
        aria-labelledby={labelId}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onValueChange && onValueChange(e.target.value)
        }
        {...props}
        id={id || label}
        ref={forwardedRef}
      />
    </>
  )
})
TextArea.toString = () => `.${StyledTextArea.className}`
