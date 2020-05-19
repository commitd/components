import * as React from 'react'
import { ThemeChoice } from '../../src'

// TODO: change to raw props when storybook issue fixed
export interface BaseThemeSwitchProps {
  /**
   *  Change to the style of the buttons
   *  @default commit
   */
  variant?: 'commit' | 'celestial'
  /**
   *  Theme based color from the palette form the light theme, defaults to
   *  @default brand.main
   */
  lightColor?: string
  /**
   *  Theme based color from the palette from the dark theme, defaults to
   *  @default brand.main
   */
  darkColor?: string
  /**
   * __Deprecated__
   *
   * The theme choice themeChoice selected
   * @deprecated - Supplied by context
   * @default media-query: prefers-color-scheme: dark
   */
  themeChoice?: ThemeChoice
  /**
   * __Deprecated__
   *
   * Function to toggle the theme
   * @deprecated - Supplied by context
   */
  toggleThemeChoice?: () => void
}

export const ThemeSwitchDocs: React.FC<BaseThemeSwitchProps> = (
  props: BaseThemeSwitchProps
) => null
