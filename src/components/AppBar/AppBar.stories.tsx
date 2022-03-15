import { Meta } from '@storybook/react'
import React from 'react'
import { Link as RouterLink, MemoryRouter } from 'react-router-dom'
import {
  AppBar,
  AppBarActions,
  AppBarButton,
  AppBarHeading,
  AppBarMenu,
  AppBarMenuItem
} from '.'
import { WrappedNavigationMenu } from '../NavigationMenu'

export default {
  title: 'Components/AppBar',
  component: AppBar,
  subcomponents: {
    AppBarHeading,
    AppBarActions,
    AppBarButton,
    AppBarMenu,
    AppBarMenuItem
  }
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

/**
 * AppBarMenuItem components extend Link and have all of the same props.
 */
export const WithMenu: React.FC = () => {
  return (
    <AppBar>
      <AppBarHeading>Example</AppBarHeading>
      <AppBarMenu>
        <AppBarMenuItem href="/feed">Feed</AppBarMenuItem>
        <AppBarMenuItem href="/browse">Browse</AppBarMenuItem>
      </AppBarMenu>
      <AppBarActions>
        <AppBarButton>Login</AppBarButton>
      </AppBarActions>
    </AppBar>
  )
}

export const WithMenuWithoutActions: React.FC = () => {
  return (
    <AppBar>
      <AppBarHeading>Example</AppBarHeading>
      <AppBarMenu>
        <AppBarMenuItem href="/feed">Feed</AppBarMenuItem>
        <AppBarMenuItem href="/browse">Browse</AppBarMenuItem>
      </AppBarMenu>
    </AppBar>
  )
}

/**
 * The App Bar can also make use of a wrapped Navigation Menu in place of AppBarMenuItem for more expanded usage.
 * See [Navigation Menu](/docs/components-navigationmenu--default) for more details on it's use.
 */
export const WithNavigationMenu: React.FC = () => {
  const list = {
    trigger: 'Wrapped List',
    links: [
      {
        href: '/design-system-colour--page',
        content: {
          title: 'Colors',
          text: 'Beautiful, thought-out palettes with auto dark mode.'
        }
      },
      {
        href: '/components-icons--icon-grid',
        content: {
          title: 'Icons',
          text: 'A collection of available icons based on material designs.'
        }
      }
    ]
  }
  const storybookLink = {
    href: 'https://components.committed.software',
    text: 'Storybook'
  }
  const githubLink = {
    href: 'https://github.com/commitd/components',
    text: 'Github'
  }

  return (
    <AppBar>
      <AppBarHeading>Example</AppBarHeading>
      <AppBarMenu>
        <WrappedNavigationMenu items={[list, storybookLink, githubLink]} />
      </AppBarMenu>
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
            textDecoration: 'none'
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
