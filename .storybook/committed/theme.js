import { create } from '@storybook/theming'

const overrides = {
  colorPrimary: '#ffbb00',
  colorSecondary: '#4098D7',

  // Typography
  fontBase:
    'Inter, -apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"',
  fontCode:
    '"SFMono-Regular", Consolas, "Liberation Mono", "Andale Mono", "Ubuntu Mono", Menlo, Courier, monospace',

  brandTitle: 'Committed Components',
  brandUrl: '/',
}

export const committedLight = create({
  ...overrides,
  base: 'light',
  brandImage: 'https://committed.software/Committed_Light.svg',
})

export const committedDark = create({
  ...overrides,
  base: 'dark',
  brandImage: 'https://committed.software/Committed_Dark.svg',
})
