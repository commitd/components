import { RecipeVariantProps, css, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { Indicator, Root } from '@radix-ui/react-checkbox'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { ConditionalWrapper, Prettify, withClasses } from '../../utils'
import { UseFormControlProps, useFormControl } from '../FormControl'
import { Check, CheckIndeterminate } from '../Icons'
import { checkStyleVariants, checkStylesBase } from '../Input/inputStyles'
import { Label, LabelOptional } from '../Label'
export type { CheckedState } from '@radix-ui/react-checkbox'

const checkbox = cva({
  base: checkStylesBase,
  variants: checkStyleVariants,
  defaultVariants: {
    variant: 'secondary',
  },
})

const StyledRoot = styled(Root, checkbox)

const StyledIndicator = withClasses(
  Indicator,
  css({
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  })
)

type CheckboxVariants = RecipeVariantProps<typeof checkbox>
type CheckboxRootProps = ComponentProps<typeof Root>
type CheckboxProps = Prettify<
  Omit<CheckboxRootProps, 'onCheckedChange'> &
    UseFormControlProps &
    Omit<CheckboxVariants, 'state'> & {
      /** Add a label to the checkbox */
      label?: string

      onCheckedChange?:
        | CheckboxRootProps['onCheckedChange']
        | ((checked: boolean) => void)
    }
>
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
>(({ label, className, ...props }, forwardedRef) => {
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
        className={cx('c-checkbox', className)}
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
Checkbox.displayName = 'Checkbox'
