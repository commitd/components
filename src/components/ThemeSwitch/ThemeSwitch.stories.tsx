import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ThemeSwitch } from '.'
import { AppBar, AppBarActions, AppBarHeading } from '../AppBar'
import { Container } from '../Container'
import { Heading } from '../Heading'
import { Paper } from '../Paper'
import { ThemeProvider } from '../ThemeProvider'
import { lightTheme } from '../../stitches.config'

export default {
  title: 'Components/ThemeSwitch',
  component: ThemeSwitch,
} as Meta

export const Default: Story = (args) => (
  <ThemeProvider light={lightTheme}>
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
