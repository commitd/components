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
import { ComponentProps, ElementRef, forwardRef } from 'react'

import { css } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { ConditionalWrapper, withClasses } from '../../utils'
import {
    StyledCheckIndicator,
    StyledSubTriggerIndicator,
    checkboxItemStyles,
    contentStyles,
    groupStyles,
    itemCva,
    itemIndicatorStyles,
    itemShortcutStyles,
    labelStyles,
    separatorCva,
    triggerItemStyles,
} from '../../utils/menuStyles'
import { Button } from '../Button'
import { ChevronDown } from '../Icons'
import { paperStyles } from '../Paper'

const MENU_CLASS = 'c-menu'
const MENU_ITEM_CLASS = 'c-meu-item'

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

export const MenuItem = withClasses(styled(Item, itemCva), MENU_ITEM_CLASS)
export const MenuItemShortcut = withClasses('span', itemShortcutStyles)
export const MenuSeparator = styled(Separator, separatorCva)
export const MenuLabel = withClasses(Label, labelStyles)
export const MenuItemGroup = withClasses(Group, groupStyles(MENU_ITEM_CLASS))
export const MenuRadioGroup = RadioGroup

const StyledContent = withClasses(Content, paperStyles, contentStyles)
const StyledItemIndicator = withClasses(ItemIndicator, itemIndicatorStyles)
const StyledCheckboxItem = withClasses(
  styled(CheckboxItem, itemCva),
  checkboxItemStyles
)
const StyledRadioItem = withClasses(
  styled(RadioItem, itemCva),
  checkboxItemStyles
)

type MenuContentProps = ComponentProps<typeof Content> & {
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
MenuContent.displayName = 'MenuContent'

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
MenuTrigger.displayName = 'MenuTrigger'

const ButtonIndicator = withClasses(
  ChevronDown,
  css({
    position: 'relative',
    top: 1,
    '[data-state=open] &': { transform: 'rotate(-180deg)' },
    marginRight: '-$2',
    _motionReduce: { transition: 'none' },
    _motionSafe: {
      transition: 'transform 250ms ease',
    },
  })
)

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
MenuButton.displayName = 'MenuButton'

const StyledCheckboxIndicator = forwardRef<
  ElementRef<typeof StyledItemIndicator>,
  ComponentProps<typeof StyledItemIndicator>
>((props, forwardedRef) => (
  <StyledItemIndicator {...props} ref={forwardedRef}>
    <StyledCheckIndicator />
  </StyledItemIndicator>
))

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
MenuCheckboxItem.displayName = 'MenuCheckboxItem'

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
MenuRadioItem.displayName = 'MenuRadioItem'
// Sub menu

export const MenuSub = Sub
const StyledSubTrigger = withClasses(
  styled(SubTrigger, itemCva),
  triggerItemStyles
)
const StyledSubContent = withClasses(SubContent, paperStyles, contentStyles)

type MenuSubTriggerProps = ComponentProps<typeof StyledSubTrigger>

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
MenuSubTrigger.displayName = 'MenuSubTrigger'

type MenuSubContentProps = ComponentProps<typeof StyledSubContent> & {
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
MenuSubContent.displayName = 'MenuSubContent'
