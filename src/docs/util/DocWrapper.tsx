import '@fontsource/dosis/300.css'
import '@fontsource/dosis/400.css'
import '@fontsource/dosis/700.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { ThemeProvider } from '../../components/ThemeProvider'

/**
 * Wrap a component with the default ThemeProvider
 */
export const DocWrapper: React.FC = ({ children }) => {
  const choice = useDarkMode() ? 'dark' : 'light'
  return (
    <ThemeProvider local choice={choice}>
      {children}
    </ThemeProvider>
  )
}
