import { Meta, Story } from '@storybook/react'
import React from 'react'
import {
  lightTheme,
  styled,
  theme,
  config,
  darkThemeConfig,
} from '../../stitches.config'
import { ThemeProvider, ThemeProviderProps } from '.'
import { Paper } from '../Paper'
import { Monospace } from '../Text'

export default {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
  decorators: [],
} as Meta

const Example = styled(Paper, {
  width: '100%',
  height: '300px',
})

const Template: Story<ThemeProviderProps> = (args) => (
  <ThemeProvider {...args}>
    <Example>Example</Example>
  </ThemeProvider>
)

export const Default = () => <Example>Example</Example>
Default.parameters = {
  docs: {
    source: {
      code: `
<ThemeProvider>
  <Paper>Example</Paper>
</ThemeProvider>
`,
    },
  },
}

/**
 * Selects the Dark theme
 */
export const Dark = Template.bind({})
Dark.args = {
  choice: 'dark',
}
Dark.parameters = {
  docs: {
    source: {
      code: `
<ThemeProvider choice='dark'>
  <Paper>Example</Paper>
</ThemeProvider>
`,
    },
  },
}

/**
 * Selects the Light theme
 *
 * (NB As this provider is nested we provide the lightTheme explicitly so it will override any higher level dark theme.)
 */
export const Light = Template.bind({})
Light.args = {
  light: lightTheme,
  choice: 'light',
}
Light.parameters = {
  docs: {
    source: {
      code: `
<ThemeProvider choice='light' light={lightTheme}>
  <Paper>Example</Paper>
</ThemeProvider>
`,
    },
  },
}

/**
 * To provide your own themes use the exported `theme` function and override the parts of the theme you wish to change.
 *
 * See the existing theme properties below for what can be configured.
 *
 */
export const CustomLight = Template.bind({})
CustomLight.args = {
  choice: 'light',
  light: theme({
    ...config.theme,
    colors: {
      ...config.theme.colors,
      text: '$blue10',
      paper: '$blue3',
    },
  }),
}
CustomLight.parameters = {
  docs: {
    source: {
      code: `
import { theme, ThemeProvider, Paper } from '@committed/components'

const customTheme = theme({
  colors: {
    text: '$blue10',
    paper: '$blue3',
  }
})

export const CustomThemeProvider = () => (
  <ThemeProvider choice='light', light={customTheme}>
    <Paper>Example</Paper>
  </ThemeProvider>
)
`,
    },
  },
}

/**
 * For convenience the existing `darkThemeConfig` is exported.
 * This can be used as a starting point for custom dark themes.
 */
export const CustomDark = Template.bind({})
CustomDark.args = {
  choice: 'dark',
  dark: theme({
    ...darkThemeConfig,
    colors: {
      ...darkThemeConfig.colors,
      text: '$blue10',
      paper: '$blue3',
    },
  }),
}
CustomDark.parameters = {
  docs: {
    source: {
      code: `
 import { theme, ThemeProvider, Paper, darkThemeConfig } from '@committed/components'
 
 const customTheme = theme({
  ...darkThemeConfig,
  colors: {
    ...darkThemeConfig.colors,
    text: '$blue10',
    paper: '$blue3',
  },
 })
 
 export const CustomThemeProvider = () => (
   <ThemeProvider choice='light', light={customTheme}>
     <Paper>Example</Paper>
   </ThemeProvider>
 )
 `,
    },
  },
}

/**
 *
 * The properties below can be overridden to create a custom theme.
 *
 * Further tokens can be added for your own use in the `styled` function and `css` props.
 *
 * For more information see https://stitches.dev/docs/theming
 */
export const ThemeConfig = () => (
  <Paper>
    <Monospace>{JSON.stringify(config.theme, null, 2)}</Monospace>
  </Paper>
)
