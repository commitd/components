import React from 'react'
import { styled } from '../../stitches.config'

/**
 * ListItemIcon component
 */
export const StyledListItemIcon = styled('div', {
  minWidth: '56px',
  textAlign: 'left',
})

type StyledListItemIconProps = React.ComponentProps<typeof StyledListItemIcon>
export type ListItemIconProps = StyledListItemIconProps

export const ListItemIcon: React.FC<ListItemIconProps> = StyledListItemIcon
ListItemIcon.toString = () => `.${StyledListItemIcon.className}`
