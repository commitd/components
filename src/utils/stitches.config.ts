import { createCss, StitchesCss } from '@stitches/react'
export type { StitchesVariants } from '@stitches/react'
import {
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
} from '@radix-ui/colors'

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

  brand1: '$amber1',
  brand2: '$amber2',
  brand3: '$amber3',
  brand4: '$amber4',
  brand5: '$amber5',
  brand6: '$amber6',
  brand7: '$amber7',
  brand8: '$amber8',
  brand9: 'hsl(44 100% 50%)',
  brand10: '$amber10',
  brand11: '$amber11',
  brand12: '$amber12',

  primary1: 'hsl(0 0% 99.0%)',
  primary2: 'hsl(0 0% 97.3%)',
  primary3: 'hsl(0 0% 95.1%)',
  primary4: 'hsl(0 0% 89%)',
  primary5: 'hsl(0 0% 78%)',
  primary6: 'hsl(0 0% 67%)',
  primary7: 'hsl(0 0% 56%)',
  primary8: 'hsl(0 0% 48%)',
  primary9: 'hsl(0 0% 24%)',
  primary10: 'hsl(0 0% 18%)',
  primary11: 'hsl(0 0% 43.5%)',
  primary12: 'hsl(44 100% 50%)',

  error1: '$red1',
  error2: '$red2',
  error3: '$red3',
  error4: '$red4',
  error5: '$red5',
  error6: '$red6',
  error7: '$red7',
  error8: '$red8',
  error9: '#ba2525', //'$red9',
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

const stitches = createCss({
  theme: {
    colors: {
      ...sand,
      ...yellow,
      ...blue,
      ...amber,
      ...red,
      ...grass,
      ...orange,

      transparency1: 'hsla(0,0%,0%,0.05)',
      transparency2: 'hsla(0,0%,0%,0.08)',
      transparency3: 'hsla(0,0%,0%,0.1)',
      transparency4: 'hsla(0,0%,0%,0.15)',
      transparency5: 'hsla(0,0%,0%,0.2)',
      transparency6: 'hsla(0,0%,0%,0.25)',
      transparency7: 'hsla(0,0%,0%,0.3)',
      transparency8: 'hsla(0,0%,0%,0.35)',
      transparency9: 'hsla(0,0%,0%,0.4)',
      transparency10: 'hsla(0,0%,0%,0.5)',
      transparency11: 'hsla(0,0%,0%,0.6)',
      transparency12: 'hsla(0,0%,0%,0.7)',

      brandYellow: '#ffbb00',
      brandGrey: '#565555',
      brand: '#3e3e3e',
      brandHighlight: '$grey10',
      brandContrast: '$brandYellow',

      white: '#FFFFFF',
      black: '#000000',

      // Semantic colors
      background: '#f7f7f7',
      paper: '$white',
      tooltip: '$black',
      selection: '#ffbb00aa',
      text: '#3b3b3b',
      textSecondary: '$grey4',
      textTooltip: '$white',

      ...semanticColors,

      greySubtle: '$sand1',
      greyBgLight: '$sand2',
      greyBg: '$sand3',
      greyBgHover: '$sand4',
      greyBgActive: '$sand5',
      greyLine: '$sand6',
      greyBorder: '$sand7',
      greyBorderHover: '$sand8',
      greyPure: '$sand9',
      greyPureHover: '$sand10',
      greyText: '$sand11',
      greyTextContrast: '$sand12',

      primary: '$primary9',
      primaryHighlight: '$primary10',
      primaryLowlight: '$primary8',
      primaryBackground: '$primary2',
      primaryContrast: '$brandYellow',
      primaryActive: '#ffbb00aa',
      default: '$black',
      defaultHighlight: '$transparency1',
      defaultLowlight: '$transparency4',
      defaultBackground: 'transparent',
      defaultContrast: '$white',
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
    shadows: {
      1: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
      2: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
      3: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    },
    zIndices: {},
    transitions: {},
  },
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
    p: (config) => (
      value: `$${
        | keyof typeof config['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (config) => (
      value: `$${
        | keyof typeof config['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      paddingTop: value,
    }),
    pr: (config) => (
      value: `$${
        | keyof typeof config['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      paddingRight: value,
    }),
    pb: (config) => (
      value: `$${
        | keyof typeof config['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      paddingBottom: value,
    }),
    pl: (config) => (
      value: `$${
        | keyof typeof config['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      paddingLeft: value,
    }),
    px: (config) => (
      value: `$${
        | keyof typeof config['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (
      value: `$${
        | keyof typeof config['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (config) => (
      value: `$${
        | keyof typeof config['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (
      value: `$${
        | keyof typeof config['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      marginTop: value,
    }),
    mr: (config) => (
      value: `$${
        | keyof typeof config['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      marginRight: value,
    }),
    mb: (config) => (
      value: `$${
        | keyof typeof config['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      marginBottom: value,
    }),
    ml: (config) => (
      value: `$${
        | keyof typeof config['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      marginLeft: value,
    }),
    mx: (config) => (
      value: `$${
        | keyof typeof config['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (
      value: `$${
        | keyof typeof config['theme']['space']
        | (string & Record<string, unknown>)}`
    ) => ({
      marginTop: value,
      marginBottom: value,
    }),

    size: (config) => (
      value: `$${
        | keyof typeof config['theme']['sizes']
        | (string & Record<string, unknown>)}`
    ) => ({
      width: value,
      height: value,
    }),
  },
})

export type CSS = StitchesCss<typeof stitches>
export const {
  styled,
  css,
  global: globalCss,
  keyframes,
  getCssString,
  theme,
  config,
} = stitches

export const lightTheme = theme('light-theme', {})

export const darkTheme = theme('dark-theme', {
  colors: {
    ...sandDark,
    ...yellowDark,
    ...blueDark,
    ...amberDark,
    ...redDark,
    ...grassDark,
    ...orangeDark,

    ...semanticColors,

    primary1: '$amber1',
    primary2: '$amber2',
    primary3: '$amber3',
    primary4: '$amber4',
    primary5: '$amber5',
    primary6: '$amber6',
    primary7: '$amber7',
    primary8: '$amber8',
    primary9: 'hsl(40 100% 50%)',
    primary10: 'hsl(44 100% 50%)',
    primary11: '$amber11',
    primary12: 'hsl(0 0% 24%)',

    transparency1: 'hsla(0,0%,0%,0.55)',
    transparency2: 'hsla(0,0%,0%,0.58)',
    transparency3: 'hsla(0,0%,0%,0.6)',
    transparency4: 'hsla(0,0%,0%,0.65)',
    transparency5: 'hsla(0,0%,0%,0.7)',
    transparency6: 'hsla(0,0%,0%,0.75)',
    transparency7: 'hsla(0,0%,0%,0.8)',
    transparency8: 'hsla(0,0%,0%,0.85)',
    transparency9: 'hsla(0,0%,0%,0.9)',
    transparency10: 'hsla(0,0%,0%,0.95)',
    transparency11: 'hsla(0,0%,0%,0.96)',
    transparency12: 'hsla(0,0%,0%,0.99)',

    // Semantic colors
    greySubtle: '$sand1',
    greyBgLight: '$sand2',
    greyBg: '$sand3',
    greyBgHover: '$sand4',
    greyBgActive: '$sand5',
    greyLine: '$sand6',
    greyBorder: '$sand7',
    greyBorderHover: '$sand8',
    greyPure: '$sand9',
    greyPureHover: '$sand10',
    greyText: '$sand11',
    greyTextContrast: '$sand12',

    background: '#000000',
    text: '#f7f7f7',
    textSecondary: '$grey300',
    textTooltip: '$black',
    paper: '#222222',
    tooltip: '$white',
    selection: '#ffbb00aa',

    primary: '$brand9',
    primaryContrast: '$grey9',
    primaryHighlight: '$brand10',
    primaryLowlight: '$brand7',
    primaryBackground: '$brand4',
    primaryActive: '$brand1',
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
})

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
  '@global': {
    textSizeAdjust: '100%',
    textRendering: 'optimizeLegibility',
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
