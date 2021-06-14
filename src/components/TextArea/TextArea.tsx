import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import { CSS, StitchesVariants, styled } from 'stitches.config'
import { Label } from '../Label'
import { useLabelContext } from '@radix-ui/react-label'
import { inputStyles } from '../Input/Input'

const DEFAULT_TAG = 'textarea'

const StyledTextArea = styled(DEFAULT_TAG, {
  ...inputStyles,
  padding: '$2',
  height: '$8',
})

type TextAreaCSSProp = { css?: CSS }
type TextAreaVariants = StitchesVariants<typeof StyledTextArea>
type TextAreaOwnProps = TextAreaCSSProp &
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

type TextAreaComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  TextAreaOwnProps
>

export const TextArea = forwardRef(
  ({ label, id, onValueChange, ...props }, forwardedRef) => {
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
          onChange={(e) => onValueChange && onValueChange(e.target.value)}
          {...props}
          id={id || label}
          ref={forwardedRef}
        />
      </>
    )
  }
) as TextAreaComponent
TextArea.toString = () => `.${StyledTextArea.className}`
