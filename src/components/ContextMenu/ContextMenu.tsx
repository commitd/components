import {
  CheckboxItem,
  Content,
  Group,
  Item,
  ItemIndicator,
  Label,
  Portal,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
} from '@radix-ui/react-context-menu'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { ConditionalWrapper } from '../../utils'
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

const StyledContent = styled(Content, paperStyles, contentStyles)

type ContextMenuContentProps = ComponentProps<typeof StyledContent> &
  CSSProps & {
    /** By default, portals your content parts into the body, set false to add at dom location. */
    portalled?: boolean
    /** Specify a container element to portal the content into. */
    container?: ComponentProps<typeof Portal>['container']
  }

export const ContextMenuContent = forwardRef<
  ElementRef<typeof StyledContent>,
  ContextMenuContentProps
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
ContextMenuContent.toString = () => `.${StyledContent.className}`

const StyledItemIndicator = styled(ItemIndicator, itemIndicatorStyles)
const StyledCheckboxItem = styled(CheckboxItem, itemStyles, checkboxItemStyles)
const StyledRadioItem = styled(RadioItem, itemStyles, checkboxItemStyles)

// Submenu
export const ContextMenuSub = Sub
const StyledSubContent = styled(SubContent, paperStyles, contentStyles)

type ContextMenuSubContentProps = ComponentProps<typeof StyledSubContent> &
  CSSProps & {
    /** By default, portals your content parts into the body, set false to add at dom location. */
    portalled?: boolean
    /** Specify a container element to portal the content into. */
    container?: ComponentProps<typeof Portal>['container']
  }

export const ContextMenuSubContent = forwardRef<
  ElementRef<typeof StyledSubContent>,
  ContextMenuSubContentProps
>(({ container, portalled = true, children, ...props }, forwardedRef) => (
  <ConditionalWrapper
    condition={portalled}
    wrapper={(child) => <Portal container={container}>{child}</Portal>}
  >
    <StyledSubContent {...props} ref={forwardedRef}>
      {children}
    </StyledSubContent>
  </ConditionalWrapper>
))
ContextMenuSubContent.toString = () => `.${StyledSubContent.className}`

const StyledSubTrigger = styled(SubTrigger, itemStyles, triggerItemStyles)

type ContextMenuSubTriggerProps = ComponentProps<typeof StyledSubTrigger>

export const ContextMenuSubTrigger = forwardRef<
  ElementRef<typeof StyledSubTrigger>,
  ContextMenuSubTriggerProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledSubTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledTriggerItemIndicator />
    </StyledSubTrigger>
  )
})
ContextMenuSubTrigger.toString = () => `.${StyledSubTrigger.className}`

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
