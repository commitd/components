import {
  AppBar,
  AppBarActions,
  AppBarButton,
  AppBarHeading,
} from '@committed/ds'

export const AppBarExample = () => (
  <AppBar>
    <AppBarHeading>Example</AppBarHeading>
    <AppBarActions>
      <AppBarButton>Login</AppBarButton>
    </AppBarActions>
  </AppBar>
)
