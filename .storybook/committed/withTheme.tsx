import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { ThemeProvider } from '../../src'
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
  const choice = useDarkMode() ? 'dark' : 'light'
  if (choice === 'dark') {
    document.body.classList.add('dark-theme')
  } else {
    document.body.classList.remove('dark-theme')
  }
  return (
    <ThemeProvider choice={choice}>
      <Story />
    </ThemeProvider>
  )
}
