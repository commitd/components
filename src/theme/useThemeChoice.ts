import { useEffect, useState } from 'react'
import { ThemeChoice } from './types'

/**
 * DEPRECATED
 *
 * Use ThemeController instead.
 */
export const useThemeChoice: () => [ThemeChoice, () => void, boolean] = () => {
  const [themeChoice, setThemeChoice] = useState<ThemeChoice>('light')
  const [componentMounted, setComponentMounted] = useState(false)
  const setMode = (mode: ThemeChoice) => {
    window.localStorage.setItem('themeChoice', mode)
    setThemeChoice(mode)
  }

  const toggleThemeChoice = () => {
    if (themeChoice === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('themeChoice') as ThemeChoice
    if (localTheme) {
      setThemeChoice(localTheme)
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setThemeChoice('dark')
    }
    setComponentMounted(true)
  }, [])

  return [themeChoice, toggleThemeChoice, componentMounted]
}
