import { committedLight } from './committed/theme.js'
import { withTheme } from './committed/withTheme'

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
    theme: committedLight,
  },
}
