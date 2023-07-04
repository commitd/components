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
} from '@radix-ui/react-dropdown-menu'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { CSSProps } from '../../stitches.config'
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
  StyledSubTriggerIndicator,
  triggerItemStyles,
} from '../../utils/menuStyles'
import { Button } from '../Button'
import { ChevronDown } from '../Icons'
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

type MenuContentProps = ComponentProps<typeof Content> &
  CSSProps & {
    /** By default, portals your content parts into the body, set false to add at dom location. */
    portalled?: boolean
    /** Specify a container element to portal the content into. */
    container?: ComponentProps<typeof Portal>['container']
  }

export const MenuContent = forwardRef<
  ElementRef<typeof StyledContent>,
  MenuContentProps
>(({ portalled = true, container, children, ...props }, forwardedRef) => (
  <ConditionalWrapper
    condition={portalled}
    wrapper={(child) => <Portal container={container}>{child}</Portal>}
  >
    <StyledContent alignOffset={8} {...props} ref={forwardedRef}>
      {children}
    </StyledContent>
  </ConditionalWrapper>
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

const ButtonIndicator = styled(ChevronDown, {
  position: 'relative',
  top: 1,
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  marginRight: '-$2',
  _motionReduce: { transition: 'none' },
  _motionSafe: {
    transition: 'transform 250ms ease',
  },
})

type MenuButtonProps = ComponentProps<typeof Button>
const MENU_BUTTON_CLASS_NAME = 'c-menu-button'

export const MenuButton = forwardRef<
  ElementRef<typeof Trigger>,
  MenuButtonProps
>(({ children, ...props }, forwardedRef) => (
  <Trigger className={MENU_BUTTON_CLASS_NAME} asChild ref={forwardedRef}>
    <Button {...props}>
      {children}
      <ButtonIndicator />
    </Button>
  </Trigger>
))
MenuButton.toString = () => `.${MENU_BUTTON_CLASS_NAME}`

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

// Sub menu

export const MenuSub = Sub
const StyledSubTrigger = styled(SubTrigger, itemStyles, triggerItemStyles)
const StyledSubContent = styled(SubContent, paperStyles, contentStyles)

type MenuSubTriggerProps = ComponentProps<typeof StyledSubTrigger> & CSSProps

export const MenuSubTrigger = forwardRef<
  ElementRef<typeof StyledSubTrigger>,
  MenuSubTriggerProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledSubTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledSubTriggerIndicator />
    </StyledSubTrigger>
  )
})
MenuSubTrigger.toString = () => `.${StyledSubTrigger.className}`

type MenuSubContentProps = ComponentProps<typeof StyledSubContent> &
  CSSProps & {
    /** By default, portals your content parts into the body, set false to add at dom location. */
    portalled?: boolean
    /** Specify a container element to portal the content into. */
    container?: ComponentProps<typeof Portal>['container']
  }

export const MenuSubContent = forwardRef<
  ElementRef<typeof StyledSubContent>,
  MenuSubContentProps
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
MenuSubContent.toString = () => `.${StyledSubContent.className}`
