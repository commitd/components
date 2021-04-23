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
