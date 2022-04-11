import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { IconButton } from '../IconButton'
import { DarkMode, LightMode } from '../Icons'
import { useThemeController } from '../ThemeProvider'
import { ThemeChoice } from '../ThemeProvider/ThemeController'

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

type ControlledThemeSwitchProps = ThemeSwitchProps & {
  choice: ThemeChoice
  toggle: () => void
}

const THEME_SWITCH_CLASS_NAME = 'c-theme-switch'

/**
 * This theme switch component is UI only and can be used to make a theme switch in a SSR setting.
 */
export const ControlledThemeSwitch = forwardRef<
  ElementRef<typeof IconButton>,
  ControlledThemeSwitchProps
>(
  (
    {
      lightColor = '$brandContrast',
      darkColor = '$brandContrast',
      className,
      choice,
      toggle,
      ...props
    },
    forwardedRef
  ) => {
    const isLight = choice === 'light'
    const title = isLight ? 'Use dark theme' : 'Use light theme'
    const icon = isLight ? <LightMode /> : <DarkMode />

    return (
      <IconButton
        ref={forwardedRef}
        className={`${THEME_SWITCH_CLASS_NAME} ${className}`}
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
ControlledThemeSwitch.toString = () => `.${THEME_SWITCH_CLASS_NAME}`

/**
 * The theme switch component can be used to switch from light to dark mode explicitly.
 *
 * Use the underlying hook `useThemeController` to create your own theme switch.
 */
export const ThemeSwitch = forwardRef<
  ElementRef<typeof ControlledThemeSwitch>,
  ThemeSwitchProps
>((props, forwardedRef) => {
  const [choice, toggle] = useThemeController()
  return (
    <ControlledThemeSwitch
      {...props}
      ref={forwardedRef}
      choice={choice}
      toggle={toggle}
    />
  )
})
ThemeSwitch.toString = () => `.${THEME_SWITCH_CLASS_NAME}`
