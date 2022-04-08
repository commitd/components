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
import {
  checkboxItemStyles,
  contentStyles,
  groupStyles,
  itemIndicatorStyles,
  itemShortcutStyles,
  itemStyles,
  labelStyles,
  separatorStyles,
  StyledCheckIndicator,
  StyledTriggerItemIndicator,
  triggerItemStyles,
} from '../../utils/menuStyles'
import { paperStyles } from '../Paper'

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

export const MenuItem = styled(Item, itemStyles)
export const MenuItemShortcut = styled('span', itemShortcutStyles)
export const MenuSeparator = styled(Separator, separatorStyles)
export const MenuLabel = styled(Label, labelStyles)
export const MenuItemGroup = styled(Group, groupStyles(MenuItem))
export const MenuRadioGroup = RadioGroup

const StyledContent = styled(Content, paperStyles, contentStyles)
const StyledItemIndicator = styled(ItemIndicator, itemIndicatorStyles)
const StyledCheckboxItem = styled(CheckboxItem, itemStyles, checkboxItemStyles)
const StyledRadioItem = styled(RadioItem, itemStyles, checkboxItemStyles)
const StyledTriggerItem = styled(TriggerItem, itemStyles, triggerItemStyles)

type MenuTriggerItemProps = ComponentProps<typeof TriggerItem> & CSSProps

export const MenuTriggerItem = forwardRef<
  ElementRef<typeof StyledTriggerItem>,
  MenuTriggerItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledTriggerItem {...props} ref={forwardedRef}>
      {children}
      <StyledTriggerItemIndicator />
    </StyledTriggerItem>
  )
})
MenuTriggerItem.toString = () => `.${StyledTriggerItem.className}`

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

type MenuTriggerProps = Omit<ComponentProps<typeof Trigger>, 'asChild'>

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
    <StyledCheckIndicator />
  </StyledItemIndicator>
))
StyledCheckboxIndicator.toString = () => `.${StyledItemIndicator.className}`

type MenuCheckboxItemProps = ComponentProps<typeof StyledCheckboxItem>

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

type MenuRadioItemProps = ComponentProps<typeof StyledRadioItem>

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
