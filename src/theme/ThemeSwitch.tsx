import { makeStyles } from '@material-ui/styles'
import { style } from '@material-ui/system'
import React from 'react'
import { IconButton } from '../components/iconbutton/IconButton'
import { Icons } from '../components/icons/Icons'
import { Logo } from '../components/logo/Logo'
import { PositioningProps, withPositioning } from '../internal'
import { Theme } from './'
import { ThemeChoice } from './theme'
import { useThemeController } from './ThemeProvider'

const styleColor = style({
  prop: 'color',
  themeKey: 'palette',
})

const selectColor = (theme: Theme) => ({
  lightColor,
  darkColor,
  themeChoice,
}: IconProps) => {
  const color = themeChoice === 'light' ? lightColor : darkColor
  return styleColor({ theme, color }).color
}

export interface BaseThemeSwitchProps {
  /**
   * The theme choice themeChoice selected
   * @deprecated - Supplied by context
   * @default media-query: prefers-color-scheme: dark
   */
  themeChoice?: ThemeChoice
  /**
   * Function to toggle the theme
   * @deprecated - Supplied by context
   */
  toggleThemeChoice?: () => void
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
   *  @default celestial
   */
  variant?: 'commit' | 'celestial'
}

interface IconProps {
  /**
   *  Theme based color from the palette form the light theme
   */
  lightColor: string
  /**
   *  Theme based color from the palette from the dark theme
   *
   */
  darkColor: string
  /**
   * The theme choice themeChoice selected
   */
  themeChoice: ThemeChoice
}

export const useStyles = makeStyles<Theme, IconProps>((theme) => ({
  color: {
    '& .commit_logo': {
      stroke: selectColor(theme),
      fill: selectColor(theme),
    },
    color: selectColor(theme),
  },
}))

const CommitIcon = (props: IconProps) => {
  const classes = useStyles(props)
  return <Logo size={24} className={classes.color} />
}

const CelestialIcon = (props: IconProps) => {
  const { themeChoice } = props
  const classes = useStyles(props)
  if (themeChoice === 'dark') {
    return <Icons.Brightness5 className={classes.color} />
  } else {
    return <Icons.Brightness3 className={classes.color} />
  }
}

export type ThemeSwitchProps = BaseThemeSwitchProps & PositioningProps

const Toggle = ({
  themeChoice,
  toggleThemeChoice,
  lightColor = 'brand.main',
  darkColor = 'brand.main',
  variant = 'celestial',
}: BaseThemeSwitchProps) => {
  const [choice, toggle] = useThemeController()

  // allow props to override theme until deprecated removed
  const internalChoice = themeChoice || choice
  const internalToggle = toggleThemeChoice || toggle

  const isLight = internalChoice === 'light'
  const title = isLight ? 'Use dark theme' : 'Use light theme'
  let icon
  switch (variant) {
    case 'commit':
      icon = (
        <CommitIcon
          themeChoice={internalChoice}
          lightColor={lightColor}
          darkColor={darkColor}
        />
      )
      break
    case 'celestial':
      icon = (
        <CelestialIcon
          themeChoice={internalChoice}
          lightColor={lightColor}
          darkColor={darkColor}
        />
      )
      break
    default:
      break
  }

  return (
    <IconButton
      color={isLight ? 'primary' : 'secondary'}
      onClick={internalToggle}
      title={title}
      aria-label="switch-theme"
    >
      {icon}
    </IconButton>
  )
}

export const ThemeSwitch: React.ComponentType<ThemeSwitchProps> = withPositioning<
  BaseThemeSwitchProps
>(Toggle)
