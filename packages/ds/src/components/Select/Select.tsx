'use client'
import { css, styled } from '@committed/ss'
import { SurfaceVariants } from '@committed/utilities'
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
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import {
  CComponentProps,
  ConditionalWrapper,
  component,
  forwardRefExtend,
} from '../../utils'
import { UseFormControlProps, useFormControl } from '../FormControl'
import { Check, ChevronDown, ChevronUp } from '../Icons'
import { inputStyles } from '../Input/Input'
import { Label, LabelOptional } from '../Label'
import { paperStyles } from '../Paper/Paper'

const StyledTrigger = component(
  styled(Trigger, inputStyles),
  'c-select-trigger',
  css({
    _readOnly: {},
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    alignContent: 'center',
    '&[data-placeholder] span:first-child': { color: '$neutral.8' },
  }),
)

const StyledValue = component(
  Value,
  'c-select-value',
  css({
    flexGrow: 1,
  }),
)

const StyledContent = styled(
  component(
    Content,
    'c-select-content',
    paperStyles,
    css({
      overflow: 'hidden',
      boxShadow: '$2',
      _before: {
        boxShadow: 'none',
      },
    }),
  ),
)

const StyledViewport = component(
  Viewport,
  'c-select-viewport',
  css({
    padding: '$2',
  }),
)

const StyledItem = component(
  Item,
  'c-select-item',
  css({
    py: '$2',
    pr: '$3',
    pl: '$6',
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
      color: '$neutral.9',
      pointerEvents: 'none',
    },
  }),
)

const StyledLabel = component(
  Label,
  'c-select-label',
  css({
    py: '$0',
    px: '$2',
    fontSize: 0,
    lineHeight: 2,
    color: '$neutral.10',
  }),
)

const StyledSeparator = component(
  Separator,
  'c-select-separator',
  css({
    height: 1,
    backgroundColor: '$neutral.7',
    margin: '$1',
  }),
)

const StyledItemIndicator = component(
  ItemIndicator,
  'c-select-item-indicator',
  css({
    position: 'absolute',
    left: '$2',
    width: '$4',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
)

const scrollButtonStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '$5',
  color: '$neutral.7',
  cursor: 'default',
})

const StyledScrollUpButton = component(
  ScrollUpButton,
  'c-select-scroll-up',
  scrollButtonStyles,
)

const StyledScrollDownButton = component(
  ScrollDownButton,
  'c-select-scroll-down',
  scrollButtonStyles,
)

type SelectContentProps = CComponentProps &
  SurfaceVariants & {
    /** By default, portals your content parts into the body, set false to add at dom location. */
    portalled?: boolean
    /** Specify a container element to portal the content into. */
    container?: ComponentProps<typeof Portal>['container']
  }

export const SelectContent = forwardRefExtend<
  typeof Content,
  SelectContentProps
>(({ container, portalled = true, children, ...props }, forwardedRef) => (
  <ConditionalWrapper
    condition={portalled}
    props={{ container }}
    wrapper={Portal}
  >
    <StyledContent {...props} ref={forwardedRef}>
      {children}
    </StyledContent>
  </ConditionalWrapper>
))
SelectContent.displayName = 'SelectContent'

type SelectLabelProps = {
  label?: string
  required?: boolean
  children?: React.ReactNode
}

const InternalSelectLabel = ({
  label,
  required,
  children,
}: SelectLabelProps) => (
  <Label variant="wrapping">
    <span>
      {label}
      {required === false && <LabelOptional />}
    </span>
    {children}
  </Label>
)
InternalSelectLabel.displayName = 'InternalSelectLabel'

type SelectProps = UseFormControlProps & {
  /** may not currently be used */
  id?: string
  /** Add a label to the select */
  label?: string
  /** By default, portals your content parts into the body, set false to add at dom location. */
  portalled?: boolean
  /** Specify a placeholder if no value of defaultValue supplied. */
  placeholder?: ComponentProps<typeof Value>['placeholder']
  /** Specify a container element to portal the content into. */
  container?: ComponentProps<typeof Portal>['container']
} & SurfaceVariants

const StyledRoot = component(Root, 'c-select')
/**
 * Select component
 *
 * Displays a dropdown list of options to the user - usually triggered by clicking a button.
 *
 *
 * Based on [Radix Select](https://www.radix-ui.com/docs/primitives/components/select).
 */
export const Select = forwardRefExtend<typeof StyledRoot, SelectProps>(
  (
    {
      label,
      container,
      portalled = true,
      placeholder,
      children,
      surface = 'solid',
      ...props
    },
    forwardedRef,
  ) => {
    const [id, { state, disabled, required }, remainingProps] =
      useFormControl(props)
    return (
      <ConditionalWrapper
        condition={label}
        props={{ label, required }}
        wrapper={InternalSelectLabel}
      >
        <StyledRoot {...remainingProps}>
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
          <SelectContent
            surface={surface}
            portalled={portalled}
            container={container}
          >
            <StyledScrollUpButton>
              <ChevronUp />
            </StyledScrollUpButton>
            <StyledViewport>{children}</StyledViewport>
            <StyledScrollDownButton>
              <ChevronDown />
            </StyledScrollDownButton>
          </SelectContent>
        </StyledRoot>
      </ConditionalWrapper>
    )
  },
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
export const SelectRoot = StyledRoot
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
