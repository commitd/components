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
    theme: storybookTheme,
    storySort: (a, b) => {
      if (a[1].kind === b[1].kind) {
        return 0
      }
      if (a[1].parameters && a[1].parameters.order) {
        return a[1].parameters.order - b[1].parameters.order
      } else {
        return a[1].id.localeCompare(b[1].id, { numeric: true })
      }
    }
  }
})

configure(require.context('../src', true, /\.stories\.(tsx|mdx)$/), module)
