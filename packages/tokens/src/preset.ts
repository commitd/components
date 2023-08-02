import {
  defineGlobalStyles,
  definePreset,
  defineSemanticTokens,
  defineTokens,
} from '@pandacss/dev'
import type { Preset, PropertyValues } from '@pandacss/types'

const globalCss = defineGlobalStyles({
  // 'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video':
  //   {
  //     fontSize: '100%',
  //     verticalAlign: 'baseline',
  //   },
  // 'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, svg':
  //   {
  //     display: 'block',
  //   },
  '*[hidden]': {
    display: 'none',
  },
  body: {
    lineHeight: '1',
    backgroundColor: 'var(--colors-\\$background)',
    color: 'var(--colors-\\$text)',
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

  // '*, *::before, *::after': {
  //   boxSizing: 'border-box',
  // },

  'pre, code': { margin: 0, fontFamily: 'var(--fonts.\\$monospace)' },
  'body, button': {
    fontFamily: 'var(--fonts.\\$text)',
  },
  '::selection': {
    backgroundColor: 'var(--colors.\\$selection)',
  },

  button: {
    alignItems: 'center',
    appearance: 'none',
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'center',
    lineHeight: 'none',
    margin: '0',
    outline: 'none',
    padding: '0',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  },
})

const sizeValues: PropertyValues = (theme) => ({
  auto: 'auto',
  ...theme('sizes'),
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
})

export function presetTokens(): Preset {
  return definePreset({
    globalCss,
    theme: {
      tokens: defineTokens({
        sizes: {
          $0: { value: '0px' },
          $1: { value: '4px' },
          $2: { value: '8px' },
          $3: { value: '12px' },
          $4: { value: '16px' },
          $5: { value: '24px' },
          $6: { value: '32px' },
          $7: { value: '48px' },
          $8: { value: '64px' },
          $9: { value: '96px' },
          $10: { value: '128px' },
          $11: { value: '192px' },
          $12: { value: '256px' },
          $13: { value: '384px' },
          $14: { value: '512px' },
          $15: { value: '640px' },
          $16: { value: '768px' },
          // breakpoints
          $sm: { value: '600px' },
          $md: { value: '960px' },
          $lg: { value: '1280px' },
          $xl: { value: '1920px' },
        },
        spacing: {
          $0: { value: '0px' },
          $1: { value: '4px' },
          $2: { value: '8px' },
          $3: { value: '12px' },
          $4: { value: '16px' },
          $5: { value: '24px' },
          $6: { value: '32px' },
          $7: { value: '48px' },
          $8: { value: '64px' },
          $9: { value: '96px' },
          $10: { value: '128px' },
          $11: { value: '192px' },
          $12: { value: '256px' },
          $13: { value: '384px' },
          $14: { value: '512px' },
          $15: { value: '640px' },
          $16: { value: '768px' },
        },
        fonts: {
          $system: {
            value:
              'var(--font-system), -apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"',
          },
          $display: {
            value:
              'var(--font-display), "Dosis", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif',
          },
          $monospace: {
            value:
              'var(--font-monospace), "SF Mono", "SFMono-Regular", ui-monospace, Consolas, "Liberation Mono", "Andale Mono", "DejaVu Sans Mono", "Ubuntu Mono", Menlo, Courier, monospace',
          },
          $text: {
            value:
              'var(--font-text), "Inter", -apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"',
          },
        },
        fontSizes: {
          '$-2': { value: '12px' },
          '$-1': { value: '14px' },
          $0: { value: '16px' },
          $1: { value: '18px' },
          $2: { value: '20px' },
          $3: { value: '24px' },
          $4: { value: '30px' },
          $5: { value: '36px' },
          $6: { value: '48px' },
          $7: { value: '60px' },
          $8: { value: '72px' },
        },
        fontWeights: {
          $regular: { value: '400' },
          $bold: { value: '700' },
          $light: { value: '300' },
        },
        letterSpacings: {
          $normal: { value: '0%' },
          $tight: { value: '-1%' },
          $tighter: { value: '-3%' },
          $wide: { value: '5%' },
        },
        lineHeights: {
          $body: { value: '140%' },
          $none: { value: '1' },
          $tight: { value: '110%' },
        },
        radii: {
          $default: { value: '2px' },
          $round: { value: '50%' },
          $pill: { value: '9999px' },
        },
        borders: {
          $default: { value: '2px' },
        },
        zIndex: {
          $toast: { value: 2147483647 },
        },
      }),

      semanticTokens: defineSemanticTokens({
        shadows: {
          $1: {
            value: {
              base: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
              _dark:
                '0px 2px 1px -1px rgb(0 0 0 / 40%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 30%)',
            },
          },
          $2: {
            value: {
              base: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
              _dark:
                '0px 3px 3px -2px rgba(0,0,0,0.4), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.3)',
            },
          },
          $3: {
            value: {
              base: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
              _dark:
                '0px 3px 5px -1px rgba(0,0,0,0.4),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.3)',
            },
          },
          $hover: {
            value: {
              base: 'inset 0 0 0 1px {colors.$grey.4}',
              _dark: 'inset 0 0 0 1px {colors.$grey.6}',
            },
          },
          $focus: {
            value: {
              base: 'inset 0 0 0 1px {colors.$grey.4}, 0 0 0 1px {colors.$grey.4}',
              _dark:
                'inset 0 0 0 1px {colors.$grey.6}, 0 0 0 1px {colors.$grey.6}',
            },
          },
        },
      }),

      keyframes: {
        $accordionSlideDown: {
          from: { height: 0 },
          to: {
            height: 'cal(var(--radix-accordion-panel-height) + {sizes.$6})',
          },
        },
        $accordionSlideUp: {
          from: {
            height: 'cal(var(--radix-accordion-panel-height) + {sizes.$6})',
          },
          to: { height: 0 },
        },
        $beat: {
          '0%': { opacity: 0 },
          '50%': { opacity: '100%' },
          '100%': { opacity: '100%' },
        },
        $enterFromRight: {
          from: { transform: 'translateX(200px)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },

        $enterFromLeft: {
          from: { transform: 'translateX(-200px)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },

        $exitToRight: {
          from: { transform: 'translateX(0)', opacity: 1 },
          to: { transform: 'translateX(200px)', opacity: 0 },
        },

        $exitToLeft: {
          from: { transform: 'translateX(0)', opacity: 1 },
          to: { transform: 'translateX(-200px)', opacity: 0 },
        },
        $fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        $fadeOut: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
        $fill: {
          '0%': {
            fill: 'transparent',
          },
          '100%': {
            fill: 'currentColor',
          },
        },
        $hide: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        $indeterminate: {
          '0%': {
            transform: 'translateX(-100%)',
            transformOrigin: 'left',
          },
          '50%': {
            transform: 'translateX(950%)',
            transformOrigin: 'left',
          },
          '100%': {
            transform: 'translateX(2000%)',
            transformOrigin: 'left',
          },
        },
        $pulse: {
          '0%': { opacity: 0.8 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.8 },
        },
        $ripple: {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },
        $scale: {
          '0%': {
            transform: 'scale(0.5)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        $scaleIn: {
          from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
          to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
        },

        $scaleOut: {
          from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
          to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
        },
        $slideIn: {
          from: { transform: 'var(--transformValue)' },
          to: { transform: 'translate3d(0,0,0)' },
        },
        $slideOut: {
          from: { transform: 'translate3d(0,0,0)' },
          to: { transform: 'var(--transformValue)' },
        },

        $spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        $stroke: {
          '0%': {
            strokeDashoffset: '2300',
          },
          '100%': {
            strokeDashoffset: '0',
          },
        },
        $toastIn: {
          from: { transform: `translateX(calc(100% + {space.$5}))` },
          to: { transform: 'translateX(0)' },
        },
        $toastOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: `translateX(calc(100% + {space.$5}))` },
        },
      },

      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },

    utilities: {
      extend: {
        size: {
          values: sizeValues,
          shorthand: 's',
          transform(value: any) {
            return {
              width: value,
              height: value,
            }
          },
        },
      },
    },

    conditions: {
      extend: {
        notVertical: '&:not([data-orientation=vertical])',
        notHorizontal: '&:not([data-orientation=horizontal])',
      },
    },
  })
}
