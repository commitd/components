import MaterialAppBar, {
  AppBarProps as MaterialAppBarProps,
} from '@material-ui/core/AppBar'
import { styled } from '@material-ui/styles'
import React from 'react'
import { Theme } from '../../theme'

export type AppBarProps = MaterialAppBarProps

export const AppBar: React.ComponentType<AppBarProps> = styled(MaterialAppBar)(
  ({ theme }: { theme: Theme }) => ({
    '& h1, h2, h3, h4, h5, h6': {
      fontSize: theme.fontSizing(1),
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
)
