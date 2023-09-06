import { css, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { ComponentProps, ElementRef, FC, ForwardedRef, forwardRef } from 'react'
import { component } from '../../utils'
import {
  IconButton,
  buttonBaseStyles,
  buttonInteractionStyles,
} from '../Button/Button'
import { paperStyles } from '../Paper/Paper'
import { Svg } from '../Svg'
import { Text } from '../Text'

const list = cva({
  base: {
    borderTop: '1px solid token(colors.$neutral.4)',
  },
  variants: {
    border: {
      true: {
        borderLeft: '1px solid token(colors.$neutral.4)',
        borderRight: '1px solid token(colors.$neutral.4)',
      },
    },
  },
})

/**
 * List component can be used to display a list of items, options, or actions, such as navigation.
 *
 * Items can contain the main text and optionally subtext. They can be made interactive to preform an action and/or can
 * have interactive elements are the start or end of the item.
 */
export const List = styled('div', list)

/***********************************************************
 * List Item
 ***********************************************************/

const itemCva = cva({
  base: {
    '--selectionColor': 'token(colors.$selection)',
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    px: '$4',
    py: '$2',
    borderBottom: '1px solid token(colors.$neutral.4)',
  },

  variants: {
    selected: {
      true: {
        backgroundColor: 'var(--selectionColor)',
      },
    },
  },
})

export const StyledListItem = styled(component('div', paperStyles), itemCva)

export const StyledInteractiveListItem = styled(
  component(
    'button',
    paperStyles,
    css({
      //colors
      '--base': 'token(colors.$neutral.9)',
      '--solid': 'token(colors.$neutral.10)',
      '--bold': 'token(colors.$neutral.11)',
      '--contrast': 'token(colors.$neutral.11)',
      '--bg': 'token(colors.$neutral.2)',
      '--subtle': 'token(colors.$neutral.3)',
      '--normal': 'token(colors.$neutral.4)',
      '--text': 'token(colors.$neutral.text)',

      // states
      '--active': 'var(--bold)',
      '--focus': 'token(colors.$paper)',
      '--hover': 'var(--normal)',
    }),
    css(buttonBaseStyles),
    css(buttonInteractionStyles),
    css({ width: '100%' }),
  ),
  itemCva,
)

type InteractiveProps = {
  /* Set true to make the list item interactive */
  interactive: true
} & ComponentProps<typeof StyledInteractiveListItem>

type UninteractiveProps = { interactive?: false } & ComponentProps<
  typeof StyledListItem
>

type ConditionalListItemProps = InteractiveProps | UninteractiveProps

type ListItemProps = {
  /* When interactive an item can also be disabled */
  disabled?: boolean
  /* An item can also be highlighted as selected */
  selected?: boolean
} & ConditionalListItemProps

export const ListItem = forwardRef<
  ElementRef<typeof StyledInteractiveListItem | typeof StyledListItem>,
  ListItemProps
>(({ interactive, ...props }, forwardedRef) => {
  if (interactive) {
    const buttonProps = props as Omit<InteractiveProps, 'interactive'>
    return (
      <StyledInteractiveListItem
        {...buttonProps}
        ref={forwardedRef as ForwardedRef<HTMLButtonElement>}
      />
    )
  } else {
    const divProps = props as UninteractiveProps
    return (
      <StyledListItem
        {...divProps}
        ref={forwardedRef as ForwardedRef<HTMLDivElement>}
      />
    )
  }
})
ListItem.displayName = 'ListItem'

/***********************************************************
 * List Item Icon
 ***********************************************************/

/**
 * ListItemIcon component
 *
 * Is a light wrapper around Svg component for standard styling by default that can be overridden.
 */
export const ListItemIcon = component(
  Svg,
  css({
    minWidth: '56px',
    textAlign: 'left',
  }),
)
ListItemIcon.displayName = 'ListItemIcon'

/***********************************************************
 * List Item Secondary Action
 ***********************************************************/

// NB Not done as styled due to color getting overridden by variant
const LIST_ITEM_SECONDARY_ACTION_CLASS_NAME = 'c-list-item-secondary-action'

/**
 * ListItemSecondaryAction component
 *
 * Is a light wrapper around IconButton component for standard styling by default that can be overridden.
 */
export const ListItemSecondaryAction = forwardRef<
  ElementRef<typeof IconButton>,
  ComponentProps<typeof IconButton>
>(({ className, ...props }, forwardedRef) => (
  <IconButton
    className={cx(
      LIST_ITEM_SECONDARY_ACTION_CLASS_NAME,
      css({ color: '$text.secondary' }),
      className,
    )}
    variant="text"
    {...props}
    ref={forwardedRef}
  />
))
ListItemSecondaryAction.displayName = 'ListItemSecondaryAction'

/***********************************************************
 * List Item Text
 ***********************************************************/

/**
 * ListItemText component
 */
export const StyledListItemText = component(
  'div',
  css({
    marginTop: '$2',
    marginBottom: '$2',
    flex: '1',
    textAlign: 'left',
  }),
)

const SecondaryText = component(
  Text,
  css({
    display: 'block',
    color: '$text.secondary',
    fontSize: '$-2',
  }),
)

type StyledListItemTextProps = ComponentProps<typeof StyledListItemText>
export type ListItemTextProps = StyledListItemTextProps & {
  text: string
  subtext?: string
}

export const ListItemText: FC<ListItemTextProps> = ({ text, subtext }) => (
  <StyledListItemText>
    <Text>{text}</Text>
    {subtext != null && <SecondaryText>{subtext}</SecondaryText>}
  </StyledListItemText>
)
ListItemText.displayName = 'ListItemText'
