import {
  amber,
  amberDark,
  blackA,
  blue,
  blueDark,
  grass,
  grassDark,
  gray,
  grayDark,
  orange,
  orangeDark,
  red,
  redDark,
  sand,
  sandDark,
  whiteA,
} from '@radix-ui/colors'
import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'
import { ReactNode } from 'react'
import { ThemeConfig } from './components/ThemeProvider/ThemeProvider.stories'

const LIGHT_THEME = 'light-theme'
const DARK_THEME = 'dark-theme'

const semanticColors = (
  sandType: typeof sand,
  amberType: typeof amber,
  grayType: typeof gray,
  redType: typeof red,
  blueType: typeof blue,
  orangeType: typeof orange,
  grassType: typeof grass
) => ({
  grey1: sandType.sand1,
  grey2: sandType.sand2,
  grey3: sandType.sand3,
  grey4: sandType.sand4,
  grey5: sandType.sand5,
  grey6: sandType.sand6,
  grey7: sandType.sand7,
  grey8: sandType.sand8,
  grey9: sandType.sand9,
  grey10: sandType.sand10,
  grey11: sandType.sand11,
  grey12: sandType.sand12,

  brandYellow1: amberType.amber1,
  brandYellow2: amberType.amber2,
  brandYellow3: amberType.amber3,
  brandYellow4: amberType.amber4,
  brandYellow5: amberType.amber5,
  brandYellow6: amberType.amber6,
  brandYellow7: amberType.amber7,
  brandYellow8: amberType.amber8,
  brandYellow9: amberType.amber9,
  brandYellow10: amberType.amber10,
  brandYellow11: amberType.amber11,
  brandYellow12: amberType.amber12,

  brandGrey1: grayType.gray1,
  brandGrey2: grayType.gray2,
  brandGrey3: grayType.gray3,
  brandGrey4: grayType.gray4,
  brandGrey5: grayType.gray5,
  brandGrey6: grayType.gray6,
  brandGrey7: grayType.gray7,
  brandGrey8: grayType.gray8,
  brandGrey9: grayType.gray9,
  brandGrey10: grayType.gray10,
  brandGrey11: grayType.gray11,
  brandGrey12: grayType.gray12,

  error1: redType.red1,
  error2: redType.red2,
  error3: redType.red3,
  error4: redType.red4,
  error5: redType.red5,
  error6: redType.red6,
  error7: redType.red7,
  error8: redType.red8,
  error9: redType.red9,
  error10: redType.red10,
  error11: redType.red11,
  error12: redType.red12,

  info1: blueType.blue1,
  info2: blueType.blue2,
  info3: blueType.blue3,
  info4: blueType.blue4,
  info5: blueType.blue5,
  info6: blueType.blue6,
  info7: blueType.blue7,
  info8: blueType.blue8,
  info9: blueType.blue9,
  info10: blueType.blue10,
  info11: blueType.blue11,
  info12: blueType.blue12,

  warning1: orangeType.orange1,
  warning2: orangeType.orange2,
  warning3: orangeType.orange3,
  warning4: orangeType.orange4,
  warning5: orangeType.orange5,
  warning6: orangeType.orange6,
  warning7: orangeType.orange7,
  warning8: orangeType.orange8,
  warning9: orangeType.orange9,
  warning10: orangeType.orange10,
  warning11: orangeType.orange11,
  warning12: orangeType.orange12,

  success1: grassType.grass1,
  success2: grassType.grass2,
  success3: grassType.grass3,
  success4: grassType.grass4,
  success5: grassType.grass5,
  success6: grassType.grass6,
  success7: grassType.grass7,
  success8: grassType.grass8,
  success9: grassType.grass9,
  success10: grassType.grass10,
  success11: grassType.grass11,
  success12: grassType.grass12,
})

const lightThemeConfig = {
  shadows: {
    1: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    2: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
    3: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    hover: 'inset 0 0 0 1px $colors$grey4',
    focus: 'inset 0 0 0 1px $colors$grey4, 0 0 0 1px $colors$grey4',
  },
  colors: {
    // Defaults
    white: '#FFFFFF',
    black: '#000000',

    // Palettes

    ...semanticColors(sand, amber, gray, red, blue, orange, grass),

    // Overrides

    brandYellow9: 'hsl(44 100% 50%)',

    brandGrey8: 'hsl(0 1% 34%)',
    brandGrey9: 'hsl(0 0% 24%)',
    brandGrey10: 'hsl(0 0% 18%)',

    error9: 'hsl(0 67% 44%)',

    // Semantic

    primary1: '$brandGrey1',
    primary2: '$brandGrey2',
    primary3: '$brandGrey3',
    primary4: '$brandGrey4',
    primary5: '$brandGrey5',
    primary6: '$brandGrey6',
    primary7: '$brandGrey7',
    primary8: '$brandGrey8',
    primary9: '$brandGrey9',
    primary10: '$brandGrey10',
    primary11: '$brandGrey11',
    primary12: '$brandGrey12',

    transparency1: blackA.blackA1,
    transparency2: blackA.blackA2,
    transparency3: blackA.blackA3,
    transparency4: blackA.blackA4,
    transparency5: blackA.blackA5,
    transparency6: blackA.blackA6,
    transparency7: blackA.blackA7,
    transparency8: blackA.blackA8,
    transparency9: blackA.blackA9,
    transparency10: blackA.blackA10,
    transparency11: blackA.blackA11,
    transparency12: blackA.blackA12,

    brandYellow: '$brandYellow9',
    brandGrey: '$brandGrey8',
    brand: '$brandGrey9',
    brandHighlight: '$brandGrey10',
    brandContrast: '$brandYellow',
    brandLowlight: '$brandGrey8',
    brandBackground: '$brandGrey2',
    brandActive: '$brandYellow',

    background: '#f7f7f7',
    paper: '$white',
    tooltip: '$black',
    selection: '#ffbb00aa',
    text: '#3b3b3b',
    textSecondary: '$grey11',
    textTooltip: '$white',

    primary: '$primary9',
    primaryHighlight: '$primary10',
    primaryLowlight: '$primary8',
    primaryBackground: '$primary2',
    primaryContrast: '$brandYellow',
    primaryActive: '$brandYellow',
    default: '$black',
    defaultHighlight: '$transparency5',
    defaultLowlight: '$transparency5',
    defaultBackground: 'transparent',
    defaultContrast: '$white',
    defaultActive: '$transparency6',
    error: '$error9',
    errorHighlight: '$error10',
    errorLowlight: '$error6',
    errorBackground: '$error4',
    errorContrast: '$paper',
    errorActive: '#error1',
    success: '$success9',
    successHighlight: '$success10',
    successLowlight: '$success6',
    successBackground: '$success4',
    successContrast: '$paper',
    successActive: '#success1',
    warning: '$warning9',
    warningHighlight: '$warning10',
    warningLowlight: '$warning6',
    warningBackground: '$warning4',
    warningContrast: '$paper',
    warningActive: '#warning1',
    info: '$info9',
    infoHighlight: '$info10',
    infoLowlight: '$info6',
    infoBackground: '$info4',
    infoContrast: '$paper',
    infoActive: '#info1',
  },
}

export const darkThemeConfig = {
  shadows: {
    1: '0px 2px 1px -1px rgb(0 0 0 / 40%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 30%)',
    2: '0px 3px 3px -2px rgba(0,0,0,0.4), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.3)',
    3: '0px 3px 5px -1px rgba(0,0,0,0.4),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.3)',
    hover: 'inset 0 0 0 1px $colors$grey6',
    focus: 'inset 0 0 0 1px $colors$grey6, 0 0 0 1px $colors$grey6',
  },
  colors: {
    // Defaults
    white: '#FFFFFF',
    black: '#000000',

    // Palettes

    ...semanticColors(
      sandDark,
      amberDark,
      grayDark,
      redDark,
      blueDark,
      orangeDark,
      grassDark
    ),

    // Overrides

    brandYellow9: 'hsl(40 100% 50%)',
    brandYellow10: 'hsl(44 100% 50%)',

    brandGrey8: 'hsl(0 1% 34%)',
    brandGrey9: 'hsl(0 0% 24%)',
    brandGrey10: 'hsl(0 0% 18%)',

    error9: 'hsl(0 67% 44%)',

    // Semantic

    primary1: '$brandYellow1',
    primary2: '$brandYellow2',
    primary3: '$brandYellow3',
    primary4: '$brandYellow4',
    primary5: '$brandYellow5',
    primary6: '$brandYellow6',
    primary7: '$brandYellow7',
    primary8: '$brandYellow8',
    primary9: '$brandYellow9',
    primary10: '$brandYellow10',
    primary11: '$brandYellow11',
    primary12: '$brandYellow12',

    transparency1: whiteA.whiteA1,
    transparency2: whiteA.whiteA2,
    transparency3: whiteA.whiteA3,
    transparency4: whiteA.whiteA4,
    transparency5: whiteA.whiteA5,
    transparency6: whiteA.whiteA6,
    transparency7: whiteA.whiteA7,
    transparency8: whiteA.whiteA8,
    transparency9: whiteA.whiteA9,
    transparency10: whiteA.whiteA10,
    transparency11: whiteA.whiteA11,
    transparency12: whiteA.whiteA12,

    brandYellow: '$brandYellow9',
    brandGrey: '$brandGrey8',
    brand: '$brandGrey9',
    brandHighlight: '$brandGrey10',
    brandContrast: '$brandYellow',
    brandLowlight: '$brandGrey8',
    brandBackground: '$brandGrey2',
    brandActive: '$brandYellow',

    background: '#000000',
    text: '#f7f7f7',
    textSecondary: '$grey11',
    textTooltip: '$black',
    paper: '#222222',
    tooltip: '$white',
    selection: '#ffbb00aa',

    primary: '$brandYellow9',
    primaryContrast: '$brandGrey9',
    primaryHighlight: '$brandYellow10',
    primaryLowlight: '$brandYellow7',
    primaryBackground: '$brandYellow4',
    primaryActive: '$brandYellow1',
    default: '$white',
    defaultHighlight: '$transparency2',
    defaultLowlight: '$transparency4',
    defaultBackground: 'transparent',
    defaultContrast: '$black',
    defaultActive: '$transparency3',
    error: '$error9',
    errorHighlight: '$error10',
    errorLowlight: '$error6',
    errorBackground: '$error4',
    errorContrast: '$paper',
    errorActive: '#error1',
    success: '$success9',
    successHighlight: '$success10',
    successLowlight: '$success6',
    successBackground: '$success4',
    successContrast: '$paper',
    successActive: '#success1',
    warning: '$warning9',
    warningHighlight: '$warning10',
    warningLowlight: '$warning6',
    warningBackground: '$warning4',
    warningContrast: '$paper',
    warningActive: '#warning1',
    info: '$info9',
    infoHighlight: '$info10',
    infoLowlight: '$info6',
    infoBackground: '$info4',
    infoContrast: '$paper',
    infoActive: '#info1',
  },
}

const stitches = createStitches({
  media: {
    sm: '(min-width: 600px)',
    md: '(min-width: 960px)',
    lg: '(min-width: 1280px)',
    xl: '(min-width: 1920px)',
    motion: '(prefers-reduced-motion: no-preference)',
    reducedmotion: '(prefers-reduced-motion: reduce)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (
      value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'paddingTop'>
    ) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (
      value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'paddingTop'>
    ) => ({
      paddingTop: value,
    }),
    pr: (
      value:
        | Stitches.ScaleValue<'space'>
        | Stitches.PropertyValue<'paddingRight'>
    ) => ({
      paddingRight: value,
    }),
    pb: (
      value:
        | Stitches.ScaleValue<'space'>
        | Stitches.PropertyValue<'paddingBottom'>
    ) => ({
      paddingBottom: value,
    }),
    pl: (
      value:
        | Stitches.ScaleValue<'space'>
        | Stitches.PropertyValue<'paddingLeft'>
    ) => ({
      paddingLeft: value,
    }),
    px: (
      value:
        | Stitches.ScaleValue<'space'>
        | Stitches.PropertyValue<'paddingLeft'>
    ) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (
      value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'paddingTop'>
    ) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (
      value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'marginTop'>
    ) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (
      value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'marginTop'>
    ) => ({
      marginTop: value,
    }),
    mr: (
      value:
        | Stitches.ScaleValue<'space'>
        | Stitches.PropertyValue<'marginRight'>
    ) => ({
      marginRight: value,
    }),
    mb: (
      value:
        | Stitches.ScaleValue<'space'>
        | Stitches.PropertyValue<'marginBottom'>
    ) => ({
      marginBottom: value,
    }),
    ml: (
      value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'marginLeft'>
    ) => ({
      marginLeft: value,
    }),
    mx: (
      value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'marginLeft'>
    ) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (
      value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'marginTop'>
    ) => ({
      marginTop: value,
      marginBottom: value,
    }),

    size: (
      value:
        | Stitches.ScaleValue<'sizes'>
        | Stitches.PropertyValue<'width'>
        | Stitches.PropertyValue<'height'>
    ) => ({
      width: value,
      height: value,
    }),
    '@dark': (value: Stitches.CSS) => ({
      [`.${DARK_THEME} &`]: value,
    }),
  },
  theme: {
    space: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '96px',
      10: '128px',
      11: '192px',
      12: '256px',
      13: '384px',
      14: '512px',
      15: '640px',
      16: '768px',
    },
    sizes: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '96px',
      10: '128px',
      11: '192px',
      12: '256px',
      13: '384px',
      14: '512px',
      15: '640px',
      16: '768px',
      // breakpoints
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1920px',
    },
    fontSizes: {
      '-2': '12px',
      '-1': '14px',
      '0': '16px',
      '1': '18px',
      '2': '20px',
      '3': '24px',
      '4': '30px',
      '5': '36px',
      '6': '48px',
      '7': '60px',
      '8': '72px',
    },
    fonts: {
      system:
        '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"',
      display:
        '"Dosis", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif',
      monospace:
        '"SFMono-Regular", Consolas, "Liberation Mono", "Andale Mono", "Ubuntu Mono", Menlo, Courier, monospace',
      text: '"Inter", -apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"',
    },
    fontWeights: {
      regular: '400',
      bold: '700',
      light: '300',
    },
    lineHeights: {
      body: '140%',
      none: '1',
      tight: '110%',
    },
    letterSpacings: {
      normal: '0%',
      tight: '-1%',
      tighter: '-3%',
      wide: '5%',
    },
    borderWidths: {
      default: '2px',
    },
    borderStyles: {},
    radii: {
      default: '2px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      toast: 2147483647,
    },
    transitions: {},

    ...lightThemeConfig,
  },
})

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = stitches

export type CSS = Stitches.CSS<typeof config>
export type { VariantProps } from '@stitches/react'
export type CSSProps = { css?: CSS }
export type As = React.ElementType
export type AsProps = {
  as?: As
}
export type AsChildProps = {
  asChild?: boolean
}
export type ChildProps = {
  children?: ReactNode
}

type ThemeType = typeof theme
type ThemeKeys = Exclude<keyof ThemeType, keyof string>
type ThemeConfig = Partial<{ [Property in ThemeKeys]: ThemeType[Property] }>

export type Theme = ReturnType<typeof createTheme>

/**
 * Utility function for the creation of a dark theme based on top of our default dark theme.
 *
 */
export function createDarkTheme(
  ...args: Parameters<typeof createTheme>
): Theme {
  const className = typeof args[0] === 'string' ? args[0] : ''
  const style = ((typeof args[0] === 'object' && args[0]) ||
    args[1]) as ThemeConfig

  const mergedStyles = Object.assign({}, style, {
    shadows: { ...darkThemeConfig.shadows, ...style.shadows },
    colors: { ...darkThemeConfig.colors, ...style.colors },
  }) as ThemeConfig

  // Attempted to correctly match the types but doesn't quite work
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return createTheme(className, mergedStyles)
}

// We create fully populated theme objects so we can use them to dereference
// theme values.
//
// Stitches only populates the parts that change so we create a full clone of the theme
// and use assign to get the missing parts from the default theme.
export const lightTheme: Theme = Object.assign(
  {},
  theme,
  createTheme(LIGHT_THEME, lightThemeConfig)
)
export const darkTheme: Theme = Object.assign(
  {},
  theme,
  createTheme(DARK_THEME, darkThemeConfig)
)

export const globalStyles = globalCss({
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      margin: '0',
      padding: '0',
      border: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, svg':
    {
      display: 'block',
    },
  '*[hidden]': {
    display: 'none',
  },
  body: {
    lineHeight: '1',
    backgroundColor: '$background',
    color: '$text',
    textSizeAdjust: '100%',
    textRendering: 'optimizeLegibility',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: '',
  },
  table: {
    borderSpacing: '0',
  },
  html: {
    overflowX: 'hidden',
  },

  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  'pre, code': { margin: 0, fontFamily: '$monospace' },
  'body, button': {
    fontFamily: '$text',
  },
  '::selection': {
    backgroundColor: '$selection',
  },
})
