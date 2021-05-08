import { ThemeRule } from '@stitches/react'
import React, { FC, useContext } from 'react'
import { darkTheme, globalStyles, lightTheme } from 'stitches.config'
import { ThemeChoice, ThemeContext, ThemeController } from './ThemeController'
export interface ThemeProviderProps {
  /**
   * The light theme
   */
  light?: ThemeRule
  /**
   * The dark theme
   */
  dark?: ThemeRule
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
  light = lightTheme,
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

  const theme = darkMode ? dark.className : light.className

  return <div className={theme}>{children}</div>
}

/** The provider to use if you want to customise the theme */
export const ThemeProvider: FC<ThemeProviderProps> = (props) => (
  <ThemeController>
    <ControlledThemeProvider {...props} />
  </ThemeController>
)
