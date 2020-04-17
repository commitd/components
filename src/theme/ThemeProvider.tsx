import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'
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
  createCommittedDarkPaletteOptions,
  createCommittedDarkOverrides,
} from './darkTheme'
import {
  committedLightPaletteColors,
  createCommittedLightPaletteOptions,
  createCommittedLightOverrides,
} from './lightTheme'
import {
  FontOptions,
  createCommittedFonts,
  createCommittedShape,
  createCommittedSpacing,
  createCommittedTypography,
} from './theme'
import { augmentColor } from './themeMaterialUtil'
import { useMediaQuery } from '@material-ui/core'

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
  createPaletteOptions: () => PaletteOptions
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
  choice?: null | 'light' | 'dark'
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
  const paletteOptions = createPaletteOptions()
  const palette = createMuiPalette(paletteOptions)
  // createMuiPalette() "augments" inputted colors (that may be in several forms) to make them conform to {main: #xxxx, light:#xxxx ,...etc}
  // manually augment committed custom theme colors that createMuiPalette is not aware of
  palette.brand = augmentColor(
    paletteOptions.brand,
    committedLightPaletteColors.brand
  )
  palette.success = augmentColor(
    paletteOptions.success,
    committedLightPaletteColors.success
  )
  palette.warning = augmentColor(
    paletteOptions.warning,
    committedLightPaletteColors.warning
  )
  palette.info = augmentColor(
    paletteOptions.info,
    committedLightPaletteColors.info
  )
  palette.error = augmentColor(
    paletteOptions.error,
    committedLightPaletteColors.error
  )

  const themeOptions: ThemeOptions = {
    palette,
    fonts: createFonts(),
    shape: createShape(),
    spacing: createSpacing(),
    typography: createTypography(),
    overrides: createOverrides(palette),
  }

  const muiTheme = responsiveFontSizes(createMuiTheme(themeOptions))
  const fonts = createFonts()
  return deepmerge(muiTheme, { fonts })
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
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
  const lightOptions = Object.assign(
    {
      createPaletteOptions: createPaletteOptions
        ? createPaletteOptions
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
        ? createPaletteOptions
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
      darkMode = useMediaQuery('(prefers-color-scheme: dark)')
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
