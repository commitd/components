import React, { FC, useContext } from 'react'
import { darkTheme, globalStyles } from 'stitches.config'
import { ThemeChoice, ThemeContext, ThemeController } from './ThemeController'
export interface ThemeProviderProps {
  /**
   * The light theme
   *
   * This defaults to the empty string, as by default the light theme is applied.
   * If your theme provider might be nested inside another theme provider then this
   * should force the light theme by setting this to the exported `lightTheme` or
   * you own light theme.
   *
   */
  light?: string
  /**
   * The dark theme
   */
  dark?: string
  /**
   * Force the theme choice, if null use browser preference
   */
  choice?: null | ThemeChoice
  /**
   * Elements to be themed
   */
  children?: React.ReactNode
}

export const useThemeController = (): [ThemeChoice, () => void] => {
  const { choice, toggle } = useContext(ThemeContext)
  return [choice, toggle]
}

const ControlledThemeProvider: FC<ThemeProviderProps> = ({
  light = '',
  dark = darkTheme,
  choice = null,
  children,
}: ThemeProviderProps) => {
  globalStyles()
  const [controllerChoice] = useThemeController()

  let darkMode = false
  switch (choice) {
    case 'light':
      darkMode = false
      break
    case 'dark':
      darkMode = true
      break
    default:
      darkMode = controllerChoice === 'dark'
      break
  }

  const theme = darkMode ? dark : light || undefined

  return <div className={theme}>{children}</div>
}

/**
 * The `ThemeProvider` should wrap you application.
 *
 * By default it will switch from light to dark mode depending on the users preference determined by the
 * `prefers-color-scheme: dark` media query. You can fix the theme by setting the `choice` prop.
 *
 * The themes can be overridden using the exported `theme` function and set on the `light` and `dark` props.
 *
 * The `ThemeSwitch` component can also be used to switch the theme.
 */
export const ThemeProvider: FC<ThemeProviderProps> = (props) => (
  <ThemeController>
    <ControlledThemeProvider {...props} />
  </ThemeController>
)
