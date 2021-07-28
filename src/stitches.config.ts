import { createCss } from '@stitches/react'
import type { StitchesCss, ThemeRule } from '@stitches/react'
export type { StitchesVariants } from '@stitches/react'
import {
  gray,
  grayDark,
  sand,
  sandDark,
  yellow,
  yellowDark,
  blue,
  blueDark,
  amber,
  amberDark,
  red,
  redDark,
  grass,
  grassDark,
  orange,
  orangeDark,
  whiteA,
  blackA,
} from '@radix-ui/colors'

const LIGHT_THEME = 'light-theme'
const DARK_THEME = 'dark-theme'

const semanticColors = {
  grey1: '$sand1',
  grey2: '$sand2',
  grey3: '$sand3',
  grey4: '$sand4',
  grey5: '$sand5',
  grey6: '$sand6',
  grey7: '$sand7',
  grey8: '$sand8',
  grey9: '$sand9',
  grey10: '$sand10',
  grey11: '$sand11',
  grey12: '$sand12',

  brandYellow1: '$amber1',
  brandYellow2: '$amber2',
  brandYellow3: '$amber3',
  brandYellow4: '$amber4',
  brandYellow5: '$amber5',
  brandYellow6: '$amber6',
  brandYellow7: '$amber7',
  brandYellow8: '$amber8',
  brandYellow9: '$amber9',
  brandYellow10: '$amber10',
  brandYellow11: '$amber11',
  brandYellow12: '$amber12',

  brandGrey1: '$gray1',
  brandGrey2: '$gray2',
  brandGrey3: '$gray3',
  brandGrey4: '$gray4',
  brandGrey5: '$gray5',
  brandGrey6: '$gray6',
  brandGrey7: '$gray7',
  brandGrey8: '$gray8',
  brandGrey9: '$gray9',
  brandGrey10: '$gray10',
  brandGrey11: '$gray11',
  brandGrey12: '$gray12',

  error1: '$red1',
  error2: '$red2',
  error3: '$red3',
  error4: '$red4',
  error5: '$red5',
  error6: '$red6',
  error7: '$red7',
  error8: '$red8',
  error9: '$red9',
  error10: '$red10',
  error11: '$red11',
  error12: '$red12',

  info1: '$blue1',
  info2: '$blue2',
  info3: '$blue3',
  info4: '$blue4',
  info5: '$blue5',
  info6: '$blue6',
  info7: '$blue7',
  info8: '$blue8',
  info9: '$blue9',
  info10: '$blue10',
  info11: '$blue11',
  info12: '$blue12',

  warning1: '$orange1',
  warning2: '$orange2',
  warning3: '$orange3',
  warning4: '$orange4',
  warning5: '$orange5',
  warning6: '$orange6',
  warning7: '$orange7',
  warning8: '$orange8',
  warning9: '$orange9',
  warning10: '$orange10',
  warning11: '$orange11',
  warning12: '$orange12',

  success1: '$grass1',
  success2: '$grass2',
  success3: '$grass3',
  success4: '$grass4',
  success5: '$grass5',
  success6: '$grass6',
  success7: '$grass7',
  success8: '$grass8',
  success9: '$grass9',
  success10: '$grass10',
  success11: '$grass11',
  success12: '$grass12',
}

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

    // Imports

    ...gray,
    ...sand,
    ...yellow,
    ...blue,
    ...amber,
    ...red,
    ...grass,
    ...orange,
    ...blackA,

    // Palettes

    ...semanticColors,

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

    transparency1: '$blackA1',
    transparency2: '$blackA2',
    transparency3: '$blackA3',
    transparency4: '$blackA4',
    transparency5: '$blackA5',
    transparency6: '$blackA6',
    transparency7: '$blackA7',
    transparency8: '$blackA8',
    transparency9: '$blackA9',
    transparency10: '$blackA10',
    transparency11: '$blackA11',
    transparency12: '$blackA12',

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

    // Imports

    ...grayDark,
    ...sandDark,
    ...yellowDark,
    ...blueDark,
    ...amberDark,
    ...redDark,
    ...grassDark,
    ...orangeDark,
    ...whiteA,

    // Palettes

    ...semanticColors,

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

    transparency1: '$whiteA1',
    transparency2: '$whiteA2',
    transparency3: '$whiteA3',
    transparency4: '$whiteA4',
    transparency5: '$whiteA5',
    transparency6: '$whiteA6',
    transparency7: '$whiteA7',
    transparency8: '$whiteA8',
    transparency9: '$whiteA9',
    transparency10: '$whiteA10',
    transparency11: '$whiteA11',
    transparency12: '$whiteA12',

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

const stitches = createCss({
  media: {
    sm: '(min-width: 600px)',
    md: '(min-width: 960px)',
    lg: '(min-width: 1280px)',
    xl: '(min-width: 1920px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (conf) => (
      value: `$${
        | keyof typeof conf['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (conf) => (
      value: `$${
        | keyof typeof conf['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      paddingTop: value,
    }),
    pr: (conf) => (
      value: `$${
        | keyof typeof conf['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      paddingRight: value,
    }),
    pb: (conf) => (
      value: `$${
        | keyof typeof conf['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      paddingBottom: value,
    }),
    pl: (conf) => (
      value: `$${
        | keyof typeof conf['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      paddingLeft: value,
    }),
    px: (conf) => (
      value: `$${
        | keyof typeof conf['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (conf) => (
      value: `$${
        | keyof typeof conf['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (conf) => (
      value: `$${
        | keyof typeof conf['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (conf) => (
      value: `$${
        | keyof typeof conf['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      marginTop: value,
    }),
    mr: (conf) => (
      value: `$${
        | keyof typeof conf['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      marginRight: value,
    }),
    mb: (conf) => (
      value: `$${
        | keyof typeof conf['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      marginBottom: value,
    }),
    ml: (conf) => (
      value: `$${
        | keyof typeof conf['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      marginLeft: value,
    }),
    mx: (conf) => (
      value: `$${
        | keyof typeof conf['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (conf) => (
      value: `$${
        | keyof typeof conf['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      marginTop: value,
      marginBottom: value,
    }),

    size: (conf) => (
      value: `$${
        | keyof typeof conf['theme']['sizes']
        | (string & Record<string, unknown>)}`
    ) => ({
      width: value,
      height: value,
    }),
    '@dark': (conf) => (
      // Should not need the Record but causes TS errors without it.
      // May be fixes in later version of Stitches
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: StitchesCss<typeof conf> | Record<string, any>
    ) => ({
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
      text:
        '"Inter", -apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"',
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
    zIndices: {},
    transitions: {},

    ...lightThemeConfig,
  },
})

export const {
  styled,
  css,
  global: globalCss,
  keyframes,
  getCssString,
  theme,
  config,
} = stitches

export type CSS = StitchesCss<typeof stitches>
export type CSSProps = { css?: CSS }

/**
 * A utility type for use when extracting common styles.
 *
 * The generic parameter should be the `typeof` the variants, this is required to infer the correct props on the component.
 * This API/Typing may change with stitches versions, so only use when required.
 */
export type StyledConfig<T = undefined> = Parameters<typeof styled>[1] & {
  variants: T
}

export type Theme = ThemeRule & string

// We create fully populated theme objects so we can use them to dereference
// theme values.
//
// Stitches only populates the parts that change so we create a full clone of the theme
// and use assign to get the missing parts from the default theme.
export const lightTheme: Theme = Object.assign(
  {},
  theme,
  theme(LIGHT_THEME, lightThemeConfig)
)
export const darkTheme: Theme = Object.assign(
  {},
  theme,
  theme(DARK_THEME, darkThemeConfig)
)

export const globalStyles = globalCss({
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
    margin: '0',
    padding: '0',
    border: '0',
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
  },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, svg': {
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
