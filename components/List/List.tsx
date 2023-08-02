import { css, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import {
    ComponentProps,
    ElementRef,
    FC,
    ForwardedRef,
    forwardRef,
} from 'react'
import { withClasses } from '../../utils'
import { buttonInteractionStyles } from '../Button/Button'
import { IconButton } from '../IconButton'
import { paperStyles } from '../Paper'
import { Svg } from '../Svg'
import { Text } from '../Text'

const list = cva({
  base: {
    borderTop: '1px solid token(colors.$grey4)',
  },
  variants: {
    border: {
      true: {
        borderLeft: '1px solid token(colors.$grey4)',
        borderRight: '1px solid token(colors.$grey4)',
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
    border: 'none',
    padding: '$4',
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    paddingLeft: '$4',
    paddingRight: '$4',
    paddingTop: '$2',
    paddingBottom: '$2',
    borderBottom: '1px solid token(colors.$grey4)',
  },

  variants: {
    selected: {
      true: {
        backgroundColor: 'var(--selectionColor)',
      },
    },
  },
})

export const StyledListItem = styled(withClasses('div', paperStyles), itemCva)

export const StyledInteractiveListItem = styled(
  withClasses(
    'button',
    paperStyles,
    css(buttonInteractionStyles),
    css({ width: '100%' })
  ),
  itemCva
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
export const ListItemIcon = withClasses(
  Svg,
  css({
    minWidth: '56px',
    textAlign: 'left',
  })
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
      css({ color: '$textSecondary' }),
      className
    )}
    variant="tertiary"
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
export const StyledListItemText = withClasses(
  'div',
  css({
    marginTop: '$2',
    marginBottom: '$2',
    flex: '1',
    textAlign: 'left',
  })
)

const SecondaryText = withClasses(
  Text,
  css({
    display: 'block',
    color: '$textSecondary',
    fontSize: '$-2',
  })
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
