import React, { FC, ComponentProps, forwardRef, ForwardedRef } from 'react'
import type { CSS, CSSProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { buttonInteractionStyles } from '../Button/Button'
import { IconButton } from '../IconButton'
import { paperStyles } from '../Paper'
import { Svg } from '../Svg'
import { Text } from '../Text'
import type * as Polymorphic from '@radix-ui/react-polymorphic'

export const StyledList = styled('div', {
  borderTop: '1px solid $colors$grey4',
  variants: {
    border: {
      true: {
        borderLeft: '1px solid $colors$grey4',
        borderRight: '1px solid $colors$grey4',
      },
    },
  },
})

type StyledListProps = ComponentProps<typeof StyledList>
export type ListProps = StyledListProps & {
  as?: string
}

/**
 * List component can be used to display a list of items, options, or actions, such as navigation.
 *
 * Items can contain the main text and optionally subtext. They can be made interactive to preform an action and/or can
 * have interactive elements are the start or end of the item.
 */
export const List: FC<ListProps> = StyledList
List.toString = () => `.${StyledList.className}`

/***********************************************************
 * List Item
 ***********************************************************/

const styles = {
  $$selectionColor: '$colors$selection',
  ...paperStyles,
  border: 'none',
  padding: '$4',
  flex: 1,
  alignItems: 'center',
  display: 'flex',
  paddingLeft: '$4',
  paddingRight: '$4',
  paddingTop: '$2',
  paddingBottom: '$2',
  borderBottom: '1px solid $colors$grey4',

  variants: {
    selected: {
      true: {
        backgroundColor: '$$selectionColor',
      },
    },
  },
}

export const StyledListItem = styled('div', styles)

export const StyledInteractiveListItem = styled('button', {
  ...styles,
  ...buttonInteractionStyles,
  width: '100%',
})

type InteractiveProps = {
  /* Set true to make the list item interactive */
  interactive: true
} & Polymorphic.OwnProps<typeof StyledInteractiveListItem>

type UninteractiveProps = { interactive?: false } & Polymorphic.OwnProps<
  typeof StyledListItem
>

type ListItemProps = CSSProps & {
  /* Set true to make the list item interactive */
  interactive?: boolean
  /* When interactive an item can also be disabled */
  disabled?: boolean
  /* An item can also be highlighted as selected */
  selected?: boolean
}

type PolymorphicListItem = Polymorphic.ForwardRefComponent<
  'button',
  ListItemProps
>

export const ListItem = forwardRef(
  ({ interactive, ...props }, forwardedRef) => {
    if (interactive) {
      const buttonProps = props as Omit<InteractiveProps, 'interactive'>
      return (
        <StyledInteractiveListItem
          {...buttonProps}
          ref={(forwardedRef as unknown) as ForwardedRef<HTMLButtonElement>}
        />
      )
    } else {
      const divProps = props as UninteractiveProps
      return (
        <StyledListItem
          {...divProps}
          ref={(forwardedRef as unknown) as ForwardedRef<HTMLDivElement>}
        />
      )
    }
  }
) as PolymorphicListItem
ListItem.toString = () => `.${StyledListItem.className}`

/***********************************************************
 * List Item Icon
 ***********************************************************/

/**
 * ListItemIcon component
 *
 * Is a light wrapper around Svg component for standard styling by default that can be overridden.
 */
export const ListItemIcon = styled(Svg, {
  minWidth: '56px',
  textAlign: 'left',
})

/***********************************************************
 * List Item Secondary Action
 ***********************************************************/

/**
 * ListItemSecondaryAction component
 *
 * Is a light wrapper around IconButton component for standard styling by default that can be overridden.
 */
export const ListItemSecondaryAction: FC<ComponentProps<typeof IconButton>> = ({
  css = {},
  ...props
}) => (
  <IconButton
    css={{ color: '$textSecondary', ...css } as CSS}
    variant="tertiary"
    {...props}
  />
)

/***********************************************************
 * List Item Text
 ***********************************************************/

/**
 * ListItemText component
 */
export const StyledListItemText = styled('div', {
  marginTop: '$2',
  marginBottom: '$2',
  flex: '1',
  textAlign: 'left',
})

const SecondaryText = styled(Text, {
  display: 'block',
  color: '$textSecondary',
  fontSize: '$-2',
})

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
ListItemText.toString = () => `.${StyledListItemText.className}`
