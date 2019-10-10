import React from 'react'
import { configure } from '@storybook/react'
import { addParameters, addDecorator } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import { ThemeProvider } from '../src'
import { withA11y } from '@storybook/addon-a11y'
import { create } from '@storybook/theming'

const storybookTheme = create({
  base: 'light',

  colorPrimary: '#ffbb00',
  colorSecondary: '#4098D7',

  // Typography
  fontBase: 'Lato, Geneva, Tahoma, sans-serif',
  fontCode: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',

  brandTitle: 'Committed Components',
  brandUrl: '/',
  brandImage: 'static/media/Committed-Colour-512px.d1e67fad.png'
})

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>)
addDecorator(withA11y)

addParameters({
  docsContainer: DocsContainer,
  docs: DocsPage,
  options: {
    theme: storybookTheme
  }
})

configure(require.context('../src', true, /\.stories\.(tsx|mdx)$/), module)
