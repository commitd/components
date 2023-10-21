'use client'
import { RecipeVariantProps, css, cva, cx, styled } from '@committed/ds-ss'
import { Indicator, Item, Root } from '@radix-ui/react-radio-group'
import React, { ComponentProps, ElementRef, ReactNode, forwardRef } from 'react'
import { ConditionalWrapper, component, forwardRefExtend } from '../../utils'
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

const StyledItem = styled(component(Item, 'c-radio'), item)

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

type RadioProps = RecipeVariantProps<typeof item> & {
  /** Add a label */
  label?: string
}

type RadioItemLabelProps = {
  disabled?: boolean
  label?: ReactNode
  children?: ReactNode
}

const RadioItemLabel = ({ disabled, label, children }: RadioItemLabelProps) => (
  <Label disabled={disabled} variant="wrapping">
    {children}
    {label}
  </Label>
)
RadioItemLabel.displayName = 'RadioItemLabel'

export const Radio = forwardRefExtend<typeof Item, RadioProps>(
  ({ disabled: disabledProp, label, children, ...props }, forwardedRef) => {
    const { state, disabled } = useFormControlState() ?? DEFAULT_FORM_STATE

    return (
      <ConditionalWrapper
        condition={
          label ??
          (React.Children.count(children) === 1 && typeof children === 'string')
        }
        props={{
          label: label ?? children,
          disabled: disabled || disabledProp,
        }}
        wrapper={RadioItemLabel}
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

type RadioGroupLabelProps = {
  id: string
  label?: string
  required?: boolean
  children: React.ReactNode
}

const RadioGroupLabel = ({
  id,
  label,
  required,
  children,
}: RadioGroupLabelProps) => (
  <Label id={`label-${id}`} variant="wrapping">
    <span>
      {label} {required === false && <LabelOptional />}
    </span>
    {children}
  </Label>
)
RadioGroupLabel.displayName = 'RadioGroupLabel'

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
>(({ className, children, ...props }, forwardedRef) => {
  const [id, { required }, remainingProps] = useFormControl(props)
  return (
    <ConditionalWrapper
      condition={props.label}
      props={{ ...props, id }}
      wrapper={RadioGroupLabel}
    >
      <StyledRoot
        id={id}
        className={cx('c-radio-group', className)}
        required={required}
        {...remainingProps}
        ref={forwardedRef}
      >
        {children}
      </StyledRoot>
    </ConditionalWrapper>
  )
})
RadioGroup.displayName = 'RadioGroup'