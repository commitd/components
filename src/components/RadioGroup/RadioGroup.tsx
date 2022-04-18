import { Indicator, Item, Root } from '@radix-ui/react-radio-group'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { CSSProps, styled, VariantProps } from '../../stitches.config'
import { ConditionalWrapper } from '../../utils'
import {
  DEFAULT_FORM_STATE,
  useFormControl,
  UseFormControlProps,
  usePossibleFormControlState as useFormControlState,
} from '../FormControl'
import { Check } from '../Icons'
import { defaultStyles } from '../Input'
import { checkStyles } from '../Input/inputStyles'
import { Label, LabelOptional } from '../Label'

const StyledItem = styled(Item, defaultStyles, checkStyles, {
  borderRadius: '$round',
  width: '28px',
  height: '28px',
  alignItems: 'center',
})

const StyledIndicator = styled(Indicator, {
  display: 'flex',
  height: '24px',
  width: '24px',
  alignItems: 'center',
  justifyContent: 'center',
})

type RadioProps = ComponentProps<typeof StyledItem> & {
  /** Add a label */
  label?: string
}

export const Radio = forwardRef<ElementRef<typeof StyledItem>, RadioProps>(
  ({ disabled: disabledProp, label, ...props }, forwardedRef) => {
    const { state, disabled } = useFormControlState() ?? DEFAULT_FORM_STATE
    return (
      <ConditionalWrapper
        condition={label}
        wrapper={(child) => (
          <Label disabled={disabled || disabledProp} variant="wrapping">
            {child}
            {label}
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
  }
)
Radio.displayName = 'Radio'
Radio.toString = () => `.${StyledItem.className}`

export const StyledRoot = styled(Root, {
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
    ':first-child,& button:first-of-type': { marginTop: 0 },
  },
  '&[data-orientation=horizontal]': {
    gap: '$2',
    '& > *': { marginLeft: '$3', alignItems: 'center' },
    ':first-child,& button:first-of-type': { marginLeft: 0 },
  },
})

type RadioGroupVariants = Omit<VariantProps<typeof StyledRoot>, 'state'>
type RadioGroupProps = ComponentProps<typeof StyledRoot> &
  UseFormControlProps &
  CSSProps &
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
export const RadioGroup = forwardRef<ElementRef<typeof Root>, RadioGroupProps>(
  ({ label, ...props }, forwardedRef) => {
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
          required={required}
          {...remainingProps}
          ref={forwardedRef}
        />
      </ConditionalWrapper>
    )
  }
)
RadioGroup.toString = () => `.${StyledRoot.className}`
