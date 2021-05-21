import React from 'react'
import { styled } from 'stitches.config'

/**
 * ListItemSecondaryAction component
 */
export const StyledListItemSecondaryAction = styled('div', {
  '> *': {
    border: 'none',
  },
})

type StyledListItemSecondaryActionProps = React.ComponentProps<
  typeof StyledListItemSecondaryAction
>
export type ListItemSecondaryActionProps = StyledListItemSecondaryActionProps

export const ListItemSecondaryAction: React.FC<ListItemSecondaryActionProps> = StyledListItemSecondaryAction
ListItemSecondaryAction.toString = () =>
  `.${StyledListItemSecondaryAction.className}`
