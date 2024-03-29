import '@fontsource/dosis/300.css'
import '@fontsource/dosis/400.css'
import '@fontsource/dosis/700.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { ComponentsProvider } from '../../components'

/**
 * Wrap a component with the default ThemeProvider
 */
export const DocWrapper: React.FC = ({ children }) => {
  const choice = useDarkMode() ? 'dark' : 'light'
  return (
    <ComponentsProvider theme={{ choice, local: true }}>
      {children}
    </ComponentsProvider>
  )
}
