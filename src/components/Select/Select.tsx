import { useLabelContext } from '@radix-ui/react-label'
import {
  Root,
  Trigger,
  Value,
  Icon,
  Content,
  ScrollUpButton,
  Viewport,
  Item,
  ItemText,
  ItemIndicator,
  Group,
  Separator,
  ScrollDownButton
} from '@radix-ui/react-select'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { CSSProps, styled } from '../../stitches.config'
import { ChevronDown, ChevronUp, Check } from '../Icons'
import { inputStyles } from '../Input/Input'
import { Label } from '../Label'

const StyledTrigger = styled(Trigger, inputStyles, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  alignContent: 'center'
})

const StyledValue = styled(Value, {
  flexGrow: 1
})

const StyledContent = styled(Content, {
  overflow: 'hidden',
  backgroundColor: '$colors$brandBackground',
  borderRadius: '$default',
  boxShadow: '$2'
})

const StyledViewport = styled(Viewport, {
  padding: 5
})

const StyledItem = styled(Item, {
  all: 'unset',
  fontSize: '$0',
  padding: '$2 $3 $2 $6',
  cursor: 'default',
  borderRadius: '$default',
  backgroundColor: 'transparent',
  border: 'none',
  color: '$text',
  outline: 'none',
  transition: 'all 50ms',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  userSelect: 'none',

  '&:focus': {
    background: '$selection',
    cursor: 'pointer'
  },
  '&[data-disabled]': {
    color: '$grey9',
    pointerEvents: 'none'
  }
})

const StyledLabel = styled(Label, {
  padding: '$0 $2',
  fontSize: '$0',
  lineHeight: '$2',
  color: '$grey10'
})

const StyledSeparator = styled(Separator, {
  height: 1,
  backgroundColor: '$grey7',
  margin: '$1'
})

const StyledItemIndicator = styled(ItemIndicator, {
  position: 'absolute',
  left: '$2',
  width: '$4',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '$5',
  color: '$grey7',
  cursor: 'default'
}

const StyledScrollUpButton = styled(ScrollUpButton, scrollButtonStyles)

const StyledScrollDownButton = styled(ScrollDownButton, scrollButtonStyles)

type SelectProps = ComponentProps<typeof Root> &
  CSSProps & {
    /** Add a label to the select */
    label?: string
    /** Add id to the select */
    id?: string
  }

export const Select = forwardRef<ElementRef<typeof Root>, SelectProps>(
  ({ label, id, children, ...props }, forwardedRef) => {
    const labelId = useLabelContext()
    return (
      <>
        {label && (
          <Label variant="above" htmlFor={id || labelId}>
            {label}
          </Label>
        )}
        <Root {...props}>
          <StyledTrigger
            aria-labelledby={labelId}
            id={id || label}
            ref={forwardedRef}
          >
            <StyledValue />
            <ChevronDown />
          </StyledTrigger>
          <StyledContent>
            <StyledScrollUpButton>
              <ChevronUp />
            </StyledScrollUpButton>
            <StyledViewport>{children}</StyledViewport>
            <StyledScrollDownButton>
              <ChevronDown />
            </StyledScrollDownButton>
          </StyledContent>
        </Root>
      </>
    )
  }
)

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

/**
 * Select component
 *
 * Displays a dropdown list of options to the user - usually triggered by clicking a button.
 *
 *
 * Based on [Radix Select](https://www.radix-ui.com/docs/primitives/components/select).
 */
export const SelectTrigger = StyledTrigger
export const SelectValue = StyledValue
export const SelectIcon = Icon
export const SelectContent = StyledContent
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
