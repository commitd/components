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
} from '@radix-ui/react-context-menu'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
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
 * ContextMenu component
 *
 * Displays a pop up menu when right clicking the `ContextMenuTrigger`.
 *
 * The content should be wrapped in a `ContextMenuContent` and should be made up of the other `ContextMenuXxxx` components.
 *
 * Based on [Radix Context Menu](https://radix-ui.com/primitives/docs/components/context-menu).
 */
export const ContextMenu = Root
export const ContextMenuTrigger = Trigger
export const ContextMenuItem = styled(Item, itemStyles)
export const ContextMenuItemShortcut = styled('span', itemShortcutStyles)
export const ContextMenuSeparator = styled(Separator, separatorStyles)
export const ContextMenuLabel = styled(Label, labelStyles)
export const ContextMenuItemGroup = styled(Group, groupStyles(ContextMenuItem))
export const ContextMenuRadioGroup = RadioGroup

export const ContextMenuContent = styled(Content, paperStyles, contentStyles)

const StyledItemIndicator = styled(ItemIndicator, itemIndicatorStyles)
const StyledCheckboxItem = styled(CheckboxItem, itemStyles, checkboxItemStyles)
const StyledRadioItem = styled(RadioItem, itemStyles, checkboxItemStyles)

const StyledContextMenuTriggerItem = styled(
  TriggerItem,
  itemStyles,
  triggerItemStyles
)

type ContextMenuTriggerItemProps = ComponentProps<
  typeof StyledContextMenuTriggerItem
>

export const ContextMenuTriggerItem = forwardRef<
  ElementRef<typeof StyledContextMenuTriggerItem>,
  ContextMenuTriggerItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledContextMenuTriggerItem {...props} ref={forwardedRef}>
      {children}
      <StyledTriggerItemIndicator />
    </StyledContextMenuTriggerItem>
  )
})
ContextMenuTriggerItem.toString = () =>
  `.${StyledContextMenuTriggerItem.className}`

type ContextMenuCheckboxItemProps = ComponentProps<typeof CheckboxItem> &
  CSSProps

export const ContextMenuCheckboxItem = forwardRef<
  ElementRef<typeof StyledCheckboxItem>,
  ContextMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledCheckboxItem {...props} ref={forwardedRef}>
      <StyledItemIndicator>
        <StyledCheckIndicator />
      </StyledItemIndicator>
      {children}
    </StyledCheckboxItem>
  )
})
ContextMenuCheckboxItem.toString = () => `.${StyledCheckboxItem.className}`

type RadioItemVariants = VariantProps<typeof StyledRadioItem>
type ContextMenuRadioItemProps = ComponentProps<typeof RadioItem> &
  RadioItemVariants &
  CSSProps

export const ContextMenuRadioItem = forwardRef<
  ElementRef<typeof StyledRadioItem>,
  ContextMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledRadioItem {...props} ref={forwardedRef}>
      <StyledItemIndicator>
        <StyledCheckIndicator />
      </StyledItemIndicator>
      {children}
    </StyledRadioItem>
  )
})
ContextMenuRadioItem.toString = () => `.${StyledRadioItem.className}`
