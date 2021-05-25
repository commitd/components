import React from 'react'
import { styled } from 'stitches.config'
import { Button } from '../Button'

/**
 * ListItem component
 */
const styles = {
  display: 'flex',
  paddingLeft: '$4',
  paddingRight: '$4',
  paddingTop: '$2',
  paddingBottom: '$2',
  width: '100%',
}
export const StyledListItem = styled('div', styles)

export const StyledInteractiveListItem = styled(Button, {
  border: 'none',
  justifyContent: 'unset',
  height: 'unset',
  ...styles,
})

type StyledListItemProps = React.ComponentProps<typeof StyledListItem>
export type ListItemProps = StyledListItemProps & {
  interactive?: boolean
}

export const ListItem: React.FC<ListItemProps> = ({
  interactive,
  children,
  ...props
}) =>
  interactive ? (
    <StyledInteractiveListItem>{children}</StyledInteractiveListItem>
  ) : (
    <StyledListItem {...props}>{children}</StyledListItem>
  )
ListItem.toString = () => `.${StyledListItem.className}`
