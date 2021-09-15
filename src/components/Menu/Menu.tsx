import {
  CheckboxItem,
  Content,
  Group,
  Item,
  ItemIndicator,
  Label,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Trigger,
  TriggerItem,
} from '@radix-ui/react-dropdown-menu'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { CSSProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { Check, ChevronRight } from '../Icons'
import { paperStyles } from '../Paper'

const itemStyles = {
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  fontSize: '$0',
  padding: '$2 $3',
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

  '&:focus': {
    background: '$selection',
    cursor: 'pointer',
  },
  '&[data-disabled]': {
    color: '$grey9',
  },
}

const StyledContent = styled(Content, paperStyles, {
  minWidth: 130,
  padding: '$1',
  boxShadow: '$2',
})

const StyledItemIndicator = styled(ItemIndicator, {
  position: 'absolute',
  left: '$2',
})

const checkboxItemStyles = {
  ...itemStyles,
  paddingLeft: '$6',
}

const StyledCheckboxItem = styled(CheckboxItem, checkboxItemStyles)
const StyledRadioItem = styled(RadioItem, checkboxItemStyles)

export const MenuItem = styled(Item, itemStyles)

const StyledMenuTriggerItem = styled(TriggerItem, {
  ...itemStyles,
  '&[data-state="open"]': {
    background: '$selection',
  },
})

type MenuTriggerItemProps = ComponentProps<typeof TriggerItem> & CSSProps

export const MenuTriggerItem = forwardRef<
  ElementRef<typeof StyledMenuTriggerItem>,
  MenuTriggerItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledMenuTriggerItem {...props} ref={forwardedRef}>
      {children}
      <ChevronRight css={{ size: '$4' }} />
    </StyledMenuTriggerItem>
  )
})
MenuTriggerItem.toString = () => `.${StyledMenuTriggerItem.className}`

type MenuContentProps = ComponentProps<typeof Content> & CSSProps

export const MenuContent = forwardRef<
  ElementRef<typeof StyledContent>,
  MenuContentProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContent alignOffset={8} {...props} ref={forwardedRef}>
    {children}
  </StyledContent>
))
MenuContent.toString = () => `.${StyledContent.className}`

type MenuTriggerProps = ComponentProps<typeof Trigger>

const MENU_TRIGGER_CLASS_NAME = 'c-menu-trigger'

export const MenuTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  MenuTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <Trigger
    className={MENU_TRIGGER_CLASS_NAME}
    asChild
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Trigger>
))
MenuTrigger.toString = () => `.${MENU_TRIGGER_CLASS_NAME}`

const StyledCheckboxIndicator = forwardRef<
  ElementRef<typeof StyledItemIndicator>,
  ComponentProps<typeof StyledItemIndicator>
>((props, forwardedRef) => (
  <StyledItemIndicator {...props} ref={forwardedRef}>
    <Check css={{ size: '$4' }} />
  </StyledItemIndicator>
))
StyledCheckboxIndicator.toString = () => `.${StyledItemIndicator.className}`

type MenuCheckboxItemProps = ComponentProps<typeof CheckboxItem>

export const MenuCheckboxItem = forwardRef<
  ElementRef<typeof StyledCheckboxItem>,
  MenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledCheckboxItem {...props} ref={forwardedRef}>
    <StyledCheckboxIndicator />
    {children}
  </StyledCheckboxItem>
))
MenuCheckboxItem.toString = () => `.${StyledCheckboxItem.className}`

// @deprecated
export { MenuCheckboxItem as MenuItemCheckbox }

export const MenuSeparator = styled(Separator, {
  height: 1,
  backgroundColor: '$grey7',

  variants: {
    orientation: {
      horizontal: {
        height: 1,
        margin: '$1 0',
      },
      vertical: {
        width: 1,
        height: 'auto',
        margin: '0 $1',
        flex: '1 1 100%',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export const MenuLabel = styled(Label, {
  color: '$grey10',
  fontSize: '$-1',
  padding: '$2 $3',
  paddingBottom: '$1',
  cursor: 'default',
})

export const MenuItemGroup = styled(Group, {
  display: 'flex',
  marginLeft: '$3',
  marginRight: '$1',

  [`& ${MenuItem}`]: {
    paddingLeft: '$2',
  },
})

export const MenuRadioGroup = RadioGroup

type MenuRadioItemProps = ComponentProps<typeof RadioItem>

export const MenuRadioItem = forwardRef<
  ElementRef<typeof StyledRadioItem>,
  MenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledRadioItem {...props} ref={forwardedRef}>
    <StyledCheckboxIndicator />
    {children}
  </StyledRadioItem>
))
MenuRadioItem.toString = () => `.${StyledRadioItem.className}`

export const MenuItemShortcut = styled('span', {
  fontFamily: '$monospace',
  lineHeight: '$body',
  color: '$textSecondary',
  marginLeft: '$3',
})

/**
 * Menu component
 *
 * Displays a menu to the user - usually triggered by clicking a button.
 *
 * Its appearance is controlled with the `open` and `onOpenChange` props or by providing a `MenuTrigger`.
 * The content should be wrapped in a `MenuContent` and should be made up of the other `MenuXxxx` components.
 *
 * Based on [Radix Dropdown Menu](https://radix-ui.com/primitives/docs/components/dropdown-menu).
 */
export const Menu = Root
