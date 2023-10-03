import { ComponentsProvider } from '@committed/ds'
import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'

import '@fontsource/dosis'
import '@fontsource/inter'

/**
 * Wrap a component with the default ThemeProvider
 *
 * @param {*} Story storybook component to wrap
 */
export const WithTheme = (Story) => {
  // Clean the theme first
  document.body.classList.remove('dark')
  document.body.classList.remove('light')

  const choice = useDarkMode() ? 'dark' : 'light'
  return (
    <ComponentsProvider theme={{ choice }}>
      <Story />
    </ComponentsProvider>
  )
}
