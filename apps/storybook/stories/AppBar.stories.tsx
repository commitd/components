import {
  AppBar,
  AppBarActions,
  AppBarButton,
  AppBarHeading,
  AppBarMenu,
  AppBarMenuItem,
  Box,
  Link,
  Padding,
  WrappedNavigationMenu,
} from '@committed/ds'
import { surfaces } from '@committed/utilities'
import { Meta, StoryFn } from '@storybook/react'
import {
  MemoryRouter,
  Route,
  Link as RouterLink,
  Routes,
} from 'react-router-dom'
import { Variants } from './utils'
import { ZigZag } from './utils/ZigZag'

export default {
  title: 'Components/AppBar',
  component: AppBar,
  subcomponents: {
    AppBarHeading,
    AppBarActions,
    AppBarButton,
    AppBarMenu,
    AppBarMenuItem,
  },
} as Meta

export const Default: StoryFn = () => {
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
export const WithMenu: StoryFn<typeof AppBar> = (args) => {
  return (
    <AppBar {...args}>
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

export const WithMenuWithoutActions: StoryFn = () => {
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
export const WithNavigationMenu: StoryFn = () => {
  const list = {
    trigger: 'Wrapped List',
    links: [
      {
        href: '/design-system-colour--page',
        content: {
          title: 'Colors',
          text: 'Beautiful, thought-out palettes with auto dark mode.',
        },
      },
      {
        href: '/components-icons--icon-grid',
        content: {
          title: 'Icons',
          text: 'A collection of available icons based on material designs.',
        },
      },
    ],
  }
  const storybookLink = {
    href: 'https://components.committed.software',
    text: 'Storybook',
  }
  const githubLink = {
    href: 'https://github.com/commitd/components',
    text: 'Github',
  }

  return (
    <AppBar>
      <AppBarHeading>Example</AppBarHeading>
      <AppBarMenu>
        <WrappedNavigationMenu
          variant="text"
          items={[list, storybookLink, githubLink]}
        />
      </AppBarMenu>
      <AppBarActions>
        <AppBarButton>Login</AppBarButton>
      </AppBarActions>
    </AppBar>
  )
}

export const WithReactRouter: StoryFn = () => {
  return (
    <MemoryRouter>
      <AppBar>
        <AppBarHeading>
          <Link asChild variant="clear">
            <RouterLink to="./">Example</RouterLink>
          </Link>
        </AppBarHeading>
        <AppBarActions>
          <Link asChild variant="clear">
            <RouterLink to="/login">
              <AppBarButton>Login</AppBarButton>
            </RouterLink>
          </Link>
        </AppBarActions>
      </AppBar>
      <Padding p="$3">
        <Box>
          <Routes>
            <Route index element={<div>Hello Router</div>} />
            <Route path="/login" element={<div>Logon</div>} />
          </Routes>
        </Box>
      </Padding>
    </MemoryRouter>
  )
}

export const Surfaces: StoryFn = () => {
  return (
    <Box>
      <ZigZag>
        <Variants
          gridCss={{
            gridTemplateColumns: '1fr',
            padding: '$4',
          }}
          component={WithMenu}
          surface={surfaces}
        />
      </ZigZag>
    </Box>
  )
}
