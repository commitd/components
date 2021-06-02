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
  '&:focus': {
    background: '$grey4',
    cursor: 'pointer',
  },
  '&[data-disabled]': {
    color: '$grey9',
  },
}

const StyledContent = styled(Content, {
  minWidth: 130,
  backgroundColor: '$paper',
  borderRadius: '$default',
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

/**
 * Menu component
 *
 * Displays a menu to the user - usually triggered by clicking a button.
 */
export const Menu = styled(Root, {})

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
  fontSize: '$0',
  padding: '$2 $3',
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
