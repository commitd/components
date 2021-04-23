import React from 'react'

export type ThemeChoice = 'light' | 'dark'

export const ThemeContext = React.createContext<{
  choice: ThemeChoice
  toggle: () => void
}>({
  choice: 'light',
  toggle: () => {},
})

export const ThemeController: React.FC = (props) => {
  const [themeChoice, setThemeChoice] = React.useState<ThemeChoice>('light')

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

  // paints the app before it renders elements
  React.useLayoutEffect(() => {
    const localTheme = window.localStorage.getItem('themeChoice') as ThemeChoice

    if (localTheme) {
      setThemeChoice(localTheme)
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setThemeChoice('dark')
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        choice: themeChoice,
        toggle: toggleThemeChoice,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}
