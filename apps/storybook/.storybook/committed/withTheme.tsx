import { ComponentsProvider } from '@committed/ds'
import { DecoratorHelpers } from '@storybook/addon-themes'
import React from 'react'

const { initializeThemeState, pluckThemeFromContext, useThemeParameters } =
  DecoratorHelpers

import '@fontsource/dosis'
import '@fontsource/inter'

/**
 * Wrap a component with the default ThemeProvider
 *
 * @param {*} Story storybook component to wrap
 */
export const withTheme = ({ themes, defaultTheme }) => {
  initializeThemeState(Object.keys(themes), defaultTheme)
  return (Story, context) => {
    const selectedTheme = pluckThemeFromContext(context)
    const { themeOverride } = useThemeParameters()

    const selected = themeOverride || selectedTheme || defaultTheme

    return (
      <ComponentsProvider theme={{ choice: selected }}>
        <Story />
      </ComponentsProvider>
    )
  }
}
