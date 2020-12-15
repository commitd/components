import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { ThemeProvider, Box } from '../../src'

/**
 * Wrap a component with the default ThemeProvider
 *
 * @param {*} Story storybook component to wrap
 */
export const withTheme = (Story) => {
  const choice = useDarkMode() ? 'dark' : 'light'
  return (
    <ThemeProvider choice={choice}>
      {/* Temporary background until themeing in docs is supported */}
      <Box bgcolor="background.paper" p={3}>
        <Story />
      </Box>
    </ThemeProvider>
  )
}
