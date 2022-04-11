import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ControlledThemeSwitch, ThemeSwitch } from '.'
import { AppBar, AppBarActions, AppBarHeading } from '../AppBar'
import { Container } from '../Container'
import { Heading } from '../Heading'
import { Paper } from '../Paper'
import { ThemeProvider, useThemeController } from '../ThemeProvider'
import { lightTheme } from '../../stitches.config'

export default {
  title: 'Components/ThemeSwitch',
  component: ThemeSwitch,
} as Meta

export const Default: Story = (args) => (
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
export const SSR: Story = () => {
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
