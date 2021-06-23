import React, { ComponentProps, forwardRef } from 'react'
import { IconButton } from '../IconButton'
import { DarkMode, LightMode } from '../Icons'
import { useThemeController } from '../ThemeProvider'

type ThemeSwitchProps = ComponentProps<typeof IconButton> & {
  /**
   *  Theme based color from the palette form the light theme, defaults to
   *  @default $brandContrast
   */
  lightColor?: string
  /**
   *  Theme based color from the palette from the dark theme, defaults to
   *  @default $brandContrast
   */
  darkColor?: string
}

/**
 * The theme switch component can be used to switch from light to dark mode explicitly.
 *
 * Use the underlying hook `useThemeController` to create your own theme switch.
 */
export const ThemeSwitch = forwardRef<HTMLButtonElement, ThemeSwitchProps>(
  (
    { lightColor = '$brandContrast', darkColor = '$brandContrast', ...props },
    ref
  ) => {
    const [choice, toggle] = useThemeController()

    const isLight = choice === 'light'
    const title = isLight ? 'Use dark theme' : 'Use light theme'
    const icon = isLight ? <LightMode /> : <DarkMode />

    return (
      <IconButton
        ref={ref}
        onClick={toggle}
        title={title}
        aria-label="switch-theme"
        {...props}
        css={{ color: isLight ? lightColor : darkColor }}
        variant="tertiary"
      >
        {icon}
      </IconButton>
    )
  }
)
