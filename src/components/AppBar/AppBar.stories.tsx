import React from 'react'
import { Story, Meta } from '@storybook/react'
import { AppBar, AppBarHeading, AppBarActions, AppBarButton } from '.'
import { Button } from '..'
import {
  MemoryRouter,
  Route,
  Switch,
  Link as RouterLink,
} from 'react-router-dom'

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
