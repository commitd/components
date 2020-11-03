import {
  createMuiTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from '@material-ui/core'
import { deepmerge } from '@material-ui/utils'
import { committedDarkOverrides, committedDarkPalette } from './darkTheme2'
import { committedLightOverrides } from './lightTheme2'
import {
  committedFonts,
  committedFontSizing,
  committedOverrides,
  committedShape,
  committedSpacing,
  committedTypography,
} from './commonTheme'
import { committedLightPalette } from './lightTheme2'
import createMuiPalette from '@material-ui/core/styles/createPalette'
import {
  BreakpointsOptions,
  FontOptions,
  FontSizing,
  OverrideOptionsFunction,
  Overrides,
  Palette,
  PaletteOptions,
  Shadows,
  ShapeOptions,
  SpacingOptions,
  SpacingFunction,
  TransitionsOptions,
  TypographyOptions,
  ZIndexOptions,
} from './types'
import createSpacing from '@material-ui/core/styles/createSpacing'

export type OptionsSpecification<T> = undefined | T | ((defaultValues: T) => T)

export interface ThemeConfig {
  breakpoints?: OptionsSpecification<BreakpointsOptions>
  palette?: OptionsSpecification<PaletteOptions>
  fonts?: OptionsSpecification<FontOptions>
  shape?: OptionsSpecification<ShapeOptions>
  typography?: OptionsSpecification<TypographyOptions>
  shadows?: OptionsSpecification<Shadows>
  transitions?: OptionsSpecification<TransitionsOptions>
  zIndex?: OptionsSpecification<ZIndexOptions>
  fontSizing?: FontSizing
  spacing?: SpacingOptions
  overrides?: Overrides | OverrideOptionsFunction
}

export interface ThemesConfig {
  common?: ThemeConfig
  light?: ThemeConfig
  dark?: ThemeConfig
}

function isFunction<T>(toBeDetermined: any): toBeDetermined is T {
  return typeof toBeDetermined === 'function'
}

function isDefined<T>(arg: any): arg is T {
  return arg !== null && arg !== undefined
}

function isThemeConfig(
  toBeDetermined: ThemeConfig | ThemesConfig
): toBeDetermined is ThemeConfig {
  return (
    'common' in toBeDetermined ||
    'light' in toBeDetermined ||
    'dark' in toBeDetermined
  )
}

function isThemesConfig(
  toBeDetermined: ThemeConfig | ThemesConfig
): toBeDetermined is ThemesConfig {
  return !isThemeConfig(toBeDetermined)
}

/**
 * Takes a default set of options and an options specification
 * and produces an output set of options.
 *
 * If the options spec is an object then it deep merges it with the defaults to produce the output.
 * If the options spec is a function then it calls the function with the defaults and returns the result.
 */
export function mergeOptions<T>(
  defaultOptions: T,
  optionsSpec: undefined | OptionsSpecification<T>
): T {
  if (optionsSpec === undefined || optionsSpec === null) {
    return defaultOptions
  } else if (typeof optionsSpec === 'object') {
    return deepmerge(defaultOptions, optionsSpec)
  } else if (isFunction<Function>(optionsSpec)) {
    return optionsSpec(defaultOptions)
  } else {
    throw Error(`Options not valid ${JSON.stringify(optionsSpec)}`)
  }
}

/**
 * Takes a default set of options and options for the common and themed specification
 * and produces an output set of options.
 *
 * This first merged the default and the common, then with the themed.
 */
export function mergeArrayOptions<T>(
  options: Array<OptionsSpecification<T>>
): T {
  return options.reduce(function (
    current: T,
    optionSpec: OptionsSpecification<T>
  ) {
    return mergeOptions(current, optionSpec)
  },
  {} as T)
}

/**
 * Takes a default set of options and options for the common and themed specification
 * and produces an output set of options.
 *
 * This first merged the default and the common, then with the themed.
 */
export function mergeOverridesOptions(
  options: Array<Overrides | OverrideOptionsFunction | undefined>,
  helpers: {
    palette: Palette
    fontSizing: FontSizing
    spacing: SpacingFunction
  }
): Overrides {
  return options
    .filter<Overrides | OverrideOptionsFunction>(isDefined)
    .reduce(function (
      current: Overrides,
      overrideSpec: Overrides | OverrideOptionsFunction
    ) {
      if (isFunction<OverrideOptionsFunction>(overrideSpec)) {
        return overrideSpec(current, helpers)
      } else {
        return deepmerge(current, overrideSpec)
      }
    },
    {} as Overrides)
}

/**
 * Takes an array of type T | undefined | null and returns the last value of type T or undefined
 */
export function lastProvided<T>(
  options: Array<T | null | undefined>
): T | undefined {
  return options.filter(isDefined).pop() as T | undefined
}

function createThemes(
  defaults: ThemesConfig,
  options?: ThemeConfig | ThemesConfig
): { light: Theme; dark: Theme } {
  const lightOptionsArray = {
    breakpoints: [defaults.common?.breakpoints, defaults.light?.breakpoints],
    palette: [defaults.common?.palette, defaults.light?.palette],
    fonts: [defaults.common?.fonts, defaults.light?.fonts],
    shape: [defaults.common?.shape, defaults.light?.shape],
    spacing: [defaults.common?.spacing, defaults.light?.spacing],
    fontSizing: [defaults.common?.fontSizing, defaults.light?.fontSizing],
    typography: [defaults.common?.typography, defaults.light?.typography],
    shadows: [defaults.common?.shadows, defaults.light?.shadows],
    transitions: [defaults.common?.transitions, defaults.light?.transitions],
    zIndex: [defaults.common?.zIndex, defaults.light?.zIndex],
    overrides: [defaults.common?.overrides, defaults.light?.overrides],
  }

  const darkOptionsArray = {
    breakpoints: [defaults.common?.breakpoints, defaults.dark?.breakpoints],
    palette: [defaults.common?.palette, defaults.dark?.palette],
    fonts: [defaults.common?.fonts, defaults.dark?.fonts],
    shape: [defaults.common?.shape, defaults.dark?.shape],
    spacing: [defaults.common?.spacing, defaults.dark?.spacing],
    fontSizing: [defaults.common?.fontSizing, defaults.dark?.fontSizing],
    typography: [defaults.common?.typography, defaults.dark?.typography],
    shadows: [defaults.common?.shadows, defaults.dark?.shadows],
    transitions: [defaults.common?.transitions, defaults.dark?.transitions],
    zIndex: [defaults.common?.zIndex, defaults.dark?.zIndex],
    overrides: [defaults.common?.overrides, defaults.dark?.overrides],
  }

  if (options !== undefined) {
    if (isThemeConfig(options)) {
      lightOptionsArray.breakpoints.push(options?.breakpoints)
      lightOptionsArray.palette.push(options?.palette)
      lightOptionsArray.fonts.push(options?.fonts)
      lightOptionsArray.shape.push(options?.shape)
      lightOptionsArray.spacing.push(options?.spacing)
      lightOptionsArray.fontSizing.push(options?.fontSizing)
      lightOptionsArray.typography.push(options?.typography)
      lightOptionsArray.shadows.push(options?.shadows)
      lightOptionsArray.transitions.push(options?.transitions)
      lightOptionsArray.zIndex.push(options?.zIndex)
      lightOptionsArray.overrides.push(options?.overrides)

      darkOptionsArray.breakpoints.push(options?.breakpoints)
      darkOptionsArray.palette.push(options?.palette)
      darkOptionsArray.fonts.push(options?.fonts)
      darkOptionsArray.shape.push(options?.shape)
      darkOptionsArray.spacing.push(options?.spacing)
      darkOptionsArray.fontSizing.push(options?.fontSizing)
      darkOptionsArray.typography.push(options?.typography)
      darkOptionsArray.shadows.push(options?.shadows)
      darkOptionsArray.transitions.push(options?.transitions)
      darkOptionsArray.zIndex.push(options?.zIndex)
      darkOptionsArray.overrides.push(options?.overrides)
    } else if (isThemesConfig(options)) {
      lightOptionsArray.breakpoints.push(
        options?.common?.breakpoints,
        options?.light?.breakpoints
      )
      lightOptionsArray.palette.push(
        options?.common?.palette,
        options?.light?.palette
      )
      lightOptionsArray.fonts.push(
        options?.common?.fonts,
        options?.light?.fonts
      )
      lightOptionsArray.shape.push(
        options?.common?.shape,
        options?.light?.shape
      )
      lightOptionsArray.spacing.push(
        options?.common?.spacing,
        options?.light?.spacing
      )
      lightOptionsArray.fontSizing.push(
        options?.common?.fontSizing,
        options?.light?.fontSizing
      )
      lightOptionsArray.typography.push(
        options?.common?.typography,
        options?.light?.typography
      )
      lightOptionsArray.shadows.push(
        options?.common?.shadows,
        options?.light?.shadows
      )
      lightOptionsArray.transitions.push(
        options?.common?.transitions,
        options?.light?.transitions
      )
      lightOptionsArray.zIndex.push(
        options?.common?.zIndex,
        options?.light?.zIndex
      )
      lightOptionsArray.overrides.push(
        options?.common?.overrides,
        options?.light?.overrides
      )

      darkOptionsArray.breakpoints.push(
        options?.common?.breakpoints,
        options?.dark?.breakpoints
      )
      darkOptionsArray.palette.push(
        options?.common?.palette,
        options?.dark?.palette
      )
      darkOptionsArray.fonts.push(options?.common?.fonts, options?.dark?.fonts)
      darkOptionsArray.shape.push(options?.common?.shape, options?.dark?.shape)
      darkOptionsArray.spacing.push(
        options?.common?.spacing,
        options?.dark?.spacing
      )
      darkOptionsArray.fontSizing.push(
        options?.common?.fontSizing,
        options?.dark?.fontSizing
      )
      darkOptionsArray.typography.push(
        options?.common?.typography,
        options?.dark?.typography
      )
      darkOptionsArray.shadows.push(
        options?.common?.shadows,
        options?.dark?.shadows
      )
      darkOptionsArray.transitions.push(
        options?.common?.transitions,
        options?.dark?.transitions
      )
      darkOptionsArray.zIndex.push(
        options?.common?.zIndex,
        options?.dark?.zIndex
      )
      darkOptionsArray.overrides.push(
        options?.common?.overrides,
        options?.dark?.overrides
      )
    }
  }

  //console.log(lightOptionsArray)

  const lightOptions: ThemeOptions = {
    breakpoints: mergeArrayOptions(lightOptionsArray.breakpoints),
    palette: mergeArrayOptions(lightOptionsArray.palette),
    fonts: mergeArrayOptions(lightOptionsArray.fonts),
    shape: mergeArrayOptions(lightOptionsArray.shape),
    typography: mergeArrayOptions(lightOptionsArray.typography),
    shadows: mergeArrayOptions(lightOptionsArray.shadows),
    transitions: mergeArrayOptions(lightOptionsArray.transitions),
    zIndex: mergeArrayOptions(lightOptionsArray.zIndex),
    fontSizing: lastProvided(lightOptionsArray.fontSizing),
    spacing: lastProvided(lightOptionsArray.spacing),
  }

  //console.log(lightOptions)

  const darkOptions: ThemeOptions = {
    breakpoints: mergeArrayOptions(darkOptionsArray.breakpoints),
    palette: mergeArrayOptions(darkOptionsArray.palette),
    fonts: mergeArrayOptions(darkOptionsArray.fonts),
    shape: mergeArrayOptions(darkOptionsArray.shape),
    typography: mergeArrayOptions(darkOptionsArray.typography),
    shadows: mergeArrayOptions(darkOptionsArray.shadows),
    transitions: mergeArrayOptions(darkOptionsArray.transitions),
    zIndex: mergeArrayOptions(darkOptionsArray.zIndex),
    fontSizing: lastProvided(darkOptionsArray.fontSizing),
    spacing: lastProvided(darkOptionsArray.spacing),
  }

  const lightPalette = createMuiPalette(lightOptions.palette || {})
  const lightSpacing = createSpacing(lightOptions.spacing || 2)
  const darkPalette = createMuiPalette(darkOptions.palette || {})
  const darkSpacing = createSpacing(darkOptions.spacing || 2)

  lightOptions.overrides = mergeOverridesOptions(lightOptionsArray.overrides, {
    palette: lightPalette,
    fontSizing: lightOptions.fontSizing || committedFontSizing,
    spacing: lightSpacing,
  })

  console.log(lightOptions)

  darkOptions.overrides = mergeOverridesOptions(darkOptionsArray.overrides, {
    palette: darkPalette,
    fontSizing: darkOptions.fontSizing || committedFontSizing,
    spacing: darkSpacing,
  })

  return {
    light: responsiveFontSizes(
      createMuiTheme(lightOptions, {
        fonts: lightOptions.fonts,
        fontSizing: lightOptions.fontSizing,
      })
    ),
    dark: responsiveFontSizes(
      createMuiTheme(darkOptions, {
        fonts: darkOptions.fonts,
        fontSizing: darkOptions.fontSizing,
      })
    ),
  }
}

export function createMaterialThemes(
  options?: ThemeConfig | ThemesConfig
): { light: Theme; dark: Theme } {
  return createThemes(
    {
      // these are additional to the elements in the theme so committed defaults supplied
      common: { fonts: committedFonts, fontSizing: committedFontSizing },
      light: { palette: { brand: committedLightPalette.brand } },
      dark: { palette: { type: 'dark', brand: committedDarkPalette.brand } },
    },
    options
  )
}

export function createCommittedThemes(
  options?: ThemeConfig | ThemesConfig
): { light: Theme; dark: Theme } {
  const committedDefaults: ThemesConfig = {
    common: {
      // These use material defaults
      breakpoints: undefined,
      zIndex: undefined,
      shadows: undefined,
      transitions: undefined,
      // committed styles
      fonts: committedFonts,
      shape: committedShape,
      spacing: committedSpacing,
      fontSizing: committedFontSizing,
      typography: committedTypography,
      overrides: committedOverrides,
    },
    light: {
      palette: committedLightPalette,
      overrides: committedLightOverrides,
    },
    dark: {
      palette: committedDarkPalette,
      overrides: committedDarkOverrides,
    },
  }

  return createThemes(committedDefaults, options)
}

//   const createTheme = ({
//     createPaletteOptions,
//     createOverrides,
//     createFonts,
//     createShape,
//     createSpacing,
//     createFontSizing,
//     createTypography,
//   }: ThemeProps) => {
//     const paletteOptions = createPaletteOptions() || {}
//     const palette = createMuiPalette(paletteOptions)
//     // createMuiPalette() "augments" inputted colors (that may be in several forms) to make them conform to {main: #xxxx, light:#xxxx ,...etc}
//     // manually augment committed custom theme colors that createMuiPalette is not aware of
//     palette.brand = augmentColor(
//       paletteOptions ? paletteOptions.brand : palette.primary,
//       palette.type === 'light'
//         ? committedLightPaletteColors.brand
//         : committedDarkPaletteColors.brand
//     )

//     let themeOptions: ThemeOptions = {
//       palette,
//     }

//     let fonts = createFonts()
//     if (fonts !== undefined) {
//       themeOptions.fonts = fonts
//     } else {
//       // Need to resupply material fonts for extra defined types
//       themeOptions.fonts = materialFonts
//       fonts = materialFonts
//     }

//     const shape = createShape()
//     if (shape !== undefined) {
//       themeOptions.shape = shape
//     }
//     const spacing = createSpacing()
//     if (spacing !== undefined) {
//       themeOptions.spacing = spacing
//     }
//     const fontSizing = createFontSizing()
//     if (fontSizing !== undefined) {
//       themeOptions.fontSizing = fontSizing
//     }
//     const typography = createTypography()
//     if (typography !== undefined) {
//       themeOptions.typography = typography
//     }

//     const overrides = createOverrides(palette)
//     if (overrides !== undefined) {
//       themeOptions.overrides = overrides
//     }

//     const muiTheme = responsiveFontSizes(createMuiTheme(themeOptions))
//     return deepmerge(muiTheme, { fonts })
//   }

//   export const useThemeController = (): [ThemeChoice, () => void] => {
//     const { choice, toggle } = React.useContext(ThemeContext)
//     return [choice, toggle]
//   }

//   const ControlledThemeProvider: FC<ThemeProviderProps> = ({
//     light = {},
//     dark = {},
//     choice = null,
//     createPaletteOptions,
//     createOverrides,
//     createFonts = createCommittedFonts,
//     createFontSizing = createCommittedFontSizing,
//     createShape = createCommittedShape,
//     createSpacing = createCommittedSpacing,
//     createTypography = createCommittedTypography,
//     children,
//   }: ThemeProviderProps) => {
//     const [controllerChoice] = useThemeController()

//     const lightOptions = Object.assign(
//       {
//         createPaletteOptions: createPaletteOptions
//           ? () => Object.assign({ type: 'light' }, createPaletteOptions() || {})
//           : createCommittedLightPaletteOptions,
//         createOverrides: createOverrides
//           ? createOverrides
//           : createCommittedLightOverrides,
//       },
//       {
//         createFonts,
//         createFontSizing,
//         createShape,
//         createSpacing,
//         createTypography,
//       },
//       light
//     )

//     const darkOptions = Object.assign(
//       {
//         createPaletteOptions: createPaletteOptions
//           ? () => Object.assign({ type: 'dark' }, createPaletteOptions() || {})
//           : createCommittedDarkPaletteOptions,
//         createOverrides: createOverrides
//           ? createOverrides
//           : createCommittedDarkOverrides,
//       },
//       {
//         createFonts,
//         createFontSizing,
//         createShape,
//         createSpacing,
//         createTypography,
//       },
//       dark
//     )
