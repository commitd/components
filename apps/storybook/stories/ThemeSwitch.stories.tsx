import {
  AppBar,
  AppBarActions,
  AppBarHeading,
  Container,
  ControlledThemeSwitch,
  Heading,
  Paper,
  ThemeProvider,
  ThemeSwitch,
  useThemeController,
} from '@committed/ds'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Components/ThemeSwitch',
  component: ThemeSwitch,
} as Meta

export const Default: StoryFn = (args) => (
  <ThemeProvider local>
    <AppBar>
      <AppBarHeading>Example</AppBarHeading>
      <AppBarActions>
        <ThemeSwitch {...args} />
      </AppBarActions>
    </AppBar>
    <Paper>
      <Container css={{ height: '200px' }}>
        <Heading variant="h4">Theme switch</Heading>
      </Container>
    </Paper>
  </ThemeProvider>
)
Default.parameters = {
  docs: {
    source: {
      code: `
  <ThemeProvider>
    <AppBar>
      <AppBarHeading>Example</AppBarHeading>
      <AppBarActions>
        <ThemeSwitch {...args} />
      </AppBarActions>
    </AppBar>
    <Paper>
      <Container css={{ height: '200px' }}>
        <Heading variant="h4">Theme switch</Heading>
      </Container>
    </Paper>
  </ThemeProvider>
  `,
    },
  },
}

/**
 * A controllable version of the theme switch is provided which only has the UI.
 *
 * This an be used in situations where you need a different mechanism for theme switching such as Server Side Rendering.
 *
 * Here we just reuse the `useThemeController` hook as an example.
 */
export const SSR: StoryFn = () => {
  const [choice, toggle] = useThemeController()
  return (
    <ThemeProvider local choice={choice}>
      <AppBar>
        <AppBarHeading>Example</AppBarHeading>
        <AppBarActions>
          <ControlledThemeSwitch choice={choice} toggle={toggle} />
        </AppBarActions>
      </AppBar>
      <Paper>
        <Container css={{ height: '200px' }}>
          <Heading variant="h4">Theme switch</Heading>
        </Container>
      </Paper>
    </ThemeProvider>
  )
}
