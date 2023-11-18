'use client'

import { cx } from '@committed/ds-ss'
import { FC, useContext, useEffect, useRef } from 'react'
import {
  ThemeChoice,
  ThemeContext,
  ThemeController,
  ThemeControllerProps,
} from './ThemeController'

// Import the fonts
// This current causes issues with the storybook dev
// import '@fontsource/dosis'
// import '@fontsource/inter'

export interface ThemeProviderProps extends ThemeControllerProps {
  /**
   * By default the theme is applied globally, using the `body` element.
   *
   * Set `local` to `true` to only apply the theme locally. This can be used in cases where a nested theme is required.
   */
  local?: boolean
}

//------------------------ Utility hooks -----------------------------//

export const useThemeController = (): [ThemeChoice, () => void] => {
  const { choice, toggle } = useContext(ThemeContext)
  if (!toggle) {
    throw new Error('useThemeController must be used within a ThemeProvider')
  }
  return [choice, toggle]
}

export const useTheme = (): [string | undefined] => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return [context.theme]
}

//--------------------------- main components ----------------------------------------//

const ControlledThemeProvider: FC<ThemeProviderProps> = ({
  local = false,
  children,
}: ThemeProviderProps) => {
  const prevThemeRef = useRef<string>()
  const [theme] = useTheme()

  useEffect(() => {
    prevThemeRef.current = theme

    return () => {
      if (theme) {
        document.body.classList.remove(theme)
      }
    }
  })

  if (local) {
    return (
      <div
        className={cx('c-theme-provider', theme)}
        data-testid="theme-provider"
      >
        {children}
      </div>
    )
  } else {
    const prevTheme = prevThemeRef.current
    if (prevTheme !== theme) {
      if (prevTheme) {
        document.body.classList.remove(prevTheme)
      }
      if (theme) {
        document.body.classList.add(theme)
      }
    }
    return <>{children}</>
  }
}

/**
 * The `ComponentsProvider`should wrap you application, it includes the `ThemeProvider`.
 *
 * By default it will switch from light to dark mode depending on the users preference determined by the
 * `prefers-color-scheme: dark` media query. You can fix the theme by setting the `choice` prop.
 *
 * The themes can be overridden using the exported `theme` function and set on the `light` and `dark` props.
 *
 * The `ThemeSwitch` component can also be used to switch the theme.
 */
export const ThemeProvider: FC<ThemeProviderProps> = ({
  light,
  dark,
  choice,
  ...props
}) => (
  <ThemeController light={light} dark={dark} choice={choice}>
    <ControlledThemeProvider {...props} />
  </ThemeController>
)
