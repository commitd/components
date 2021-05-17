import { withTheme } from './committed/withTheme'
import { DocsContainer } from './components/DocsContainer'

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
}

export const globalTypes = {
  portalled: {
    name: 'Portalled',
    description:
      'Switch control the use of react portals for overlay components e.g Tooltip',
    defaultValue: 'false',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'true', right: '🪟', title: 'Use Portals' },
        { value: 'false', right: '🚪', title: 'No Portals' },
      ],
    },
  },
}
