import React from 'react'
import { styled } from '@material-ui/styles'
import { fonts, Theme } from '../../theme'
import MaterialAppBar, {
  AppBarProps as MaterialAppBarProps,
} from '@material-ui/core/AppBar'

export type AppBarProps = MaterialAppBarProps

export const AppBar: React.ComponentType<AppBarProps> = styled(MaterialAppBar)(
  ({ theme }: { theme: Theme }) => ({
    '& h1, h2, h3, h4, h5, h6': {
      fontSize: fonts.sizes[1],
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
)
