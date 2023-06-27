import {
  defineConfig,
  defineGlobalStyles,
  defineSemanticTokens,
  defineTokens,
} from '@pandacss/dev'
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

const globalCss = defineGlobalStyles({
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      fontSize: '100%',
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
    backgroundColor: 'token(colors.background)',
    color: 'token(colors.text)',
    textSizeAdjust: '100%',
    textRendering: 'optimizeLegibility',
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

  'pre, code': { margin: 0, fontFamily: 'token(fonts.monospace)' },
  'body, button': {
    fontFamily: 'token(colors.text)',
  },
  '::selection': {
    backgroundColor: 'token(colors.selection)',
  },
})

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  // Whether to use css reset
  preflight: true,
  globalCss,
  theme: {
    tokens: defineTokens({
      colors: {
        white: { value: '#FFFFFF' },
        black: { value: '#000000' },
        sand: {
          1: { value: sand.sand1 },
          2: { value: sand.sand2 },
          3: { value: sand.sand3 },
          4: { value: sand.sand4 },
          5: { value: sand.sand5 },
          6: { value: sand.sand6 },
          7: { value: sand.sand7 },
          8: { value: sand.sand8 },
          9: { value: sand.sand9 },
          10: { value: sand.sand10 },
          11: { value: sand.sand11 },
          12: { value: sand.sand12 },
        },
        sandDark: {
          1: { value: sand.sand1 },
          2: { value: sand.sand2 },
          3: { value: sand.sand3 },
          4: { value: sand.sand4 },
          5: { value: sand.sand5 },
          6: { value: sand.sand6 },
          7: { value: sand.sand7 },
          8: { value: sand.sand8 },
          9: { value: sand.sand9 },
          10: { value: sand.sand10 },
          11: { value: sand.sand11 },
          12: { value: sand.sand12 },
        },
      },
      sizes: {
        0: { value: '0px' },
        1: { value: '4px' },
        2: { value: '8px' },
        3: { value: '12px' },
        4: { value: '16px' },
        5: { value: '24px' },
        6: { value: '32px' },
        7: { value: '48px' },
        8: { value: '64px' },
        9: { value: '96px' },
        10: { value: '128px' },
        11: { value: '192px' },
        12: { value: '256px' },
        13: { value: '384px' },
        14: { value: '512px' },
        15: { value: '640px' },
        16: { value: '768px' },
        // breakpoints
        sm: { value: '600px' },
        md: { value: '960px' },
        lg: { value: '1280px' },
        xl: { value: '1920px' },
      },
      spacing: {
        0: { value: '0px' },
        1: { value: '4px' },
        2: { value: '8px' },
        3: { value: '12px' },
        4: { value: '16px' },
        5: { value: '24px' },
        6: { value: '32px' },
        7: { value: '48px' },
        8: { value: '64px' },
        9: { value: '96px' },
        10: { value: '128px' },
        11: { value: '192px' },
        12: { value: '256px' },
        13: { value: '384px' },
        14: { value: '512px' },
        15: { value: '640px' },
        16: { value: '768px' },
      },
      fonts: {
        system: {
          value:
            '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"',
        },
        display: {
          value:
            '"Dosis", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif',
        },
        monospace: {
          value:
            '"SFMono-Regular", Consolas, "Liberation Mono", "Andale Mono", "Ubuntu Mono", Menlo, Courier, monospace',
        },
        text: {
          value:
            '"Inter", -apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"',
        },
      },
      fontSizes: {
        '-2': { value: '12px' },
        '-1': { value: '14px' },
        '0': { value: '16px' },
        '1': { value: '18px' },
        '2': { value: '20px' },
        '3': { value: '24px' },
        '4': { value: '30px' },
        '5': { value: '36px' },
        '6': { value: '48px' },
        '7': { value: '60px' },
        '8': { value: '72px' },
      },
      fontWeights: {
        regular: { value: '400' },
        bold: { value: '700' },
        light: { value: '300' },
      },
      letterSpacings: {
        normal: { value: '0%' },
        tight: { value: '-1%' },
        tighter: { value: '-3%' },
        wide: { value: '5%' },
      },
      lineHeights: {
        body: { value: '140%' },
        none: { value: '1' },
        tight: { value: '110%' },
      },
      radii: {
        default: { value: '2px' },
        round: { value: '50%' },
        pill: { value: '9999px' },
      },
      borders: {
        default: { value: '2px' },
      },
      zIndex: {
        toast: { value: 2147483647 },
      },
    }),

    semanticTokens: defineSemanticTokens({
      colors: {
        grey1: { value: { base: sand.sand1, _dark: sandDark.sand1 } },
        grey2: { value: { base: sand.sand2, _dark: sandDark.sand2 } },
        grey3: { value: { base: sand.sand3, _dark: sandDark.sand3 } },
        grey4: { value: { base: sand.sand4, _dark: sandDark.sand4 } },
        grey5: { value: { base: sand.sand5, _dark: sandDark.sand5 } },
        grey6: { value: { base: sand.sand6, _dark: sandDark.sand6 } },
        grey7: { value: { base: sand.sand7, _dark: sandDark.sand7 } },
        grey8: { value: { base: sand.sand8, _dark: sandDark.sand8 } },
        grey9: { value: { base: sand.sand9, _dark: sandDark.sand9 } },
        grey10: { value: { base: sand.sand10, _dark: sandDark.sand10 } },
        grey11: { value: { base: sand.sand11, _dark: sandDark.sand11 } },
        grey12: { value: { base: sand.sand12, _dark: sandDark.sand12 } },

        brandYellow1: {
          value: { base: amber.amber1, _dark: amberDark.amber1 },
        },
        brandYellow2: {
          value: { base: amber.amber2, _dark: amberDark.amber2 },
        },
        brandYellow3: {
          value: { base: amber.amber3, _dark: amberDark.amber3 },
        },
        brandYellow4: {
          value: { base: amber.amber4, _dark: amberDark.amber4 },
        },
        brandYellow5: {
          value: { base: amber.amber5, _dark: amberDark.amber5 },
        },
        brandYellow6: {
          value: { base: amber.amber6, _dark: amberDark.amber6 },
        },
        brandYellow7: {
          value: { base: amber.amber7, _dark: amberDark.amber7 },
        },
        brandYellow8: {
          value: { base: amber.amber8, _dark: amberDark.amber8 },
        },
        brandYellow9: {
          value: { base: amber.amber9, _dark: amberDark.amber9 },
        },
        brandYellow10: {
          value: { base: amber.amber10, _dark: amberDark.amber10 },
        },
        brandYellow11: {
          value: { base: amber.amber11, _dark: amberDark.amber11 },
        },
        brandYellow12: {
          value: { base: amber.amber12, _dark: amberDark.amber12 },
        },

        brandGrey1: { value: { base: gray.gray1, _dark: grayDark.gray1 } },
        brandGrey2: { value: { base: gray.gray2, _dark: grayDark.gray2 } },
        brandGrey3: { value: { base: gray.gray3, _dark: grayDark.gray3 } },
        brandGrey4: { value: { base: gray.gray4, _dark: grayDark.gray4 } },
        brandGrey5: { value: { base: gray.gray5, _dark: grayDark.gray5 } },
        brandGrey6: { value: { base: gray.gray6, _dark: grayDark.gray6 } },
        brandGrey7: { value: { base: gray.gray7, _dark: grayDark.gray7 } },
        brandGrey8: { value: { base: gray.gray8, _dark: grayDark.gray8 } },
        brandGrey9: { value: { base: gray.gray9, _dark: grayDark.gray9 } },
        brandGrey10: { value: { base: gray.gray10, _dark: grayDark.gray10 } },
        brandGrey11: { value: { base: gray.gray11, _dark: grayDark.gray11 } },
        brandGrey12: { value: { base: gray.gray12, _dark: grayDark.gray12 } },

        error1: { value: { base: red.red1, _dark: redDark.red1 } },
        error2: { value: { base: red.red2, _dark: redDark.red2 } },
        error3: { value: { base: red.red3, _dark: redDark.red3 } },
        error4: { value: { base: red.red4, _dark: redDark.red4 } },
        error5: { value: { base: red.red5, _dark: redDark.red5 } },
        error6: { value: { base: red.red6, _dark: redDark.red6 } },
        error7: { value: { base: red.red7, _dark: redDark.red7 } },
        error8: { value: { base: red.red8, _dark: redDark.red8 } },
        error9: { value: { base: red.red9, _dark: redDark.red9 } },
        error10: { value: { base: red.red10, _dark: redDark.red10 } },
        error11: { value: { base: red.red11, _dark: redDark.red11 } },
        error12: { value: { base: red.red12, _dark: redDark.red12 } },

        info1: { value: { base: blue.blue1, _dark: blueDark.blue1 } },
        info2: { value: { base: blue.blue2, _dark: blueDark.blue2 } },
        info3: { value: { base: blue.blue3, _dark: blueDark.blue3 } },
        info4: { value: { base: blue.blue4, _dark: blueDark.blue4 } },
        info5: { value: { base: blue.blue5, _dark: blueDark.blue5 } },
        info6: { value: { base: blue.blue6, _dark: blueDark.blue6 } },
        info7: { value: { base: blue.blue7, _dark: blueDark.blue7 } },
        info8: { value: { base: blue.blue8, _dark: blueDark.blue8 } },
        info9: { value: { base: blue.blue9, _dark: blueDark.blue9 } },
        info10: { value: { base: blue.blue10, _dark: blueDark.blue10 } },
        info11: { value: { base: blue.blue11, _dark: blueDark.blue11 } },
        info12: { value: { base: blue.blue12, _dark: blueDark.blue12 } },

        warning1: {
          value: { base: orange.orange1, _dark: orangeDark.orange1 },
        },
        warning2: {
          value: { base: orange.orange2, _dark: orangeDark.orange2 },
        },
        warning3: {
          value: { base: orange.orange3, _dark: orangeDark.orange3 },
        },
        warning4: {
          value: { base: orange.orange4, _dark: orangeDark.orange4 },
        },
        warning5: {
          value: { base: orange.orange5, _dark: orangeDark.orange5 },
        },
        warning6: {
          value: { base: orange.orange6, _dark: orangeDark.orange6 },
        },
        warning7: {
          value: { base: orange.orange7, _dark: orangeDark.orange7 },
        },
        warning8: {
          value: { base: orange.orange8, _dark: orangeDark.orange8 },
        },
        warning9: {
          value: { base: orange.orange9, _dark: orangeDark.orange9 },
        },
        warning10: {
          value: { base: orange.orange10, _dark: orangeDark.orange10 },
        },
        warning11: {
          value: { base: orange.orange11, _dark: orangeDark.orange11 },
        },
        warning12: {
          value: { base: orange.orange12, _dark: orangeDark.orange12 },
        },

        success1: { value: { base: grass.grass1, _dark: grassDark.grass1 } },
        success2: { value: { base: grass.grass2, _dark: grassDark.grass2 } },
        success3: { value: { base: grass.grass3, _dark: grassDark.grass3 } },
        success4: { value: { base: grass.grass4, _dark: grassDark.grass4 } },
        success5: { value: { base: grass.grass5, _dark: grassDark.grass5 } },
        success6: { value: { base: grass.grass6, _dark: grassDark.grass6 } },
        success7: { value: { base: grass.grass7, _dark: grassDark.grass7 } },
        success8: { value: { base: grass.grass8, _dark: grassDark.grass8 } },
        success9: { value: { base: grass.grass9, _dark: grassDark.grass9 } },
        success10: { value: { base: grass.grass10, _dark: grassDark.grass10 } },
        success11: { value: { base: grass.grass11, _dark: grassDark.grass11 } },
        success12: { value: { base: grass.grass12, _dark: grassDark.grass12 } },

        primary1: {
          value: {
            base: '{colors.brandGrey1}',
            _dark: '{colors.brandYellow1}',
          },
        },
        primary2: {
          value: {
            base: '{colors.brandGrey2}',
            _dark: '{colors.brandYellow2}',
          },
        },
        primary3: {
          value: {
            base: '{colors.brandGrey3}',
            _dark: '{colors.brandYellow3}',
          },
        },
        primary4: {
          value: {
            base: '{colors.brandGrey4}',
            _dark: '{colors.brandYellow4}',
          },
        },
        primary5: {
          value: {
            base: '{colors.brandGrey5}',
            _dark: '{colors.brandYellow5}',
          },
        },
        primary6: {
          value: {
            base: '{colors.brandGrey6}',
            _dark: '{colors.brandYellow6}',
          },
        },
        primary7: {
          value: {
            base: '{colors.brandGrey7}',
            _dark: '{colors.brandYellow7}',
          },
        },
        primary8: {
          value: {
            base: '{colors.brandGrey8}',
            _dark: '{colors.brandYellow8}',
          },
        },
        primary9: {
          value: {
            base: '{colors.brandGrey9}',
            _dark: '{colors.brandYellow9}',
          },
        },
        primary10: {
          value: {
            base: '{colors.$brandGrey10}',
            _dark: '{colors.brandYellow10}',
          },
        },
        primary11: {
          value: {
            base: '{colors.$brandGrey11}',
            _dark: '{colors.brandYellow11}',
          },
        },
        primary12: {
          value: {
            base: '{colors.$brandGrey12}',
            _dark: '{colors.brandYellow12}',
          },
        },

        transparency1: {
          value: { base: blackA.blackA1, _dark: whiteA.whiteA1 },
        },
        transparency2: {
          value: { base: blackA.blackA2, _dark: whiteA.whiteA2 },
        },
        transparency3: {
          value: { base: blackA.blackA3, _dark: whiteA.whiteA3 },
        },
        transparency4: {
          value: { base: blackA.blackA4, _dark: whiteA.whiteA4 },
        },
        transparency5: {
          value: { base: blackA.blackA5, _dark: whiteA.whiteA5 },
        },
        transparency6: {
          value: { base: blackA.blackA6, _dark: whiteA.whiteA6 },
        },
        transparency7: {
          value: { base: blackA.blackA7, _dark: whiteA.whiteA7 },
        },
        transparency8: {
          value: { base: blackA.blackA8, _dark: whiteA.whiteA8 },
        },
        transparency9: {
          value: { base: blackA.blackA9, _dark: whiteA.whiteA9 },
        },
        transparency10: {
          value: { base: blackA.blackA10, _dark: whiteA.whiteA10 },
        },
        transparency11: {
          value: { base: blackA.blackA11, _dark: whiteA.whiteA11 },
        },
        transparency12: {
          value: { base: blackA.blackA12, _dark: whiteA.whiteA12 },
        },

        brandYellow: {
          value: {
            base: '{colors.brandYellow9}',
            _dark: '{colors.brandYellow9}',
          },
        },
        brandGrey: {
          value: { base: '{colors.brandGrey8}', _dark: '{colors.brandGrey8}' },
        },
        brand: {
          value: { base: '{colors.brandGrey9}', _dark: '{colors.brandGrey9}' },
        },
        brandHighlight: {
          value: {
            base: '{colors.brandGrey10}',
            _dark: '{colors.brandGrey10}',
          },
        },
        brandContrast: {
          value: {
            base: '{colors.brandYellow}',
            _dark: '{colors.brandYellow}',
          },
        },
        brandLowlight: {
          value: { base: '{colors.brandGrey8}', _dark: '{colors.brandGrey8}' },
        },
        brandBackground: {
          value: { base: '{colors.brandGrey2}', _dark: '{colors.brandGrey2}' },
        },
        brandActive: {
          value: {
            base: '{colors.brandYellow}',
            _dark: '{colors.brandYellow}',
          },
        },
        background: { value: { base: '#f7f7f7', _dark: '#000000' } },
        paper: { value: { base: '{colors.white}', _dark: '#f7f7f7' } },
        tooltip: {
          value: { base: '{colors.black}', _dark: '{colors.grey11}' },
        },
        selection: {
          value: { base: '#ffbb00aa', _dark: '{colors.black}' },
        },
        text: { value: { base: '#3b3b3b', _dark: '#222222' } },
        textSecondary: {
          value: { base: '{colors.grey11}', _dark: '{colors.white}' },
        },
        textTooltip: { value: { base: '{colors.white}', _dark: '#ffbb00aa' } },
        primary: {
          value: { base: '{colors.primary9}', _dark: '{colors.brandYellow9}' },
        },
        primaryHighlight: {
          value: { base: '{colors.primary10}', _dark: '{colors.brandGrey9}' },
        },
        primaryLowlight: {
          value: { base: '{colors.primary8}', _dark: '{colors.brandYellow10}' },
        },
        primaryBackground: {
          value: { base: '{colors.primary2}', _dark: '{colors.brandYellow7}' },
        },
        primaryContrast: {
          value: {
            base: '{colors.brandYellow}',
            _dark: '{colors.brandYellow4}',
          },
        },
        primaryActive: {
          value: {
            base: '{colors.brandYellow}',
            _dark: '{colors.brandYellow1}',
          },
        },
        default: {
          value: {
            base: '{colors.black}',
            _dark: '{colors.white}',
          },
        },
        defaultHighlight: {
          value: {
            base: '{colors.transparency5}',
            _dark: '{colors.transparency2}',
          },
        },
        defaultLowlight: {
          value: {
            base: '{colors.transparency5}',
            _dark: '{colors.transparency4}',
          },
        },
        defaultBackground: {
          value: {
            base: '{colors.transparent}',
            _dark: '{colors.transparent}',
          },
        },
        defaultContrast: {
          value: { base: '{colors.white}', _dark: '{colors.black}' },
        },
        defaultActive: {
          value: {
            base: '{colors.transparency6}',
            _dark: '{colors.transparency3}',
          },
        },
        error: { value: { base: '{colors.error9}', _dark: '{colors.error9}' } },
        errorHighlight: {
          value: { base: '{colors.error10}', _dark: '{colors.error10}' },
        },
        errorLowlight: {
          value: { base: '{colors.error6}', _dark: '{colors.error6}' },
        },
        errorBackground: {
          value: { base: '{colors.error4}', _dark: '{colors.error4}' },
        },
        errorContrast: {
          value: { base: '{colors.paper}', _dark: '{colors.paper}' },
        },
        errorActive: {
          value: { base: '{colors.error1}', _dark: '{colors.error1}' },
        },
        success: {
          value: { base: '{colors.success9}', _dark: '{colors.success9}' },
        },
        successHighlight: {
          value: { base: '{colors.success10}', _dark: '{colors.success10}' },
        },
        successLowlight: {
          value: { base: '{colors.success6}', _dark: '{colors.success6}' },
        },
        successBackground: {
          value: { base: '{colors.success4}', _dark: '{colors.success4}' },
        },
        successContrast: {
          value: { base: '{colors.paper}', _dark: '{colors.paper}' },
        },
        successActive: {
          value: { base: '{colors.success1}', _dark: '{colors.success1}' },
        },
        warning: {
          value: { base: '{colors.warning9}', _dark: '{colors.warning9}' },
        },
        warningHighlight: {
          value: { base: '{colors.warning10}', _dark: '{colors.warning10}' },
        },
        warningLowlight: {
          value: { base: '{colors.warning6}', _dark: '{colors.warning6}' },
        },
        warningBackground: {
          value: { base: '{colors.warning4}', _dark: '{colors.warning4}' },
        },
        warningContrast: {
          value: { base: '{colors.paper}', _dark: '{colors.paper}' },
        },
        warningActive: {
          value: { base: '{colors.warning1}', _dark: '{colors.warning1}' },
        },
        info: { value: { base: '{colors.info9}', _dark: '{colors.info9}' } },
        infoHighlight: {
          value: { base: '{colors.info10}', _dark: '{colors.info10}' },
        },
        infoLowlight: {
          value: { base: '{colors.info6}', _dark: '{colors.info6}' },
        },
        infoBackground: {
          value: { base: '{colors.info4}', _dark: '{colors.info4}' },
        },
        infoContrast: {
          value: { base: '{colors.paper}', _dark: '{colors.paper}' },
        },
        infoActive: {
          value: { base: '{colors.info1}', _dark: '{colors.info1}' },
        },
      },
      shadows: {
        1: {
          value: {
            base: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            _dark:
              '0px 2px 1px -1px rgb(0 0 0 / 40%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 30%)',
          },
        },
        2: {
          value: {
            base: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
            _dark:
              '0px 3px 3px -2px rgba(0,0,0,0.4), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.3)',
          },
        },
        3: {
          value: {
            base: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
            _dark:
              '0px 3px 5px -1px rgba(0,0,0,0.4),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.3)',
          },
        },
        hover: {
          value: {
            base: 'inset 0 0 0 1px {colors.grey4}',
            _dark: 'inset 0 0 0 1px {colors.grey6}',
          },
        },
        focus: {
          value: {
            base: 'inset 0 0 0 1px {colors.grey4}, 0 0 0 1px {colors.grey4}',
            _dark: 'inset 0 0 0 1px {colors.grey6}, 0 0 0 1px {colors.grey6}',
          },
        },
      },
    }),
  },

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
})
