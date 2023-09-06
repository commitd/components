import { css } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SystemStyleObject } from '@committed/ss/types'
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
import { ComponentProps, ElementRef, forwardRef } from 'react'
import {
  CComponent,
  ConditionalWrapper,
  ItemVariants,
  StyledCheckIndicator,
  StyledSubTriggerIndicator,
  baseItemStyles,
  checkboxItemStyles,
  component,
  contentStyles,
  itemCva,
  itemIndicatorStyles,
  itemShortcutStyles,
  labelStyles,
  separatorCva,
  triggerItemStyles,
} from '../../utils'
import { paperStyles } from '../Paper/Paper'

const CONTEXT_MENU_ITEM = 'c-context-menu-item'

const groupStyles = css({
  display: 'flex',
  marginLeft: '$3',
  marginRight: '$1',

  [`& .${CONTEXT_MENU_ITEM}`]: {
    paddingLeft: '$2',
  },
} as SystemStyleObject)

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
export const ContextMenuItem: CComponent<
  ItemVariants & ComponentProps<typeof Item>
> = component(styled(Item, itemCva), CONTEXT_MENU_ITEM, baseItemStyles)
export const ContextMenuItemShortcut = component('span', itemShortcutStyles)
export const ContextMenuSeparator = styled(Separator, separatorCva)
export const ContextMenuLabel = component(Label, labelStyles)
export const ContextMenuItemGroup = component(Group, groupStyles)
export const ContextMenuRadioGroup = RadioGroup

ContextMenu.displayName = 'ContextMenu'
ContextMenuTrigger.displayName = 'ContextMenuTrigger'
ContextMenuItem.displayName = 'ContextMenuItem'
ContextMenuItemShortcut.displayName = 'ContextMenuItemShortcut'
ContextMenuSeparator.displayName = 'ContextMenuSeparator'
ContextMenuLabel.displayName = 'ContextMenuLabel'
ContextMenuItemGroup.displayName = 'ContextMenuItemGroup'
ContextMenuRadioGroup.displayName = 'ContextMenuRadioGroup'

const StyledContent = component(Content, paperStyles, contentStyles)

type ContextMenuContentProps = ComponentProps<typeof StyledContent> & {
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
ContextMenuContent.displayName = 'ContextMenuContent'

const StyledItemIndicator = component(ItemIndicator, itemIndicatorStyles)
const StyledCheckboxItem = component(
  styled(CheckboxItem, itemCva),
  checkboxItemStyles,
)
const StyledRadioItem = component(
  styled(RadioItem, itemCva),
  checkboxItemStyles,
)

// Submenu
export const ContextMenuSub = Sub
ContextMenuSub.displayName = 'ContextMenuSub'

const StyledSubContent = component(SubContent, paperStyles, contentStyles)

type ContextMenuSubContentProps = ComponentProps<typeof StyledSubContent> & {
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
ContextMenuSubContent.displayName = 'ContextMenuSubContent'

const StyledSubTrigger = component(
  styled(SubTrigger, itemCva),
  baseItemStyles,
  triggerItemStyles,
)

type ContextMenuSubTriggerProps = ComponentProps<typeof StyledSubTrigger>

export const ContextMenuSubTrigger = forwardRef<
  ElementRef<typeof StyledSubTrigger>,
  ContextMenuSubTriggerProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledSubTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledSubTriggerIndicator />
    </StyledSubTrigger>
  )
})
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger'

type ContextMenuCheckboxItemProps = ComponentProps<typeof CheckboxItem>

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
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem'

type ContextMenuRadioItemProps = ComponentProps<typeof RadioItem> & ItemVariants

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
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem'
