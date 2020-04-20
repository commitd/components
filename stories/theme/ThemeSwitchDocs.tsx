import * as React from 'react'
import { ThemeChoice } from '../../src'

// TODO: change to raw props when storybook issue fixed
export interface BaseThemeSwitchProps {
  /**
   * The theme choice mode selected
   */
  mode?: ThemeChoice
  /**
   * Function to toggle the theme
   * @default media-query: prefers-color-scheme: dark
   */
  toggleTheme: () => void
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
   *  Change to the style of the buttons
   *  @default commit
   */
  variant?: 'commit' | 'celestial'
}

export const ThemeSwitchDocs: React.FC<BaseThemeSwitchProps> = (
  props: BaseThemeSwitchProps
) => null
