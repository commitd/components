import React, {
  createContext,
  useState,
  useLayoutEffect,
  useCallback,
} from 'react'
import type { Theme } from '../../stitches.config'
import { lightTheme, darkTheme } from '../../stitches.config'

export type ThemeChoice = 'light' | 'dark'

export interface ThemeControllerProps {
  /**
   * The light theme
   *
   */
  light?: Theme
  /**
   * The dark theme
   */
  dark?: Theme
  /**
   * Force the theme choice, if null use browser preference
   */
  choice?: null | ThemeChoice
  /**
   * Elements to be themed
   */
  children?: React.ReactNode
}

export const ThemeContext = createContext<{
  choice: ThemeChoice
  theme: Theme | undefined
  toggle: () => void
}>({
  choice: 'light',
  theme: undefined,
  toggle: () => undefined,
})

export const ThemeController: React.FC<ThemeControllerProps> = ({
  light = lightTheme,
  dark = darkTheme,
  choice = null,
  children,
}) => {
  const [themeChoice, setThemeChoice] = useState<ThemeChoice>('light')
  const [theme, setTheme] = useState<Theme>()

  const setThemeValues = useCallback(
    (mode: ThemeChoice) => {
      setThemeChoice(mode)

      let darkMode = false
      switch (choice) {
        case 'light':
          darkMode = false
          break
        case 'dark':
          darkMode = true
          break
        default:
          darkMode = mode === 'dark'
          break
      }

      setTheme(darkMode ? dark : light || undefined)
    },
    [choice, dark, light]
  )

  const setMode = (mode: ThemeChoice) => {
    window.localStorage.setItem('themeChoice', mode)
    setThemeValues(mode)
  }

  const toggleThemeChoice = () => {
    if (themeChoice === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      setThemeValues(e.matches ? 'dark' : 'light')
    })

  window
    .matchMedia('(prefers-color-scheme: light)')
    .addEventListener('change', (e) => {
      setThemeValues(e.matches ? 'light' : 'dark')
    })

  // paints the app before it renders elements
  useLayoutEffect(() => {
    const localTheme = window.localStorage.getItem('themeChoice') as ThemeChoice

    if (localTheme) {
      setThemeValues(localTheme)
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setThemeValues('dark')
    } else {
      setThemeValues('light')
    }
  }, [setThemeValues])

  return (
    <ThemeContext.Provider
      value={{
        choice: themeChoice,
        theme: theme,
        toggle: toggleThemeChoice,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
