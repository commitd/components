'use client'
import {
  AppBar,
  AppBarActions,
  AppBarHeading,
  ThemeSwitch,
} from '@committed/ds'
import { BackgroundSwitch } from './Background'

export const Header = ({ children }) => (
  <AppBar css={{ position: 'sticky', top: 0, zIndex: 1000 }} surface="solid">
    <AppBarHeading>{children}</AppBarHeading>
    <AppBarActions>
      <BackgroundSwitch />
      <ThemeSwitch />
    </AppBarActions>
  </AppBar>
)
