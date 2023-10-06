import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  Card,
  Monospace,
  Paper,
  Paragraph,
  Span,
  Switch,
  ThemeProvider,
  component,
  useTheme,
  useThemeController,
} from '@committed/ds'
import { css, token } from '@committed/ss'
import type { Meta, StoryFn, StoryObj } from '@storybook/react'

export default {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
  decorators: [],
} satisfies Meta<typeof ThemeProvider>

type Story = StoryObj<typeof ThemeProvider>

const Example = component(
  Paper,
  css({
    padding: '$4',
    width: '100%',
    height: '300px',
  }),
)

const Template = {
  render: (args) => (
    <ThemeProvider local={true} {...args}>
      <Example>Example</Example>
    </ThemeProvider>
  ),
}

export const Default: Story = {
  render: () => <Example>Example</Example>,
  parameters: {
    docs: {
      source: {
        code: `
<ThemeProvider>
  <Paper>Example</Paper>
</ThemeProvider>
`,
      },
    },
  },
}

/**
 * Selects the Dark theme
 */
export const Dark: Story = {
  ...Template,
  args: {
    choice: 'dark',
  },
  parameters: {
    docs: {
      source: {
        code: `
<ThemeProvider choice='dark'>
  <Paper>Example</Paper>
</ThemeProvider>
`,
      },
    },
  },
}

/**
 * Selects the Light theme
 *
 * (NB As this provider is nested we provide the lightTheme explicitly so it will override any higher level dark theme.)
 */
export const Light: Story = {
  ...Template,
  args: {
    choice: 'light',
  },
  parameters: {
    docs: {
      source: {
        code: `
<ThemeProvider choice='light' light={lightTheme}>
  <Paper>Example</Paper>
</ThemeProvider>
`,
      },
    },
  },
}
/**
 * The `useThemeController` hook can be used to get the theme choice state and a toggle function.
 * This can be used to build a custom theme switch.
 */
export const UtilityUseThemeController: StoryFn = () => {
  const CustomSwitch = () => {
    const [choice, toggleChoice] = useThemeController()
    return <Switch checked={choice == 'dark'} onCheckedChange={toggleChoice} />
  }
  return (
    <ThemeProvider local={true}>
      <Card css={{ padding: '$6', margin: '$2' }}>
        <CustomSwitch />
      </Card>
    </ThemeProvider>
  )
}

/** The `useTheme` hook can be used to get the current theme. */
export const UtilityUseTheme: StoryFn = () => {
  const [theme] = useTheme()
  return (
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionHeader>
          <Monospace>Show theme</Monospace>
        </AccordionHeader>
        <AccordionContent>
          <Monospace>{JSON.stringify(theme, null, 2)}</Monospace>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

/**
 * The `token` function also provides a utility to dereference theme tokens.
 * This can be used in case the theme details are required outside of the normal css landscape.
 *
 * NB this currently resolves to intermediate css vars but this may change later.
 * */
export const UtilityTokenFunction: StoryFn = () => {
  const [theme] = useTheme()
  return (
    <>
      <Paragraph>
        The token <Span font="monospace">spacing.$3</Span> resolves to{' '}
        <Span font="monospace">{token('spacing.$3')}</Span>
      </Paragraph>
      <Paragraph>
        The token <Span font="monospace">colors.$success.3</Span> resolves to{' '}
        <Span font="monospace">{token('colors.$success.3')}</Span>
      </Paragraph>
      <Paragraph>
        The token <Span font="monospace">colors.$surface.solid</Span> resolves
        to <Span font="monospace">{token('colors.$surface.solid')}</Span>
      </Paragraph>
    </>
  )
}
