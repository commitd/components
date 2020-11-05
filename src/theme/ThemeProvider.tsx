import { CssBaseline, Theme } from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import React, { FC } from 'react'
import { createCommittedThemes, createMaterialThemes } from './createTheme'
import { ThemeContext, ThemeController } from './ThemeController'
import { ThemeChoice } from './types'

export interface ThemeProviderProps {
  /**
   * The light theme
   */
  light: Theme
  /**
   * The dark theme
   */
  dark: Theme
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
  const { choice, toggle } = React.useContext(ThemeContext)
  return [choice, toggle]
}

const ControlledThemeProvider: FC<ThemeProviderProps> = ({
  light,
  dark,
  choice = null,
  children,
}: ThemeProviderProps) => {
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

  const theme = darkMode ? dark : light

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

/** The provider to use if you want to customise the theme */
export const CustomThemeProvider: FC<ThemeProviderProps> = (props) => (
  <ThemeController>
    <ControlledThemeProvider {...props} />
  </ThemeController>
)

/** The (default) provider to use, with Committed styles */
export const ThemeProvider: FC<Omit<ThemeProviderProps, 'light' | 'dark'>> = (
  props
) => <CustomThemeProvider {...props} {...createCommittedThemes()} />

/** A convenience provider to use with default Material Styles. */
export const MaterialThemeProvider: FC<Omit<
  ThemeProviderProps,
  'light' | 'dark'
>> = (props) => <CustomThemeProvider {...props} {...createMaterialThemes()} />
