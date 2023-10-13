'use client'
import { SystemStyleObject, css, styled } from '@committed/ds-ss'
import { SurfaceVariants } from '@committed/ds-utilities'
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
import {
  CComponent,
  ConditionalWrapper,
  ForwardRef,
  ItemVariants,
  StyledCheckIndicator,
  StyledSubTriggerIndicator,
  baseItemStyles,
  checkboxItemStyles,
  component,
  contentStyles,
  forwardRefDefine,
  forwardRefExtend,
  itemCva,
  itemIndicatorStyles,
  itemShortcutStyles,
  labelStyles,
  separatorCva,
  triggerItemStyles,
} from '../../utils'
import { Button } from '../Button'
import { ChevronDown } from '../Icons'
import { paperStyles } from '../Paper/Paper'

const MENU_CLASS = 'c-menu'
const MENU_ITEM_CLASS = 'c-meu-item'

const groupStyles = css({
  display: 'flex',
  marginLeft: '$3',
  marginRight: '$1',

  [`& .${MENU_ITEM_CLASS}`]: {
    paddingLeft: '$2',
  },
} as SystemStyleObject)

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
export const Menu: CComponent<typeof Root> = component(Root, MENU_CLASS)
Menu.displayName = 'Menu'

export const MenuItem: CComponent<typeof Item, ItemVariants> = component(
  styled(Item, itemCva),
  MENU_ITEM_CLASS,
  baseItemStyles,
)
MenuItem.displayName = 'MenuItem'
export const MenuItemShortcut = component(
  'span',
  'c-menu-item-shortcut',
  itemShortcutStyles,
)
MenuItemShortcut.displayName = 'MenuItemShortcut'
export const MenuSeparator = styled(
  component(Separator, 'c-menu-separator'),
  separatorCva,
)
MenuSeparator.displayName = 'MenuSeparator'
export const MenuLabel = component(Label, 'c-menu-label', labelStyles)
MenuLabel.displayName = 'MenuLabel'
export const MenuItemGroup = component(Group, 'c-menu-group', groupStyles)
MenuItemGroup.displayName = 'MenuItemGroup'
export const MenuRadioGroup = component(RadioGroup, 'c-menu-radio-group')
MenuRadioGroup.displayName = 'MenuRadioGroup'

const StyledContent = styled(
  component(Content, 'c-menu-content', paperStyles, contentStyles),
)

const StyledItemIndicator = component(
  ItemIndicator,
  'c-menu-indicator',
  itemIndicatorStyles,
)
const StyledCheckboxItem: CComponent<typeof CheckboxItem, ItemVariants> =
  styled(
    component(CheckboxItem, 'c-menu-checkbox-item', checkboxItemStyles),
    itemCva,
  )

const StyledRadioItem: CComponent<typeof RadioItem, ItemVariants> = styled(
  component(RadioItem, 'c-menu-radio-item', checkboxItemStyles),
  itemCva,
)

type MenuContentProps = ComponentProps<typeof Content> &
  SurfaceVariants & {
    /** By default, portals your content parts into the body, set false to add at dom location. */
    portalled?: boolean
    /** Specify a container element to portal the content into. */
    container?: ComponentProps<typeof Portal>['container']
  }

export const MenuContent = forwardRef<
  ElementRef<typeof StyledContent>,
  MenuContentProps
>(
  (
    { portalled = true, surface = 'solid', container, children, ...props },
    forwardedRef,
  ) => (
    <ConditionalWrapper
      condition={portalled}
      props={{ container }}
      wrapper={Portal}
    >
      <StyledContent
        surface={surface}
        alignOffset={8}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </StyledContent>
    </ConditionalWrapper>
  ),
)
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

const ButtonIndicator = component(
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
  }),
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

const StyledCheckboxIndicator = forwardRefExtend<typeof StyledItemIndicator>(
  (props, forwardedRef) => (
    <StyledItemIndicator {...props} ref={forwardedRef}>
      <StyledCheckIndicator />
    </StyledItemIndicator>
  ),
)
StyledCheckIndicator.displayName = 'StyledCheckIndicator'

type MenuCheckboxItemProps = ComponentProps<typeof StyledCheckboxItem>

export const MenuCheckboxItem: ForwardRef<
  typeof CheckboxItem,
  MenuCheckboxItemProps
> = forwardRefDefine<typeof CheckboxItem, MenuCheckboxItemProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledCheckboxItem {...props} ref={forwardedRef}>
      <StyledCheckboxIndicator />
      {children}
    </StyledCheckboxItem>
  ),
)
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

export const MenuSub = component(Sub, 'c-menu-sub')
MenuSub.displayName = 'MenuSub'

const StyledSubTrigger = component(
  styled(SubTrigger, itemCva),
  baseItemStyles,
  triggerItemStyles,
)
const StyledSubContent = styled(
  component(SubContent, 'c-menu-sub-content', paperStyles, contentStyles),
)

export const MenuSubTrigger = forwardRefExtend<
  typeof StyledSubTrigger,
  ItemVariants
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledSubTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledSubTriggerIndicator />
    </StyledSubTrigger>
  )
})
MenuSubTrigger.displayName = 'MenuSubTrigger'

type MenuSubContentProps = SurfaceVariants & {
  /** By default, portals your content parts into the body, set false to add at dom location. */
  portalled?: boolean
  /** Specify a container element to portal the content into. */
  container?: ComponentProps<typeof Portal>['container']
}

export const MenuSubContent = forwardRefExtend<
  typeof SubContent,
  MenuSubContentProps
>(
  (
    { container, portalled = true, surface = 'solid', children, ...props },
    forwardedRef,
  ) => (
    <ConditionalWrapper
      condition={portalled}
      props={{ container }}
      wrapper={Portal}
    >
      <StyledSubContent surface={surface} {...props} ref={forwardedRef}>
        {children}
      </StyledSubContent>
    </ConditionalWrapper>
  ),
)
MenuSubContent.displayName = 'MenuSubContent'
