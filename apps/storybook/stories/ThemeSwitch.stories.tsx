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
import { expect } from '@storybook/jest'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'

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

export const TestThemeSwitch: StoryObj<typeof ThemeSwitch> = {
  render: Default,

  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    const wrapper = await screen.findByTestId('theme-provider')
    const current = wrapper.className.includes('light') ? 'light' : 'dark'

    const button = await screen.findByRole('button')
    userEvent.click(button)
    await waitFor(async () =>
      expect(await screen.findByTestId('theme-provider')).toHaveClass(
        current === 'light' ? 'dark' : 'light',
      ),
    )
    userEvent.keyboard('[Enter]')
    await waitFor(async () =>
      expect(await screen.findByTestId('theme-provider')).toHaveClass(
        current === 'light' ? 'light' : 'dark',
      ),
    )
  },
}
