import * as fonts from './fonts'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { BaseCSSProperties } from '@material-ui/styles/withStyles'
import { Palette } from '@material-ui/core/styles/createPalette'
import { defaultFonts } from './fonts'
import { Overrides } from '@material-ui/core/styles/overrides'

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    brand?: PaletteColorOptions
  }

  interface Palette {
    brand: PaletteColor
  }
}

export type FontType =
  | 'typography'
  | 'heading'
  | 'subheading'
  | 'text'
  | 'display'
  | 'monospace'

export interface Fonts {
  typography: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
  heading: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
  subheading: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
  text: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
  display: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
  monospace: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
}

export type FontOptions = Partial<Fonts>

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    fonts: Fonts
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    fonts?: FontOptions
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    brand: PaletteColor
    success: PaletteColor
    warning: PaletteColor
    info: PaletteColor
  }
}

export const addTransparency = (color: string) => `${color}88`

export const spacing = (factor: number) => {
  // should be an int, but just incase
  var index = Math.floor(factor)
  if (index < 0) index = 0
  if (index > 6) {
    index = 6
  }
  return [0, 4, 8, 16, 32, 64, 128][index]
}

export const createCommittedFonts = () => fonts.defaultFonts
export const createCommittedSpacing = () => spacing
export const createCommittedTypography = () => ({
  htmlFontSize: 16,
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: fonts.sizes[5],
  },
  h2: {
    fontSize: fonts.sizes[4],
  },
  h3: {
    fontSize: fonts.sizes[3],
  },
  h4: {
    fontSize: fonts.sizes[2],
  },
  h5: {
    fontSize: fonts.sizes[1],
  },
  h6: {
    fontSize: fonts.sizes[0],
  },
  subtitle1: {
    fontSize: fonts.sizes[0],
  },
  subtitle2: {
    fontSize: fonts.sizes[-1],
  },
  body1: {
    fontSize: fonts.sizes[0],
  },
  body2: {
    fontSize: fonts.sizes[1],
  },
  button: {
    fontSize: fonts.sizes[0],
  },
  caption: {
    fontSize: fonts.sizes[-1],
  },
  overline: {
    fontSize: fonts.sizes[-1],
  },
  ...defaultFonts.typography,
})

export const createCommittedShape = () => ({
  borderRadius: 2,
})

export const baseCommittedOverrides = (palette: Palette): Overrides => {
  return {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      contained: {
        '&$disabled': {
          backgroundColor: addTransparency(palette.grey[300]),
        },
      },
      containedPrimary: {
        '&$disabled': {
          backgroundColor: addTransparency(palette.primary.main),
        },
      },
      containedSecondary: {},
      text: {
        '&$disabled': {
          color: addTransparency(palette.text.primary),
        },
      },
      textPrimary: {
        color: palette.primary.main,
        '&:hover': {
          backgroundColor: fade(
            palette.brand.main,
            palette.action.hoverOpacity
          ),
        },
        '&$disabled': {},
      },
      textSecondary: {},
      outlined: {
        '&$disabled': {
          borderColor: addTransparency(palette.grey[500]),
          color: addTransparency(palette.grey[200]),
        },
      },
      outlinedPrimary: {},
      outlinedSecondary: {},
      disabled: {},
    },
    MuiCheckbox: {
      root: {
        color: palette.grey[500],
        '&$disabled': {
          color: addTransparency(palette.grey[500]),
        },
      },
      colorPrimary: {
        color: palette.primary.main,
        '&$checked': {
          color: palette.primary.main,
          '&:hover': {
            backgroundColor: fade(
              palette.brand.main,
              palette.action.hoverOpacity
            ),
          },
        },
        '& span:nth-of-type(2)': {
          color: palette.brand.main,
        },
        '&$disabled': {
          color: addTransparency(palette.primary.main),
        },
      },
      colorSecondary: {
        '& span:nth-of-type(2)': {
          color: palette.primary.main,
        },
        '&$disabled': {
          color: addTransparency(palette.secondary.light),
        },
      },
    },
    MuiCssBaseline: {
      '@global': {
        // @ts-ignore - Disable auto-enlargement of small text in Safari
        textSizeAdjust: '100%',
        // @ts-ignore - Enable kerning and optional ligatures
        textRendering: 'optimizeLegibility',
        /**
         * Form elements render using OS defaults,
         * so font-family inheritance must be specifically declared
         */
        'button, input, optgroup, select, textarea': {
          fontFamily: 'inherit',
          fontSize: 'inherit',
        },
      },
    },
    MuiDialog: {},
    MuiDivider: {
      vertical: {
        // 100% is the default, this doesn't seem to work so set to auto
        height: 'auto',
      },
    },
    MuiIconButton: {},
    MuiRadio: {
      root: {
        color: palette.grey[500],
        '&$disabled': {
          color: addTransparency(palette.grey[500]),
        },
      },
      colorPrimary: {
        '&$disabled': {
          color: addTransparency(palette.primary.main),
          '& svg:nth-of-type(2)': {
            color: addTransparency(palette.brand.main),
          },
        },
      },
      colorSecondary: {
        '& span:nth-of-type(2)': {
          color: palette.primary.main,
        },
        '& svg:nth-of-type(2)': {
          color: palette.primary.main,
        },
        '&$disabled': {
          color: addTransparency(palette.secondary.light),
          '& svg:nth-of-type(2)': {
            color: addTransparency(palette.primary.main),
          },
        },
      },
    },
    MuiSwitch: {
      root: {
        color: palette.grey[500],
        '&$disabled': {
          color: addTransparency(palette.grey[500]),
        },
      },
    },
    MuiTableHead: {
      root: {
        '& th': {
          fontWeight: 'bold',
          color: palette.text.primary,
          borderBottom: 'none',
        },
      },
    },
    MuiTableBody: {
      root: {
        '& tr:last-child > th': {
          borderBottom: 'none',
        },
        '& tr:last-child > td': {
          borderBottom: 'none',
        },
      },
    },
    MuiTableFooter: {
      root: {
        '& th,td': {
          fontWeight: 'bold',
          color: palette.text.primary,
          borderBottom: 'none',
          borderTop: 'none',
        },
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: palette.brand.main,
        height: '4px',
      },
    },
  }
}
