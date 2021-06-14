import * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import { CSS, styled } from 'stitches.config'
import {
  Root,
  Trigger,
  Content,
  Item,
  CheckboxItem,
  ItemIndicator,
  Separator,
  Label,
  RadioItem,
  RadioGroup,
} from '@radix-ui/react-dropdown-menu'
import { Slot } from '@radix-ui/react-slot'
import { Check } from '../Icons'
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
  transition: 'background 0.5s',
  color: '$text',
  outline: 'none',

  '&:focus': {
    background: '$selection',
    cursor: 'pointer',
  },
  '&[data-disabled]': {
    color: '$grey9',
  },
}

const StyledContent = styled(Content, {
  ...paperStyles,
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

type MenuItemCSSProp = { css?: CSS }
type MenuItemOwnProps = React.ComponentProps<typeof Item> & MenuItemCSSProp

type MenuItemComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Item>,
  MenuItemOwnProps
>

export const MenuItem = styled(Item, itemStyles) as MenuItemComponent

type MenuContentCSSProp = { css?: CSS }
type MenuContentOwnProps = Polymorphic.OwnProps<typeof Content> &
  MenuContentCSSProp

type MenuContentComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Content>,
  MenuContentOwnProps
>

export const MenuContent = forwardRef(
  ({ children, css, ...props }, forwardedRef) => (
    <StyledContent css={css as CSS} {...props} ref={forwardedRef}>
      {children}
    </StyledContent>
  )
) as MenuContentComponent

type MenuTriggerCSSProp = { css?: CSS }
type MenuTriggerOwnProps = Polymorphic.OwnProps<typeof Trigger> &
  MenuTriggerCSSProp
type MenuTriggerComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Trigger>,
  MenuTriggerOwnProps
>

export const MenuTrigger = forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <Trigger as={Slot} {...props} ref={forwardedRef}>
      {children}
    </Trigger>
  )
) as MenuTriggerComponent

const StyledCheckboxIndicator = () => (
  <StyledItemIndicator>
    <Check css={{ height: 16, width: 16 }} />
  </StyledItemIndicator>
)

type MenuItemCheckboxComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof CheckboxItem>,
  Polymorphic.OwnProps<typeof CheckboxItem>
>

export const MenuItemCheckbox: MenuItemCheckboxComponent = forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledCheckboxItem {...props} ref={forwardedRef}>
      <StyledCheckboxIndicator />
      {children}
    </StyledCheckboxItem>
  )
)

export const MenuItemSeparator = styled(Separator, {
  height: 1,
  backgroundColor: '$grey7',
  margin: '$1',
})

export const MenuLabel = styled(Label, {
  color: '$grey10',
  fontSize: '$-1',
  padding: '$2 $3',
  paddingBottom: '$1',
  cursor: 'default',
})

export const MenuRadioGroup = RadioGroup

type MenuItemRadioComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof RadioItem>,
  Polymorphic.OwnProps<typeof RadioItem>
>

export const MenuRadioItem: MenuItemRadioComponent = forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledRadioItem {...props} ref={forwardedRef}>
      <StyledCheckboxIndicator />
      {children}
    </StyledRadioItem>
  )
)

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
