import {
  createMuiTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from '@material-ui/core'
import createMuiPalette from '@material-ui/core/styles/createPalette'
import createSpacing from '@material-ui/core/styles/createSpacing'
import { deepmerge } from '@material-ui/utils'
import {
  committedFonts,
  committedFontSizing,
  committedOverrides,
  committedShape,
  committedSpacing,
  committedTypography,
} from './commonTheme'
import { committedDarkOverrides, committedDarkPalette } from './darkTheme'
import { materialFonts } from './fonts'
import { committedLightOverrides, committedLightPalette } from './lightTheme'
import { augmentColor } from './themeMaterialUtil'
import {
  BreakpointsOptions,
  Fonts,
  FontSizing,
  OptionsSpecification,
  OverrideOptionsFunction,
  Overrides,
  Palette,
  PaletteOptions,
  ShapeOptions,
  SpacingFunction,
  SpacingOptions,
  ThemeChoice,
  ThemeConfig,
  ThemesConfig,
  TransitionsOptions,
  TypographyOptions,
  ZIndexOptions,
} from './types'

/** Type guards */
function isFunction<T>(toBeDetermined: any): toBeDetermined is T {
  return typeof toBeDetermined === 'function'
}

function isDefined<T>(arg: any): arg is T {
  return arg !== null && arg !== undefined
}

function isThemeConfig(
  toBeDetermined: ThemeConfig | ThemesConfig
): toBeDetermined is ThemeConfig {
  return !(
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
/*-----------*/

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
  /**
   * Collects the relevant options from the defaults and supplied options.
   * First adds the default common, then default theme choice.
   * Then checks the options, if a ThemeConfig add, if a ThemesConfig add the common the the choice.
   * Finally, filters undefined (not actually required, but easier to follow).
   */
  function addOptions<T>(type: keyof ThemeConfig, choice: ThemeChoice): T[] {
    const optionsArray: T[] = []

    optionsArray.push(defaults?.common?.[type] as T)
    optionsArray.push(defaults?.[choice]?.[type] as T)

    if (options !== undefined) {
      if (isThemeConfig(options)) {
        optionsArray.push(options?.[type] as T)
      } else if (isThemesConfig(options)) {
        optionsArray.push(options?.common?.[type] as T)
        optionsArray.push(options?.[choice]?.[type] as T)
      }
    }
    return optionsArray.filter(isDefined)
  }

  const lightOptionsArray = {
    breakpoints: addOptions<BreakpointsOptions>('breakpoints', 'light'),
    palette: addOptions<PaletteOptions>('palette', 'light'),
    fonts: addOptions<Fonts>('fonts', 'light'),
    shape: addOptions<ShapeOptions>('shape', 'light'),
    spacing: addOptions<SpacingOptions>('spacing', 'light'),
    fontSizing: addOptions<FontSizing>('fontSizing', 'light'),
    typography: addOptions<TypographyOptions>('typography', 'light'),
    transitions: addOptions<TransitionsOptions>('transitions', 'light'),
    zIndex: addOptions<ZIndexOptions>('zIndex', 'light'),
    overrides: addOptions<Overrides>('overrides', 'light'),
  }

  const darkOptionsArray = {
    breakpoints: addOptions<BreakpointsOptions>('breakpoints', 'dark'),
    palette: addOptions<PaletteOptions>('palette', 'dark'),
    fonts: addOptions<Fonts>('fonts', 'dark'),
    shape: addOptions<ShapeOptions>('shape', 'dark'),
    spacing: addOptions<SpacingOptions>('spacing', 'dark'),
    fontSizing: addOptions<FontSizing>('fontSizing', 'dark'),
    typography: addOptions<TypographyOptions>('typography', 'dark'),
    transitions: addOptions<TransitionsOptions>('transitions', 'dark'),
    zIndex: addOptions<ZIndexOptions>('zIndex', 'dark'),
    overrides: addOptions<Overrides>('overrides', 'dark'),
  }

  const lightOptions: ThemeOptions = {
    breakpoints: mergeArrayOptions(lightOptionsArray.breakpoints),
    palette: mergeArrayOptions(lightOptionsArray.palette),
    fonts: mergeArrayOptions(lightOptionsArray.fonts),
    shape: mergeArrayOptions(lightOptionsArray.shape),
    typography: mergeArrayOptions(lightOptionsArray.typography),
    transitions: mergeArrayOptions(lightOptionsArray.transitions),
    zIndex: mergeArrayOptions(lightOptionsArray.zIndex),
    fontSizing: lastProvided(lightOptionsArray.fontSizing),
    spacing: lastProvided(lightOptionsArray.spacing),
  }

  const darkOptions: ThemeOptions = {
    breakpoints: mergeArrayOptions(darkOptionsArray.breakpoints),
    palette: mergeArrayOptions(darkOptionsArray.palette),
    fonts: mergeArrayOptions(darkOptionsArray.fonts) || {},
    shape: mergeArrayOptions(darkOptionsArray.shape),
    typography: mergeArrayOptions(darkOptionsArray.typography),
    transitions: mergeArrayOptions(darkOptionsArray.transitions),
    zIndex: mergeArrayOptions(darkOptionsArray.zIndex),
    fontSizing: lastProvided(darkOptionsArray.fontSizing),
    spacing: lastProvided(darkOptionsArray.spacing),
  }

  // Augment the brand color and ensure present
  lightOptions.palette = {
    ...lightOptions.palette,
    brand: augmentColor(
      lightOptions?.palette?.brand
        ? lightOptions?.palette?.brand
        : lightOptions?.palette?.primary
    ),
  }

  darkOptions.palette = {
    ...darkOptions.palette,
    brand: augmentColor(
      darkOptions?.palette?.brand
        ? darkOptions?.palette?.brand
        : darkOptions?.palette?.primary
    ),
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
      common: { fonts: materialFonts, fontSizing: committedFontSizing },
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
