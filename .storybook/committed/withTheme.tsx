import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { ComponentsProvider, darkTheme, lightTheme } from '../../src'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/dosis/700.css'
import '@fontsource/dosis/400.css'
import '@fontsource/dosis/300.css'

/**
 * Wrap a component with the default ThemeProvider
 *
 * @param {*} Story storybook component to wrap
 */
export const withTheme = (Story) => {
  // Clean the theme first
  document.body.classList.remove(darkTheme)
  document.body.classList.remove(lightTheme)

  const choice = useDarkMode() ? 'dark' : 'light'
  return (
    <ComponentsProvider theme={{ choice }}>
      <Story />
    </ComponentsProvider>
  )
}
