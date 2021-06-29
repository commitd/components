import React, { FC, useContext } from 'react'
import { globalStyles, Theme } from '../../stitches.config'
import {
  ThemeChoice,
  ThemeContext,
  ThemeController,
  ThemeControllerProps,
} from './ThemeController'
export interface ThemeProviderProps extends ThemeControllerProps {
  /**
   * Elements to be themed
   */
  children?: React.ReactNode
}

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
    const reference = token.split('$')
    const theme = context.theme
    const type = reference[1]
    const instance = reference[2]
    if (type === undefined || instance === undefined) {
      throw new Error('Token must be fully referenced')
    }
    if (theme === undefined) {
      return token
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const value: string = (theme[type][instance]?.value || '') as string
    if (value.startsWith('var')) {
      return resolveValue(value.replace(/var\(--(\w*)-(\w*)\)/, '$$$1$$$2'))
    } else {
      return value
    }
  }

  return [context.theme, resolveValue]
}

const ControlledThemeProvider: FC<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => {
  globalStyles()
  const [theme] = useTheme()
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
