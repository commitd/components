import {
  CheckboxItem,
  Content,
  Item,
  ItemIndicator,
  Label,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Trigger,
} from '@radix-ui/react-context-menu'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { ComponentProps, FC, forwardRef } from 'react'
import type { CSSProps } from 'stitches.config'
import { styled } from 'stitches.config'
import { Check } from '../Icons'

const StyledContent = styled(Content, {
  minWidth: '$10',
  backgroundColor: '$background',
  borderRadius: '$default',
  padding: '$1',
  boxShadow: '$1',
})

const itemStyles = {
  fontSize: '$-1',
  padding: '$1 $3',
  borderRadius: '$default',
  cursor: 'default',

  '&:focus': {
    outline: 'none',
    backgroundColor: '$selection',
    color: '$text',
  },

  '&[data-disabled]': {
    color: '$grey9',
  },
}

const StyledItem = styled(Item, itemStyles)

const StyledSeparator = styled(Separator, {
  height: 1,
  backgroundColor: '$grey8',
  margin: '$1',
})

const StyledLabel = styled(Label, {
  color: '$grey10',
  fontSize: '$-1',
  padding: '$1 $3',
  cursor: 'default',
})

/**
 * The `ContextMenu` displays a pop up menu when right clicking the `ContextMenuTrigger`.
 */
export const ContextMenu = Root
export const ContextMenuTrigger = Trigger
export const ContextMenuItem: FC<ComponentProps<typeof Item>> = StyledItem
export const ContextMenuContent: FC<
  ComponentProps<typeof Content>
> = StyledContent
export const ContextMenuSeparator: FC<
  ComponentProps<typeof Separator>
> = StyledSeparator
export const ContextMenuLabel: FC<ComponentProps<typeof Label>> = StyledLabel

const StyledItemIndicator = styled(ItemIndicator, {
  position: 'absolute',
  left: '$2',
})

const StyledContextMenuCheckboxItem = styled(CheckboxItem, {
  ...itemStyles,
  padding: '$1 $2 $1 $5',
})

type ContextMenuCheckboxItemOwnProps = Polymorphic.OwnProps<
  typeof CheckboxItem
> &
  CSSProps

type ContextMenuCheckboxItemComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof CheckboxItem>,
  ContextMenuCheckboxItemOwnProps
>

export const ContextMenuCheckboxItem = forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledContextMenuCheckboxItem {...props} ref={forwardedRef}>
        <StyledItemIndicator>
          <Check css={{ height: 16, width: 16 }} />
        </StyledItemIndicator>
        {children}
      </StyledContextMenuCheckboxItem>
    )
  }
) as ContextMenuCheckboxItemComponent

const StyledContextMenuRadioItem = styled(RadioItem, {
  ...itemStyles,
  padding: '$1 $2 $1 $5',
})

type ContextMenuRadioItemOwnProps = Polymorphic.OwnProps<typeof RadioItem> &
  CSSProps

type ContextMenuRadioItemComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof RadioItem>,
  ContextMenuRadioItemOwnProps
>

export const ContextMenuRadioItem = forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledContextMenuRadioItem {...props} ref={forwardedRef}>
        <StyledItemIndicator>
          <Check css={{ height: 16, width: 16 }} />
        </StyledItemIndicator>
        {children}
      </StyledContextMenuRadioItem>
    )
  }
) as ContextMenuRadioItemComponent

export const ContextMenuRadioGroup = RadioGroup
