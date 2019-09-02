import * as React from 'react'
import { styled } from '@material-ui/styles'
import { fonts } from '../../theme'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import MaterialAppBar, {
  AppBarProps as MaterialAppBarProps
} from '@material-ui/core/AppBar'

export type AppBarProps = MaterialAppBarProps

export const AppBar = styled(MaterialAppBar)(({ theme }: { theme: Theme }) => ({
  '& h1, h2, h3, h4, h5, h6': {
    fontSize: fonts.sizes[1],
    fontWeight: theme.typography.fontWeightMedium
  }
}))
AppBar.displayName = 'AppBarr'

export default AppBar as React.FC<AppBarProps>
