import React from 'react'
import { styled } from 'stitches.config'
import { Text } from '../Text'

/**
 * AppBar component
 */
export const AppBarContainer = styled('div', {
  display: 'flex',
  background: '$primary',
  color: '$primaryContrast',
  minHeight: '64px',
  paddingLeft: '$4',
  paddingRight: '$4',
  alignItems: 'center',
})

export const AppBarHeading = styled('div', {
  flex: '1',
})

export const AppBarActions = styled('div', {
  '> *': {
    color: '$primaryContrast',
  },
  button: {
    border: 'none',
  },
})

type StyledAppBarProps = React.ComponentProps<typeof AppBarContainer>
export type AppBarProps = StyledAppBarProps & {
  heading?: React.ReactNode
  actions?: React.ReactNode[]
}

export const AppBar: React.FC<AppBarProps> = ({ heading, actions }) => {
  let formattedHeading
  if (typeof heading === 'string') {
    formattedHeading = (
      <Text css={{ color: '$primaryContrast' }} size={1}>
        Heading
      </Text>
    )
  } else {
    formattedHeading = heading
  }
  return (
    <AppBarContainer>
      <AppBarHeading>{formattedHeading}</AppBarHeading>
      <AppBarActions>{actions}</AppBarActions>
    </AppBarContainer>
  )
}
AppBar.toString = () => `.${AppBarContainer.className}`
