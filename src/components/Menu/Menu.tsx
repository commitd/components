import * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import { CSS, StitchesVariants, styled } from 'stitches.config'
import {
  Root,
  Trigger,
  Content,
  Item,
  CheckboxItem,
  ItemIndicator,
} from '@radix-ui/react-dropdown-menu'
import { Slot } from '@radix-ui/react-slot'
import { Check } from 'index'

const itemStyles = {
  fontSize: '$0',
  padding: '$2 $3',
  cursor: 'default',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  borderRadius: '$default',
  backgroundColor: 'transparent',
  border: 'none',
  transition: 'background 0.5s',
  '&:focus': {
    background: '$grey4',
    cursor: 'pointer',
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
  left: 5,
})

const DEFAULT_TAG = 'div'

/**
 * StyledMenu base component
 */
const StyledMenu = styled(Root, {})
const StyledCheckboxItem = styled(CheckboxItem, itemStyles)

const StyledItem = styled(Item, itemStyles)

type MenuCSSProp = { css?: CSS }
type MenuVariants = StitchesVariants<typeof StyledMenu>
type MenuOwnProps = MenuCSSProp & MenuVariants

type MenuComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  MenuOwnProps
>

/**
 * Menu component
 */
export const Menu = forwardRef(({ ...props }, ref) => (
  <StyledMenu ref={ref} {...props} />
)) as MenuComponent
Menu.toString = () => `.${StyledMenu.className}`

type MenuContentCSSProp = { css?: CSS }
type MenuContentOwnProps = Polymorphic.OwnProps<typeof Content> &
  MenuContentCSSProp & {}

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

type MenuItemCSSProp = { css?: CSS }
type MenuItemOwnProps = Polymorphic.OwnProps<typeof StyledItem> &
  MenuItemCSSProp
type MenuItemComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof StyledItem>,
  MenuItemOwnProps
>

export const MenuItem = forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledItem {...props} ref={forwardedRef}>
    {children}
  </StyledItem>
)) as MenuItemComponent

type MenuItemCheckboxCSSProp = { css?: CSS }
type MenuItemCheckboxOwnProps = Polymorphic.OwnProps<
  typeof StyledCheckboxItem
> &
  MenuItemCheckboxCSSProp
type MenuItemCheckboxComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof StyledCheckboxItem>,
  MenuItemCheckboxOwnProps
>

export const MenuItemCheckbox = forwardRef(({ children, ...props }) => (
  <StyledCheckboxItem {...props}>
    <StyledItemIndicator>
      <Check />
    </StyledItemIndicator>
    {children}
  </StyledCheckboxItem>
)) as MenuItemCheckboxComponent
