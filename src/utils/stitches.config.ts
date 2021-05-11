import { createCss, StitchesCss } from '@stitches/react'
export type { StitchesVariants } from '@stitches/react'

const stitches = createCss({
  theme: {
    colors: {
      yellow100: '#ffeecc',
      yellow200: '#ffde99',
      yellow300: '#ffcd66',
      yellow400: '#ffbd33',
      yellow500: '#ffac00',
      yellow600: '#cc8a00',
      yellow700: '#996700',
      yellow800: '#664500',
      yellow900: '#332200',

      grey100: '#d8d8d8',
      grey200: '#b2b2b2',
      grey300: '#8b8b8b',
      grey400: '#656565',
      grey500: '#3e3e3e',
      grey600: '#323232',
      grey700: '#252525',
      grey800: '#191919',
      grey900: '#0c0c0c',

      blue100: '#d4e6f3',
      blue200: '#a8cce7',
      blue300: '#7db3da',
      blue400: '#5199ce',
      blue500: '#2680c2',
      blue600: '#1e669b',
      blue700: '#174d74',
      blue800: '#0f334e',
      blue900: '#081a27',

      green100: '#d4eee6',
      green200: '#a9ddcd',
      green300: '#7dcdb5',
      green400: '#52bc9c',
      green500: '#27ab83',
      green600: '#1f8969',
      green700: '#17674f',
      green800: '#104434',
      green900: '#08221a',

      red100: '#f1d3d3',
      red200: '#e3a8a8',
      red300: '#d67c7c',
      red400: '#c85151',
      red500: '#ba2525',
      red600: '#951e1e',
      red700: '#701616',
      red800: '#4a0f0f',
      red900: '#250707',

      orange100: '#fae4d7',
      orange200: '#f5c8ae',
      orange300: '#f0ad86',
      orange400: '#eb915d',
      orange500: '#e67635',
      orange600: '#b85e2a',
      orange700: '#8a4720',
      orange800: '#5c2f15',
      orange900: '#2e180b',

      transparency100: 'hsla(0,0%,0%,0.1)',
      transparency200: 'hsla(0,0%,0%,0.2)',
      transparency300: 'hsla(0,0%,0%,0.3)',
      transparency400: 'hsla(0,0%,0%,0.4)',
      transparency500: 'hsla(0,0%,0%,0.5)',
      transparency600: 'hsla(0,0%,0%,0.6)',
      transparency700: 'hsla(0,0%,0%,0.7)',
      transparency800: 'hsla(0,0%,0%,0.8)',
      transparency900: 'hsla(0,0%,0%,0.9)',

      brandYellow: '#ffbb00',
      brandGrey: '#565555',

      white: '#FFFFFF',
      black: '#000000',

      // Semantic colors

      background: '#f7f7f7',
      paper: '$white',
      text: '#3b3b3b',
      primary: '$grey500',
      primaryHighlight: '$grey700',
      primaryLowlight: '$grey400',
      primaryBackground: '$grey100',
      primaryContrast: '$brandYellow',
      primaryActive: '#ffbb00aa',
      default: '$black',
      defaultHighlight: '$transparency100',
      defaultLowlight: '$grey400',
      defaultBackground: 'transparent',
      defaultContrast: '$white',
      defaultActive: '$transparency200',
      error: '$red500',
      errorHighlight: '$red600',
      errorLowlight: '$red300',
      errorBackground: '$red100',
      errorContrast: '$paper',
      errorActive: '#ba2525aa',
      success: '$green500',
      successHighlight: '$green600',
      successLowlight: '$green300',
      successBackground: '$green100',
      successContrast: '$paper',
      successActive: '#27ab83aa',
      warning: '$orange500',
      warningHighlight: '$orange600',
      warningLowlight: '$orange300',
      warningBackground: '$orange100',
      warningContrast: '$paper',
      warningActive: '#e67635aa',
      info: '$blue500',
      infoHighlight: '$blue600',
      infoLowlight: '$blue300',
      infoBackground: '$blue100',
      infoContrast: '$paper',
      infoActive: '#2680c2aa',
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
      display: '"Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif',
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
      auto: 'AUTO',
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
      round: '99999px',
    },
    shadows: {
      1: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
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
    // Semantic colors

    background: '#000000',
    text: '#f7f7f7',
    primary: '$yellow500',
    primaryContrast: '$grey900',
    primaryHighlight: '$yellow400',
    primaryLowlight: '$yellow600',
    primaryBackground: '$yellow900',
    primaryActive: '#ffbb00aa',
    default: '$white',
    defaultHighlight: '$transparency200',
    defaultLowlight: '$grey400',
    defaultBackground: 'transparent',
    defaultContrast: '$black',
    defaultActive: '$transparency400',
    error: '$red500',
    errorHighlight: '$red400',
    errorLowlight: '$red600',
    errorBackground: '$red900',
    errorContrast: '$paper',
    errorActive: '#ba2525aa',
    success: '$green500',
    successHighlight: '$green400',
    successLowlight: '$green600',
    successBackground: '$green900',
    successContrast: '$paper',
    successActive: '#27ab83aa',
    warning: '$orange500',
    warningHighlight: '$orange400',
    warningLowlight: '$orange600',
    warningBackground: '$orange900',
    warningContrast: '$paper',
    warningActive: '#e67635aa',
    info: '$blue500',
    infoHighlight: '$blue400',
    infoLowlight: '$blue600',
    infoBackground: '$blue900',
    infoContrast: '$paper',
    infoActive: '#2680c2aa',
    paper: '#222222',
  },
})

export const globalStyles = globalCss({
  '@global': {
    textSizeAdjust: '100%',
    textRendering: 'optimizeLegibility',
  },
  html: {
    overflowX: 'hidden',
  },
  body: {
    margin: 0,
  },
  '*': { margin: 0, padding: 0 },
  svg: { display: 'block' },

  'pre, code': { margin: 0, fontFamily: '$monospace' },
  'body, button': {
    fontFamily: '$text',
  },
})
// TODO:
//   {
//   '@global': {
//     'button, input, optgroup, select, textarea': {
//       fontFamily: 'inherit',
//       fontSize: 'inherit',
//     },
//   },

//   //'body, button': {
//   // fontFamily: '$untitled',
//   //},

//   // '::selection': {
//   //   backgroundColor: '$violet300',
//   // },
// })
