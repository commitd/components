'use client'
import { css, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SystemStyleObject } from '@committed/ss/types'
import { SurfaceVariants } from '@committed/utilities'
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

const CONTEXT_MENU = 'c-context'
const CONTEXT_MENU_ITEM = `${CONTEXT_MENU}-item`

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
export const ContextMenu: React.FC<ComponentProps<typeof Root>> = component(
  Root,
  CONTEXT_MENU,
)
export const ContextMenuTrigger = Trigger
export const ContextMenuItem: CComponent<
  typeof Item,
  ItemVariants & ComponentProps<typeof Item>
> = component(styled(Item, itemCva), CONTEXT_MENU_ITEM, baseItemStyles)
export const ContextMenuItemShortcut = component(
  'span',
  'c-context-menu-item-shortcut',
  itemShortcutStyles,
)
export const ContextMenuSeparator = styled(
  component(Separator, 'c-context-menu-separator'),
  separatorCva,
)
export const ContextMenuLabel = component(
  Label,
  'c-context-menu-label',
  labelStyles,
)
export const ContextMenuItemGroup = component(
  Group,
  'c-context-menu-item-group',
  groupStyles,
)
export const ContextMenuRadioGroup = RadioGroup

ContextMenu.displayName = 'ContextMenu'
ContextMenuTrigger.displayName = 'ContextMenuTrigger'
ContextMenuItem.displayName = 'ContextMenuItem'
ContextMenuItemShortcut.displayName = 'ContextMenuItemShortcut'
ContextMenuSeparator.displayName = 'ContextMenuSeparator'
ContextMenuLabel.displayName = 'ContextMenuLabel'
ContextMenuItemGroup.displayName = 'ContextMenuItemGroup'
ContextMenuRadioGroup.displayName = 'ContextMenuRadioGroup'

const StyledContent = styled(
  component(Content, 'c-context-menu-content', paperStyles, contentStyles),
)

type ContextMenuContentProps = ComponentProps<typeof StyledContent> &
  SurfaceVariants & {
    /** By default, portals your content parts into the body, set false to add at dom location. */
    portalled?: boolean
    /** Specify a container element to portal the content into. */
    container?: ComponentProps<typeof Portal>['container']
  }

export const ContextMenuContent = forwardRef<
  ElementRef<typeof StyledContent>,
  ContextMenuContentProps
>(
  (
    { container, surface = 'solid', portalled = true, children, ...props },
    forwardedRef,
  ) => (
    <ConditionalWrapper
      condition={portalled}
      wrapper={(child) => <Portal container={container}>{child}</Portal>}
    >
      <StyledContent surface={surface} {...props} ref={forwardedRef}>
        {children}
      </StyledContent>
    </ConditionalWrapper>
  ),
)
ContextMenuContent.displayName = 'ContextMenuContent'

const StyledItemIndicator = component(
  ItemIndicator,
  'c-context-menu-item-indicator',
  itemIndicatorStyles,
)
const StyledCheckboxItem = component(
  styled(CheckboxItem, itemCva),
  'c-context-menu-checkbox-item',
  checkboxItemStyles,
)
const StyledRadioItem = component(
  styled(RadioItem, itemCva),
  checkboxItemStyles,
)

// Submenu
export const ContextMenuSub = Sub
ContextMenuSub.displayName = 'ContextMenuSub'

const StyledSubContent = styled(
  component(
    SubContent,
    'c-context-menu-sub-content',
    paperStyles,
    contentStyles,
  ),
)

type ContextMenuSubContentProps = ComponentProps<typeof StyledSubContent> &
  SurfaceVariants & {
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
  'c-context-menu-sub-trigger',
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
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <StyledRadioItem
      className={cx('c-context-menu-radio-item', className)}
      {...props}
      ref={forwardedRef}
    >
      <StyledItemIndicator>
        <StyledCheckIndicator />
      </StyledItemIndicator>
      {children}
    </StyledRadioItem>
  )
})
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem'
