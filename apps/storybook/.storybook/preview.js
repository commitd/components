/** @type { import('@storybook/react').Preview } */
import '../stories/panda.css'
import { DocsContainer } from './committed/DocsContainer'
import { committedDark, committedLight } from './committed/theme'
import { WithTheme } from './committed/withTheme'

const decorators = [WithTheme]
const docs = {
  container: DocsContainer,
}

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
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
  decorators,
  docs,
  darkMode: {
    stylePreview: true,
    dark: committedDark,
    darkClass: 'dark',
    light: committedLight,
    lightClass: 'light',
  },
}

export default preview
