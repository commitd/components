import React from 'react'
import { styled } from '../../stitches.config'

/**
 * List component
 */
export const StyledList = styled('div', {
  paddingTop: '$2',
  paddingBottom: '$2',
})

type StyledListProps = React.ComponentProps<typeof StyledList>
export type ListProps = StyledListProps & {
  as?: string
}

export const List: React.FC<ListProps> = StyledList
List.toString = () => `.${StyledList.className}`
