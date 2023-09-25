'use client'
import { RecipeVariantProps, css, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { Indicator, Item, Root } from '@radix-ui/react-radio-group'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { ConditionalWrapper, component } from '../../utils'
import { checkStyleVariants, checkStylesBase } from '../Checkbox/Checkbox'
import {
  useFormControl,
  usePossibleFormControlState as useFormControlState,
} from '../FormControl'
import {
  DEFAULT_FORM_STATE,
  UseFormControlProps,
} from '../FormControl/FormControlContext'
import { Check } from '../Icons'
import { Label, LabelOptional } from '../Label'

const item = cva({
  base: {
    ...checkStylesBase,
    borderRadius: '$round',
    alignItems: 'center',
  },
  variants: checkStyleVariants,
  defaultVariants: {
    variant: 'outline',
  },
})

const StyledItem = styled(Item, item)

const StyledIndicator = component(
  Indicator,
  css({
    display: 'flex',
    height: '24px',
    width: '24px',
    alignItems: 'center',
    justifyContent: 'center',
  }),
)

type RadioProps = ComponentProps<typeof StyledItem> & {
  /** Add a label */
  label?: string
}

export const Radio = forwardRef<ElementRef<typeof StyledItem>, RadioProps>(
  ({ disabled: disabledProp, label, children, ...props }, forwardedRef) => {
    const { state, disabled } = useFormControlState() ?? DEFAULT_FORM_STATE

    return (
      <ConditionalWrapper
        condition={
          label ??
          (React.Children.count(children) === 1 && typeof children === 'string')
        }
        wrapper={(child) => (
          <Label disabled={disabled || disabledProp} variant="wrapping">
            {child}
            {label ?? children}
          </Label>
        )}
      >
        <StyledItem
          state={state}
          disabled={disabled || disabledProp}
          {...props}
          ref={forwardedRef}
        >
          <StyledIndicator>
            <Check />
          </StyledIndicator>
        </StyledItem>
      </ConditionalWrapper>
    )
  },
)
Radio.displayName = 'Radio'

export const StyledRoot = component(
  Root,
  css({
    display: 'flex',
    '&:not([data-orientation=horizontal])': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      '& > *': {
        marginTop: '$3',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '$1',
      },
      '&:first-child,& button:first-of-type': { marginTop: 0 },
    },
    '&[data-orientation=horizontal]': {
      gap: '$2',
      '& > *': { marginLeft: '$3', alignItems: 'center' },
      '&:first-child,& button:first-of-type': { marginLeft: 0 },
    },
  }),
)

type RadioGroupVariants = Omit<RecipeVariantProps<typeof item>, 'state'>
type RadioGroupProps = ComponentProps<typeof StyledRoot> &
  UseFormControlProps &
  RadioGroupVariants & {
    /** Add a label to the Input */
    label?: string
  }

/**
 * Radios can be used to choose between a set of more than two options.
 *
 * Use a checkbox or on/off switch when single select/deselect option,
 * use radio when one option of more then two choices; [further info](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/).
 * Radios should always be used with a `RadioGroup` to handle the state control and layout.
 *
 * Based on [Radix Radio Group](https://radix-ui.com/primitives/docs/components/radio-group).
 */
export const RadioGroup = forwardRef<
  ElementRef<typeof StyledRoot>,
  RadioGroupProps
>(({ label, className, ...props }, forwardedRef) => {
  const [id, { required }, remainingProps] = useFormControl(props)
  return (
    <ConditionalWrapper
      condition={label}
      wrapper={(children) => (
        <Label id={`label-${id}`} variant="wrapping">
          <span>
            {label} {required === false && <LabelOptional />}
          </span>
          {children}
        </Label>
      )}
    >
      <StyledRoot
        id={id}
        className={cx('c-radio-group', className)}
        required={required}
        {...remainingProps}
        ref={forwardedRef}
      />
    </ConditionalWrapper>
  )
})
RadioGroup.displayName = 'RadioGroup'
