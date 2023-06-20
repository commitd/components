import type { Preview } from '@storybook/react'
import { committedDark, committedLight } from './committed/theme.js'
import { withTheme } from './committed/withTheme'
import { DocsContainer } from './components/DocsContainer'

export const decorators = [withTheme]
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Design System',
          [
            'Introduction',
            'Getting Started',
            'Design Principles',
            'Colour',
            'Typography',
            'Positioning',
            'Spacing',
            'Overview',
            'Utils',
            'Status',
          ],
          'Components',
        ],
      },
    },
    docs: {
      container: DocsContainer,
    },
    darkMode: {
      stylePreview: true,
      dark: committedDark,
      darkClass: 'dark-theme',
      light: committedLight,
      lightClass: 'light-theme',
    },
  },
}

export default preview
