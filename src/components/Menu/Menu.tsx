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
} from '@radix-ui/react-dropdown-menu'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { Slot } from '@radix-ui/react-slot'
import React, { forwardRef } from 'react'
import type { CSS, CSSProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { Check, ChevronRight } from '../Icons'
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
  color: '$text',
  outline: 'none',
  transition: 'all 50ms',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

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

export const MenuItem = styled(Item, itemStyles)

const StyledMenuTriggerItem = styled(TriggerItem, {
  ...itemStyles,
  '&[data-state="open"]': {
    background: '$selection',
  },
})

type MenuTriggerItemOwnProps = React.ComponentProps<typeof TriggerItem> &
  CSSProps

type MenuTriggerItemComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof TriggerItem>,
  MenuTriggerItemOwnProps
>

export const MenuTriggerItem = forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledMenuTriggerItem {...props} ref={forwardedRef}>
        {children}
        <ChevronRight css={{ size: '$4' }} />
      </StyledMenuTriggerItem>
    )
  }
) as MenuTriggerItemComponent

type MenuContentOwnProps = Polymorphic.OwnProps<typeof Content> & CSSProps

type MenuContentComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Content>,
  MenuContentOwnProps
>

export const MenuContent = forwardRef(
  ({ children, css, ...props }, forwardedRef) => (
    <StyledContent
      css={css as CSS}
      alignOffset={8}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </StyledContent>
  )
) as MenuContentComponent

type MenuTriggerOwnProps = Polymorphic.OwnProps<typeof Trigger>
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
    <Check css={{ size: '$4' }} />
  </StyledItemIndicator>
)

type MenuItemCheckboxComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof CheckboxItem>,
  Polymorphic.OwnProps<typeof CheckboxItem>
>

export const MenuItemCheckbox = forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledCheckboxItem {...props} ref={forwardedRef}>
      <StyledCheckboxIndicator />
      {children}
    </StyledCheckboxItem>
  )
) as MenuItemCheckboxComponent

export const MenuSeparator = styled(Separator, {
  height: 1,
  backgroundColor: '$grey7',

  variants: {
    orientation: {
      horizontal: {
        height: 1,
        margin: '$1 0',
      },
      vertical: {
        width: 1,
        height: 'auto',
        margin: '0 $1',
        flex: '1 1 100%',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export const MenuLabel = styled(Label, {
  color: '$grey10',
  fontSize: '$-1',
  padding: '$2 $3',
  paddingBottom: '$1',
  cursor: 'default',
})

export const MenuItemGroup = styled(Group, {
  display: 'flex',
  marginLeft: '$3',
  marginRight: '$1',

  [`& ${MenuItem}`]: {
    paddingLeft: '$2',
  },
})

export const MenuRadioGroup = RadioGroup

type MenuItemRadioComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof RadioItem>,
  Polymorphic.OwnProps<typeof RadioItem>
>

export const MenuRadioItem = forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledRadioItem {...props} ref={forwardedRef}>
      <StyledCheckboxIndicator />
      {children}
    </StyledRadioItem>
  )
) as MenuItemRadioComponent

export const MenuItemShortcut = styled('span', {
  fontFamily: '$monospace',
  lineHeight: '$body',
  color: '$textSecondary',
  marginLeft: '$3',
})

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
