import { withTheme } from './committed/withTheme'
import { DocsContainer } from './components/DocsContainer'
import { committedDark, committedLight } from './committed/theme.js'

export const decorators = [withTheme]
export const parameters = {
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
    dark: committedDark,
    light: committedLight,
  },
}

export const globalTypes = {
  portalled: {
    name: 'Portalled',
    description:
      'Switch control the use of react portals for overlay components e.g Tooltip',
    defaultValue: 'true',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'true', right: '🪟', title: 'Use Portals' },
        { value: 'false', right: '🚪', title: 'No Portals' },
      ],
    },
  },
}
