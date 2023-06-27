import React, { FC, useContext, useEffect, useRef } from 'react'
import { Theme } from '../../stitches.config'
import {
  ThemeChoice,
  ThemeContext,
  ThemeController,
  ThemeControllerProps,
} from './ThemeController'

// Import the pandas css
import '../../index.css'

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

export const useTheme = (): [Theme | undefined, (token: string) => string] => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  const resolveValue = (token: string): string => {
    if (token.startsWith('$')) {
      const theme = context.theme
      if (theme === undefined) {
        return token
      }
      const reference = token.split('$')
      const type = reference[1]
      const instance = reference[2]
      if (type === undefined || instance === undefined) {
        throw new Error('Token must be fully referenced')
      }

      /* eslint-disable @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument */
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return resolveValue(theme[type][instance]?.value)
      /* eslint-enable @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument */
    }
    if (token.startsWith('var')) {
      return resolveValue(token.replace(/var\(--(\w*)-(\w*)\)/, '$$$1$$$2'))
    }
    return token
  }

  return [context.theme, resolveValue]
}

//--------------------------- main components ----------------------------------------//

const ControlledThemeProvider: FC<ThemeProviderProps> = ({
  local = false,
  children,
}: ThemeProviderProps) => {
  const prevThemeRef = useRef<Theme>()
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
    return <div className={theme}>{children}</div>
  } else {
    const prevTheme = prevThemeRef.current
    if (prevTheme) {
      document.body.classList.remove(prevTheme)
    }
    if (theme) {
      document.body.classList.add(theme)
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
