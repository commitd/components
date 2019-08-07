import allColors from "./colors"

const createMediaQuery = (n: string) => `@media screen and (min-width:${n})`

const addAliases = (arr: any[], aliases: string[]) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i]
      }
    })
  )

export const breakpoints = [32, 40, 48, 64].map(n => n + "em")

export const mediaQueries = breakpoints.map(createMediaQuery)

export const aliases = ["sm", "md", "lg", "xl"]

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

export const space = [0, 4, 8, 16, 32, 64, 128]

export const fonts = {
  system:
    '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"',
  main: "Lato, Geneva, Tahoma, sans-serif",
  display:
    'Arciform, "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif',
  brand: "FreeSans",
  mono: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace'
}

export const font = fonts.main

export const fontSize = "16px"
export const fontSizes = [
  "0.296rem",
  "0.444rem",
  "0.667rem",
  "1rem",
  "1.5rem",
  "2.25rem",
  "3.375rem",
  "5.063rem",
  "7.594rem",
  "11.391rem"
]

export const display = 200
export const light = 300
export const medium = 500
export const bold = 700
// alias
export const regular = medium

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  display,
  light,
  medium,
  bold,
  // alias
  regular
}

export const lineHeights = {
  standard: 1.5,
  display: 1.25
}

const letterSpacings = {
  normal: "normal",
  capital: "normal",
  upper: "0.025em"
}

const pallettes = {
  ...allColors,
  neutral: allColors.blueGrey,
  primary: allColors.blue,
  secondary: allColors.purple,
  supporting: allColors.purple,
  success: allColors.teal,
  warning: allColors.committedYellow,
  brand: allColors.committedYellow,
  error: allColors.red
}

const colors = {
  primary: pallettes.primary[4],
  bg: pallettes.neutral[0],
  text: pallettes.neutral[9],
  lighttext: pallettes.neutral[3],
  secondary: pallettes.secondary[4],
  supporting: pallettes.supporting[4],
  success: pallettes.success[4],
  warning: pallettes.warning[4],
  error: pallettes.error[4],
  brand: pallettes.brand[4],
  pallettes
}

export { colors }

export const textStyles = {
  heading: {
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display: {
    fontFamily: fonts.display,
    fontWeight: fontWeights.display,
    lineHeight: lineHeights.display,
    textTransform: "capitalize"
  },
  subheading: {
    fontFamily: fonts.main,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    color: colors.lighttext,
    textTransform: "uppercase"
  },
  caption: {
    fontFamily: fonts.main,
    fontWeight: fontWeights.light,
    lineHeight: lineHeights.standard
  }
}

// styled-system's `borderRadius` function can hook into the `radii` object/array
export const radii = [0, 2, 6]
export const radius = "2px"

export const maxContainerWidth = "1280px"

// boxShadows
export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`
]

// animation duration
export const duration = {
  fast: `150ms`,
  normal: `300ms`,
  slow: `450ms`,
  slowest: `600ms`
}

// animation easing curves
const easeInOut = "cubic-bezier(0.5, 0, 0.25, 1)"
const easeOut = "cubic-bezier(0, 0, 0.25, 1)"
const easeIn = "cubic-bezier(0.5, 0, 1, 1)"

const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn
}

// animation delay
const transitionDelays = {
  small: `60ms`,
  medium: `160ms`,
  large: `260ms`,
  xLarge: `360ms`
}

// buttons
const button = {
  colors: {
    primary: { default: pallettes.primary[4], hover: pallettes.primary[2] },
    supporting: {
      default: pallettes.supporting[4],
      hover: pallettes.supporting[2]
    },
    success: { default: pallettes.success[4], hover: pallettes.success[2] },
    warning: { default: pallettes.warning[4], hover: pallettes.warning[2] },
    error: { default: pallettes.error[4], hover: pallettes.error[2] },
    neutral: { default: pallettes.neutral[3], hover: pallettes.neutral[2] }
  },
  textStyles: {
    sm: "body0",
    md: "body1",
    lg: "display2",
    xl: "display3"
  },
  sizes: {
    sm: {
      minWidth: "80px",
      p: "0"
    },
    md: {
      minWidth: "96px",
      py: "1",
      px: "2"
    },
    lg: {
      minWidth: "96px",
      py: "3",
      px: "4"
    },
    xl: {
      minWidth: "96px",
      py: "4",
      px: "5"
    }
  },
  styles: {
    contained: {
      colorAttribute: "bg"
    },
    outlined: {
      colorAttribute: "color",
      boxShadow: "inset 0 0 0 2px"
    }
  }
}

const theme = {
  breakpoints,
  mediaQueries,
  space,
  font,
  fonts,
  fontSize,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  regular,
  bold,
  textStyles,
  colors,
  radii,
  radius,
  boxShadows,
  maxContainerWidth,
  duration,
  timingFunctions,
  transitionDelays,
  button
}

export type Theme = typeof theme

export type ThemeProps = {
  // Provide a theme to control the styling or use a ThemeProvider
  theme?: Theme
}

export default theme
