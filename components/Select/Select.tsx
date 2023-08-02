import {
    Content,
    Group,
    Icon,
    Item,
    ItemIndicator,
    ItemText,
    Portal,
    Root,
    ScrollDownButton,
    ScrollUpButton,
    Separator,
    Trigger,
    Value,
    Viewport,
} from '@radix-ui/react-select'
import { ComponentProps, ElementRef, forwardRef } from 'react'

import { css } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { ConditionalWrapper, withClasses } from '../../utils'
import { UseFormControlProps, useFormControl } from '../FormControl'
import { Check, ChevronDown, ChevronUp } from '../Icons'
import { inputStyles } from '../Input'
import { Label, LabelOptional } from '../Label'
import { paperStyles } from '../Paper'

const StyledTrigger = withClasses(
  styled(Trigger, inputStyles),
  css({
    _readOnly: {},
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    alignContent: 'center',
    '&[data-placeholder] span:first-child': { color: '$grey8' },
  })
)

const StyledValue = withClasses(
  Value,
  css({
    flexGrow: 1,
  })
)

const StyledContent = withClasses(
  Content,
  paperStyles,
  css({
    overflow: 'hidden',
    boxShadow: '$2',
    _before: {
      boxShadow: 'none',
    },
  })
)

const StyledViewport = withClasses(
  Viewport,
  css({
    padding: '$5',
  })
)

const StyledItem = withClasses(
  Item,
  css({
    all: 'unset',
    fontSize: 0,
    padding: '$2 $3 $2 $6',
    cursor: 'default',
    borderRadius: '$default',
    backgroundColor: 'transparent',
    border: 'none',
    color: '$text',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    userSelect: 'none',

    _motionReduce: { transition: 'none' },
    _motionSafe: {
      transition: 'all 50ms',
    },

    _focus: {
      background: '$selection',
      cursor: 'pointer',
    },
    '&[data-disabled]': {
      color: '$grey9',
      pointerEvents: 'none',
    },
  })
)

const StyledLabel = withClasses(
  Label,
  css({
    padding: '$0 $2',
    fontSize: 0,
    lineHeight: '$2',
    color: '$grey10',
  })
)

const StyledSeparator = withClasses(
  Separator,
  css({
    height: 1,
    backgroundColor: '$grey7',
    margin: '$1',
  })
)

const StyledItemIndicator = withClasses(
  ItemIndicator,
  css({
    position: 'absolute',
    left: '$2',
    width: '$4',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  })
)

const scrollButtonStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '$5',
  color: '$grey7',
  cursor: 'default',
})

const StyledScrollUpButton = withClasses(ScrollUpButton, scrollButtonStyles)

const StyledScrollDownButton = withClasses(ScrollDownButton, scrollButtonStyles)

type SelectContentProps = ComponentProps<typeof StyledContent> & {
  /** By default, portals your content parts into the body, set false to add at dom location. */
  portalled?: boolean
  /** Specify a container element to portal the content into. */
  container?: ComponentProps<typeof Portal>['container']
}

export const SelectContent = forwardRef<
  ElementRef<typeof StyledContent>,
  SelectContentProps
>(({ container, portalled = true, children, ...props }, forwardedRef) => (
  <ConditionalWrapper
    condition={portalled}
    wrapper={(child) => <Portal container={container}>{child}</Portal>}
  >
    <StyledContent {...props} ref={forwardedRef}>
      {children}
    </StyledContent>
  </ConditionalWrapper>
))
SelectContent.displayName = 'SelectContent'

type SelectProps = ComponentProps<typeof Root> &
  UseFormControlProps & {
    /** Add a label to the select */
    label?: string
    /** By default, portals your content parts into the body, set false to add at dom location. */
    portalled?: boolean
    /** Specify a placeholder if no value of defaultValue supplied. */
    placeholder?: ComponentProps<typeof Value>['placeholder']
    /** Specify a container element to portal the content into. */
    container?: ComponentProps<typeof Portal>['container']
  }

/**
 * Select component
 *
 * Displays a dropdown list of options to the user - usually triggered by clicking a button.
 *
 *
 * Based on [Radix Select](https://www.radix-ui.com/docs/primitives/components/select).
 */
export const Select = forwardRef<ElementRef<typeof Root>, SelectProps>(
  (
    { label, container, portalled = true, placeholder, children, ...props },
    forwardedRef
  ) => {
    const [id, { state, disabled, required }, remainingProps] =
      useFormControl(props)
    return (
      <ConditionalWrapper
        condition={label}
        wrapper={(child) => (
          <Label variant="wrapping">
            <span>
              {label}
              {required === false && <LabelOptional />}
            </span>
            {child}
          </Label>
        )}
      >
        <Root {...remainingProps}>
          <StyledTrigger
            id={id}
            disabled={disabled}
            state={state}
            ref={forwardedRef}
          >
            <StyledValue placeholder={placeholder} />
            <Icon>
              <ChevronDown />
            </Icon>
          </StyledTrigger>
          <SelectContent portalled={portalled} container={container}>
            <StyledScrollUpButton>
              <ChevronUp />
            </StyledScrollUpButton>
            <StyledViewport>{children}</StyledViewport>
            <StyledScrollDownButton>
              <ChevronDown />
            </StyledScrollDownButton>
          </SelectContent>
        </Root>
      </ConditionalWrapper>
    )
  }
)
Select.displayName = 'Select'

type SelectItemProps = ComponentProps<typeof Item>

export const SelectItem = forwardRef<
  ElementRef<typeof StyledItem>,
  SelectItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledItem {...props} ref={forwardedRef}>
      <StyledItemIndicator>
        <Check />
      </StyledItemIndicator>
      <ItemText>{children}</ItemText>
    </StyledItem>
  )
})
SelectItem.displayName = 'SelectItem'

export const SelectTrigger = StyledTrigger
export const SelectValue = StyledValue
export const SelectIcon = Icon
export const SelectViewport = StyledViewport
export const SelectGroup = Group
export const SelectItemText = ItemText
export const SelectItemIndicator = StyledItemIndicator
export const SelectLabel = StyledLabel
export const SelectSeparator = StyledSeparator
export const SelectScrollUpButton = StyledScrollUpButton
export const SelectScrollDownButton = StyledScrollDownButton

// Included as exports to allow non-abstracted access to a Styled Radix-based Select
export const SelectRoot = Root
export const SelectRootItem = StyledItem

SelectTrigger.displayName = 'SelectTrigger'
SelectValue.displayName = 'SelectValue'
SelectIcon.displayName = 'SelectIcon'
SelectViewport.displayName = 'SelectViewport'
SelectGroup.displayName = 'SelectGroup'
SelectItemText.displayName = 'SelectItemText'
SelectItemIndicator.displayName = 'SelectItemIndicator'
SelectLabel.displayName = 'SelectLabel'
SelectSeparator.displayName = 'SelectSeparator'
SelectScrollUpButton.displayName = 'SelectScrollUpButton'
SelectScrollDownButton.displayName = 'SelectScrollDownButton'
SelectRoot.displayName = 'SelectRoot'
SelectRootItem.displayName = 'SelectRootItem'
