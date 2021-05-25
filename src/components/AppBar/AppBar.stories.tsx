import { Meta } from '@storybook/react'
import React from 'react'
import { Link as RouterLink, MemoryRouter } from 'react-router-dom'
import { AppBar, AppBarActions, AppBarButton, AppBarHeading } from '.'

export default {
  title: 'Components/AppBar',
  component: AppBar,
  subcomponents: { AppBarHeading, AppBarActions, AppBarButton },
} as Meta

export const Default: React.FC = () => {
  return (
    <AppBar>
      <AppBarHeading>Example</AppBarHeading>
      <AppBarActions>
        <AppBarButton>Login</AppBarButton>
      </AppBarActions>
    </AppBar>
  )
}

export const WithReactRouter: React.FC = () => {
  return (
    <MemoryRouter>
      <AppBar>
        <RouterLink
          component={AppBarHeading}
          to="./"
          // props for component={Link} are passed on despite the error
          // @ts-ignore
          as="a"
          // @ts-ignore
          css={{
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          Example
        </RouterLink>
        <AppBarActions>
          <AppBarButton>Login</AppBarButton>
        </AppBarActions>
      </AppBar>
    </MemoryRouter>
  )
}
