import { Indicator, Root } from '@radix-ui/react-checkbox'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { ConditionalWrapper } from '../../utils'
import { useFormControl, UseFormControlProps } from '../FormControl'
import { Check, CheckIndeterminate } from '../Icons'
import { checkStyles, defaultStyles } from '../Input/inputStyles'
import { Label, LabelOptional } from '../Label'
export type { CheckedState } from '@radix-ui/react-checkbox'

const StyledRoot = styled(Root, defaultStyles, checkStyles, {
  width: '28px',
  height: '28px',
})

const StyledIndicator = styled(Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
})

type CheckboxVariants = Omit<VariantProps<typeof StyledRoot>, 'state'>
type CheckboxRootProps = ComponentProps<typeof Root>
type CheckboxProps = Omit<CheckboxRootProps, 'onCheckedChange'> &
  UseFormControlProps &
  CheckboxVariants &
  CSSProps & {
    /** Add a label to the checkbox */
    label?: string

    onCheckedChange?:
      | CheckboxRootProps['onCheckedChange']
      | ((checked: boolean) => void)
  }

/**
 * Checkboxes can be used as toggle actions or as part of input forms.
 * Use when single select/deselect option, use radio when one option of more then two choices; [further info](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/).
 *
 * This checkbox supports the additional `indeterminate` checked state.
 *
 * Based on [Radix Checkbox](https://radix-ui.com/primitives/docs/components/checkbox).
 */
export const Checkbox = forwardRef<
  ElementRef<typeof StyledRoot>,
  CheckboxProps
>(({ label, ...props }, forwardedRef) => {
  const [id, { state, disabled, required }, remainingProps] =
    useFormControl(props)
  return (
    <ConditionalWrapper
      condition={label}
      wrapper={(children) => (
        <Label id={`label-${id}`} variant="inline">
          {children}
          {label}
          {required === false && <LabelOptional />}
        </Label>
      )}
    >
      <StyledRoot
        id={id}
        state={state}
        disabled={disabled}
        required={required}
        {...remainingProps}
        ref={forwardedRef}
      >
        <StyledIndicator>
          {props.checked === 'indeterminate' && <CheckIndeterminate />}
          {props.checked !== 'indeterminate' && <Check />}
        </StyledIndicator>
      </StyledRoot>
    </ConditionalWrapper>
  )
})
Checkbox.toString = () => `.${StyledRoot.className}`
