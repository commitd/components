import * as fonts from './fonts'
import { fade, lighten } from '@material-ui/core/styles/colorManipulator'
import { BaseCSSProperties } from '@material-ui/styles/withStyles'
import { Palette, PaletteColor } from '@material-ui/core/styles/createPalette'
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

export interface TextPalette {
  primary: string
  secondary: string
  disabled: string
  hint: string
}

export interface ActionPalette {
  active: string
  hover: string
  hoverOpacity: number
  selected: string
  disabled: string
  disabledBackground: string
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

// eqiv to color[400]
const mainLight = (color: PaletteColor): string => {
  return lighten(color.main, 0.25)
}

// color[200]
const lightLight = (color: PaletteColor): string => {
  return lighten(color.light, 0.25)
}

// color[100]
const lightLightVery = (color: PaletteColor): string => {
  return lighten(color.light, 0.5)
}

export const baseCommittedOverrides = (
  palette: Palette,
  text: TextPalette,
  action: ActionPalette
): Overrides => {
  return {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      contained: {
        '&:hover': {
          backgroundColor: lighten(palette.primary.light, action.hoverOpacity),
        },
        '&$disabled': {
          backgroundColor: addTransparency(palette.grey[300]),
        },
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: lighten(palette.primary.main, action.hoverOpacity),
        },
        '&$disabled': {
          backgroundColor: addTransparency(palette.primary.main),
        },
      },
      containedSecondary: {
        '&$disabled': {
          backgroundColor: addTransparency(lightLight(palette.secondary)),
        },
      },
      text: {
        '&$disabled': {
          color: addTransparency(text.primary),
        },
      },
      textPrimary: {
        color: palette.primary.main,
        '&:hover': {
          backgroundColor: fade(palette.brand.main, action.hoverOpacity),
        },
        '&$disabled': {},
      },
      textSecondary: {
        color: palette.brand.dark,
        '&:hover': {
          backgroundColor: fade(palette.primary.main, action.hoverOpacity),
        },
      },
      outlined: {
        '&$disabled': {
          borderColor: addTransparency(palette.grey[500]),
          color: addTransparency(palette.grey[200]),
        },
      },
      outlinedPrimary: {
        backgroundColor: lightLightVery(palette.brand),
        '&:hover': {
          backgroundColor: lightLight(palette.brand),
        },
        '&$disabled': {
          backgroundColor: addTransparency(lightLightVery(palette.brand)),
          borderColor: addTransparency(palette.primary.main),
        },
      },
      outlinedSecondary: {
        backgroundColor: mainLight(palette.primary),
        '&:hover': {
          backgroundColor: lighten(
            mainLight(palette.primary),
            action.hoverOpacity
          ),
        },
        '&$disabled': {
          backgroundColor: addTransparency(mainLight(palette.primary)),
          borderColor: addTransparency(palette.secondary.light),
        },
      },
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
            backgroundColor: fade(palette.brand.main, action.hoverOpacity),
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
        color: palette.secondary.light,
        '&$checked': {
          color: palette.secondary.light,
          '&:hover': {
            backgroundColor: fade(palette.primary.main, action.hoverOpacity),
          },
        },
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
    MuiDialog: {
      paper: {
        borderTop: `4px solid ${palette.brand.main}`,
      },
    },
    MuiDivider: {
      vertical: {
        // 100% is the default, this doesn't seem to work so set to auto
        height: 'auto',
      },
    },
    MuiIconButton: {
      colorPrimary: {
        '&:hover': {
          backgroundColor: fade(palette.brand.main, action.hoverOpacity),
        },
        '& span:nth-of-type(2)': {
          color: palette.brand.main,
        },
      },
      colorSecondary: {
        color: palette.brand.dark,
        '&:hover': {
          backgroundColor: fade(palette.primary.main, action.hoverOpacity),
        },
        '& span:nth-of-type(2)': {
          color: palette.primary.main,
        },
      },
    },
    MuiRadio: {
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
            backgroundColor: fade(palette.brand.main, action.hoverOpacity),
          },
        },
        '& span:nth-of-type(2)': {
          color: palette.brand.main,
        },
        '& svg:nth-of-type(2)': {
          color: palette.brand.main,
        },
        '&$disabled': {
          color: addTransparency(palette.primary.main),
          '& svg:nth-of-type(2)': {
            color: addTransparency(palette.brand.main),
          },
        },
      },
      colorSecondary: {
        color: palette.secondary.light,
        '&$checked': {
          color: palette.secondary.light,
          '&:hover': {
            backgroundColor: fade(palette.primary.main, action.hoverOpacity),
          },
        },
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
      colorPrimary: {
        '&$checked + $track': {
          backgroundColor: palette.brand.main,
        },
      },
    },
    MuiTableHead: {
      root: {
        '& th': {
          fontWeight: 'bold',
          color: text.primary,
        },
        borderBottom: `2px solid ${palette.brand.main}`,
      },
    },
    MuiTableBody: {
      root: {
        '& tr:nth-child(even)': {
          backgroundColor: palette.grey[100],
        },
        borderColor: palette.grey[100],
      },
    },
    MuiTableCell: {
      body: {
        borderBottomColor: palette.grey[100],
      },
    },
    MuiTableFooter: {
      root: {
        '& th,td': {
          fontWeight: 'bold',
          color: text.primary,
        },
        borderTop: `2px solid ${palette.brand.main}`,
        borderBottom: `2px solid ${palette.brand.main}`,
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
