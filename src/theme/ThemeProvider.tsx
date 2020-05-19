import {
  createMuiTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeOptions,
} from '@material-ui/core'
import createMuiPalette, {
  Palette,
  PaletteOptions,
} from '@material-ui/core/styles/createPalette'
import { SpacingOptions } from '@material-ui/core/styles/createSpacing'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import { Overrides } from '@material-ui/core/styles/overrides'
import { ShapeOptions } from '@material-ui/core/styles/shape'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import deepmerge from 'deepmerge'
import React, { FC } from 'react'
import {
  committedDarkPaletteColors,
  createCommittedDarkOverrides,
  createCommittedDarkPaletteOptions,
} from './darkTheme'
import { materialFonts } from './fonts'
import {
  committedLightPaletteColors,
  createCommittedLightOverrides,
  createCommittedLightPaletteOptions,
} from './lightTheme'
import {
  createCommittedFonts,
  createCommittedShape,
  createCommittedSpacing,
  createCommittedTypography,
  FontOptions,
  ThemeChoice,
} from './theme'
import { ThemeController, ThemeContext } from './ThemeController'
import { augmentColor } from './themeMaterialUtil'

export interface ThemeProps {
  /**
   *  Should either return a `theme.FontOptions` object to replace the Committed theme defaults, or it should return undefined to use the Material-UI defaults.
   *
   *  default is used for Typography,
   *  text for Text, display for Display and mono for Monospace.
   *
   *  typography: { fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"'},
   *  heading: { fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"'},
   *  subheading: { fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"'},
   *  text: { fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"'},
   *  display: {
   *   fontFamily: '"Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif',
   *   fontWeight: 700
   *  },
   *  monospace: { fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace' }
   *
   */
  createFonts: () => FontOptions | undefined
  /**
   * Should either return a [set of material-ui color intentions](https://material-ui.com/customization/palette/#customization) to replace the Committed theme defaults, or it should return undefined to use the Material-UI defaults.
   *
   * The material-ui colors can be specified: palette.primary, palette.secondary, palette.error, palette.warning, palette.info or palette.success
   *
   * Additionally, a committed-theme color can be specified: palette.brand
   */
  createPaletteOptions: () => PaletteOptions | undefined
  /**
   * Should either return material-ui shape options i.e. `{ borderRadius: xx }` to replace the Committed theme defaults, or it should return undefined to use the Material-UI defaults.
   */
  createShape: () => ShapeOptions | undefined
  /**
   * Should either return [material-ui spacing options](https://material-ui.com/customization/spacing/) to replace the Committed theme defaults, or it should return undefined to use the Material-UI defaults.
   */
  createSpacing: () => SpacingOptions | undefined
  /**
   * Should either return [material-ui typography options](https://material-ui.com/customization/typography/) to replace the Committed theme defaults, or it should return undefined to use the Material-UI defaults.
   */
  createTypography: () =>
    | TypographyOptions
    | ((palette: Palette) => TypographyOptions)
    | undefined
  /**
   * Should either return [material-ui overrides options](https://material-ui.com/customization/globals/) to replace the Committed theme defaults, or it should return undefined to use the Material-UI defaults. It is passed the palette created using the `createPaletteOptions()` prop
   */
  createOverrides: (palette: Palette) => Overrides | undefined
}

export interface ThemeProviderProps extends Partial<ThemeProps> {
  /**
   * Override ThemeProps for light theme
   */
  light?: Partial<ThemeProps>
  /**
   * Override ThemeProps for dark theme
   */
  dark?: Partial<ThemeProps>
  /**
   * Force the theme choice, if null use browser preference
   */
  choice?: null | ThemeChoice
  /**
   * Elements to be themed
   */
  children?: React.ReactNode
}

const createTheme = ({
  createPaletteOptions,
  createOverrides,
  createFonts,
  createShape,
  createSpacing,
  createTypography,
}: ThemeProps) => {
  const paletteOptions = createPaletteOptions() || {}
  const palette = createMuiPalette(paletteOptions)
  // createMuiPalette() "augments" inputted colors (that may be in several forms) to make them conform to {main: #xxxx, light:#xxxx ,...etc}
  // manually augment committed custom theme colors that createMuiPalette is not aware of
  palette.brand = augmentColor(
    paletteOptions ? paletteOptions.brand : palette.primary,
    palette.type == 'light'
      ? committedLightPaletteColors.brand
      : committedDarkPaletteColors.brand
  )

  let themeOptions: ThemeOptions = {
    palette,
  }

  let fonts = createFonts()
  if (fonts !== undefined) {
    themeOptions.fonts = fonts
  } else {
    // Need to resupply material fonts for extra defined types
    themeOptions.fonts = materialFonts
    fonts = materialFonts
  }

  const shape = createShape()
  if (shape !== undefined) {
    themeOptions.shape = shape
  }
  const spacing = createSpacing()
  if (spacing !== undefined) {
    themeOptions.spacing = spacing
  }
  const typography = createTypography()
  if (typography !== undefined) {
    themeOptions.typography = typography
  }
  const overrides = createOverrides(palette)
  if (overrides !== undefined) {
    themeOptions.overrides = overrides
  }

  const muiTheme = responsiveFontSizes(createMuiTheme(themeOptions))
  return deepmerge(muiTheme, { fonts })
}

export const useThemeController = (): [ThemeChoice, () => void] => {
  const { choice, toggle } = React.useContext(ThemeContext)
  return [choice, toggle]
}

const ControlledThemeProvider: FC<ThemeProviderProps> = ({
  light = {},
  dark = {},
  choice = null,
  createPaletteOptions,
  createOverrides,
  createFonts = createCommittedFonts,
  createShape = createCommittedShape,
  createSpacing = createCommittedSpacing,
  createTypography = createCommittedTypography,
  ...rest
}: ThemeProviderProps) => {
  const [controllerChoice] = useThemeController()

  const lightOptions = Object.assign(
    {
      createPaletteOptions: createPaletteOptions
        ? () => Object.assign({ type: 'light' }, createPaletteOptions() || {})
        : createCommittedLightPaletteOptions,
      createOverrides: createOverrides
        ? createOverrides
        : createCommittedLightOverrides,
    },
    {
      createFonts,
      createShape,
      createSpacing,
      createTypography,
    },
    light
  )

  const darkOptions = Object.assign(
    {
      createPaletteOptions: createPaletteOptions
        ? () => Object.assign({ type: 'dark' }, createPaletteOptions() || {})
        : createCommittedDarkPaletteOptions,
      createOverrides: createOverrides
        ? createOverrides
        : createCommittedDarkOverrides,
    },
    {
      createFonts,
      createShape,
      createSpacing,
      createTypography,
    },
    dark
  )

  let darkMode = false
  switch (choice) {
    case 'light':
      darkMode = false
      break
    case 'dark':
      darkMode = true
      break
    default:
      darkMode = controllerChoice === 'dark'
      break
  }

  const theme = React.useMemo(
    () => createTheme(darkMode ? darkOptions : lightOptions),
    [darkMode]
  )

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div {...rest} />
    </MuiThemeProvider>
  )
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => (
  <ThemeController>
    <ControlledThemeProvider {...props} />
  </ThemeController>
)
