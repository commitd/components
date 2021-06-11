import React, { forwardRef } from 'react'
import { StitchesVariants, styled, CSS } from 'stitches.config'
import * as Polymorphic from '@radix-ui/react-polymorphic'

import {
  Root,
  Trigger,
  Content,
  Item,
  Separator,
  CheckboxItem,
  RadioItem,
  ItemIndicator,
  RadioGroup,
} from '@radix-ui/react-context-menu'
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

/**
 * The `ContextMenu` displays a pop up menu when right clicking the Trigger.
 */
export const ContextMenuRoot = Root
export const ContextMenuTrigger = Trigger
export const ContextMenuItem = StyledItem
export const ContextMenuContent = StyledContent
export const ContextMenuSeparator = styled(Separator, {
  height: 1,
  backgroundColor: '$grey8',
  margin: '$1',
})
export const ContextMenuLabel = styled(Separator, {
  color: '$grey10',
  fontSize: '$-1',
  padding: '$1 $3',
  cursor: 'default',
})

const StyledItemIndicator = styled(ItemIndicator, {
  position: 'absolute',
  left: '$2',
})

export const StyledContextMenuCheckboxItem = styled(CheckboxItem, {
  ...itemStyles,
  padding: '$1 $2 $1 $5',
})

type ContextMenuCheckboxItemCSSProp = { css?: CSS }
type ContextMenuCheckboxItemVariants = StitchesVariants<
  typeof StyledContextMenuCheckboxItem
>
type ContextMenuCheckboxItemOwnProps = ContextMenuCheckboxItemCSSProp &
  ContextMenuCheckboxItemVariants

type ContextMenuCheckboxItemComponent = Polymorphic.ForwardRefComponent<
  typeof StyledContextMenuCheckboxItem,
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

export const StyledContextMenuRadioItem = styled(RadioItem, {
  ...itemStyles,
  padding: '$1 $2 $1 $5',
})

type ContextMenuRadioItemCSSProp = { css?: CSS }
type ContextMenuRadioItemVariants = StitchesVariants<
  typeof StyledContextMenuRadioItem
>
type ContextMenuRadioItemOwnProps = ContextMenuRadioItemCSSProp &
  ContextMenuRadioItemVariants

type ContextMenuRadioItemComponent = Polymorphic.ForwardRefComponent<
  typeof StyledContextMenuRadioItem,
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
