import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { ThemeProvider } from '../../src'

/**
 * Wrap a component with the default ThemeProvider
 * Switched according to the storybook-dark-mode plugin
 *
 */
export const SwitchedThemeProvider: React.FC = (props) => {
  const choice = useDarkMode() ? 'dark' : 'light'
  return <ThemeProvider choice={choice} {...props} />
}
