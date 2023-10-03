import {
  ArgsTable,
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from '@storybook/blocks'
import { Preview } from '@storybook/react'
import React from 'react'
import '../stories/panda.css'
import { DocsContainer } from './committed/DocsContainer'
import { committedDark, committedLight } from './committed/theme'
import { WithTheme } from './committed/withTheme'

const decorators = [WithTheme]
const docs = {
  container: DocsContainer,
  theme: committedDark,
  page: () => (
    <>
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      <Controls />
      <ArgsTable />
      <Stories />
    </>
  ),
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
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
    docs,
    darkMode: {
      stylePreview: true,
      dark: committedDark,
      darkClass: 'dark',
      light: committedLight,
      lightClass: 'light',
    },
  },
  decorators,
}

export default preview
