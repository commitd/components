import * as allColors from './colors'
import * as fonts from './fonts'
import { fade, lighten } from '@material-ui/core/styles/colorManipulator'
import { BaseCSSProperties } from '@material-ui/styles/withStyles'
import {
  PaletteOptions,
  Palette,
  PaletteColor
} from '@material-ui/core/styles/createPalette'
import { defaultFonts } from './fonts'
import { Overrides } from '@material-ui/core/styles/overrides'

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    success?: PaletteColorOptions
    warning?: PaletteColorOptions
    brand?: PaletteColorOptions
    info?: PaletteColorOptions
    neutral?: PaletteColorOptions
  }

  interface Palette {
    success: PaletteColor
    warning: PaletteColor
    info: PaletteColor
    neutral: PaletteColor
  }
}

export type FontType =
  | 'typography'
  | 'heading'
  | 'subheading'
  | 'text'
  | 'display'
  | 'monospace'

export type PaletteColors = typeof defaultPaletteColors

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    fonts: {
      typography: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
      heading: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
      subheading: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
      text: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
      display: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
      monospace: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    fonts?: {
      typography?: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
      heading?: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
      subheading?: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
      text?: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
      display?: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
      monospace?: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
    }
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

const addTransparency = (color: string) => `${color}88`

export const spacing = (factor: number) => {
  // should be an int, but just incase
  var index = Math.floor(factor)
  if (index < 0) index = 0
  if (index > 6) {
    index = 6
  }
  return [0, 4, 8, 16, 32, 64, 128][index]
}

export const defaultPaletteColors = {
  ...allColors,
  brand: allColors.committedYellow,
  primary: allColors.committedGrey,
  secondary: {
    '300': allColors.committedYellow[50],
    '500': allColors.committedYellow[200],
    '700': allColors.committedYellow[400]
  },
  success: allColors.teal,
  warning: allColors.orange,
  error: allColors.red,
  info: allColors.lightBlueVivid,
  neutral: allColors.grey
}

const createCommittedText = () => ({
  primary: defaultPaletteColors.neutral[800],
  secondary: defaultPaletteColors.neutral[700],
  disabled: defaultPaletteColors.neutral[500],
  hint: defaultPaletteColors.neutral[500]
})

const action = {
  active: 'rgba(0, 0, 0, 0.54)',
  hover: 'rgba(0, 0, 0, 0.08)',
  hoverOpacity: 0.08,
  selected: 'rgba(0, 0, 0, 0.14)',
  disabled: 'rgba(0, 0, 0, 0.26)',
  disabledBackground: 'rgba(0, 0, 0, 0.12)'
}

export const createCommittedFonts = () => fonts.defaultFonts
export const createCommittedPaletteOptions = (): PaletteOptions => {
  const paletteColors = defaultPaletteColors
  const text = createCommittedText()
  const textColor = paletteColors.neutral[900]
  return {
    type: 'light',
    brand: {
      light: paletteColors.brand[300],
      main: paletteColors.brand[500],
      dark: paletteColors.brand[700],
      contrastText: textColor
    },
    primary: {
      light: paletteColors.primary[400],
      main: paletteColors.primary[600],
      dark: paletteColors.primary[800],
      contrastText: paletteColors.brand[500]
    },
    secondary: {
      light: paletteColors.secondary[300],
      main: paletteColors.secondary[500],
      dark: paletteColors.secondary[700],
      contrastText: paletteColors.primary[500]
    },
    error: paletteColors.error,
    success: {
      light: paletteColors.success[300],
      main: paletteColors.success[500],
      dark: paletteColors.success[700],
      contrastText: textColor
    },
    warning: {
      light: paletteColors.warning[200],
      main: paletteColors.warning[400],
      dark: paletteColors.warning[600],
      contrastText: textColor
    },
    info: {
      light: paletteColors.info[100],
      main: paletteColors.info[300],
      dark: paletteColors.info[500],
      contrastText: textColor
    },
    background: {
      default: paletteColors.neutral[50],
      paper: 'white'
    },
    text,
    grey: paletteColors.neutral,
    neutral: paletteColors.neutral,
    action,
    divider: 'rgba(0, 0, 0, 0.12)'
  }
}
export const createCommittedSpacing = () => spacing
export const createCommittedTypography = () => ({
  htmlFontSize: 16,
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: fonts.sizes[5]
  },
  h2: {
    fontSize: fonts.sizes[4]
  },
  h3: {
    fontSize: fonts.sizes[3]
  },
  h4: {
    fontSize: fonts.sizes[2]
  },
  h5: {
    fontSize: fonts.sizes[1]
  },
  h6: {
    fontSize: fonts.sizes[0]
  },
  subtitle1: {
    fontSize: fonts.sizes[0]
  },
  subtitle2: {
    fontSize: fonts.sizes[-1]
  },
  body1: {
    fontSize: fonts.sizes[0]
  },
  body2: {
    fontSize: fonts.sizes[1]
  },
  button: {
    fontSize: fonts.sizes[0]
  },
  caption: {
    fontSize: fonts.sizes[-1]
  },
  overline: {
    fontSize: fonts.sizes[-1]
  },
  ...defaultFonts.typography
})

export const createCommittedShape = () => ({
  borderRadius: 2
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

export const createCommittedOverrides = (palette: Palette): Overrides => {
  const text = createCommittedText()
  return {
    MuiButton: {
      root: {
        textTransform: 'none'
      },
      contained: {
        '&:hover': {
          backgroundColor: lighten(palette.primary.light, action.hoverOpacity)
        },
        '&$disabled': {
          backgroundColor: addTransparency(palette.neutral.light)
        }
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: lighten(palette.primary.main, action.hoverOpacity)
        },
        '&$disabled': {
          backgroundColor: addTransparency(palette.primary.main)
        }
      },
      containedSecondary: {
        '&$disabled': {
          backgroundColor: addTransparency(lightLight(palette.secondary))
        }
      },
      text: {
        '&$disabled': {
          color: addTransparency(text.primary)
        }
      },
      textPrimary: {
        color: palette.primary.main,
        '&:hover': {
          backgroundColor: fade(palette.brand.main, action.hoverOpacity)
        },
        '&$disabled': {}
      },
      textSecondary: {
        color: palette.brand.dark,
        '&:hover': {
          backgroundColor: fade(palette.primary.main, action.hoverOpacity)
        }
      },
      outlined: {
        '&$disabled': {
          borderColor: addTransparency(palette.neutral.main),
          color: addTransparency(lightLight(palette.neutral))
        }
      },
      outlinedPrimary: {
        backgroundColor: lightLightVery(palette.brand),
        '&:hover': {
          backgroundColor: lightLight(palette.brand)
        },
        '&$disabled': {
          backgroundColor: addTransparency(lightLightVery(palette.brand)),
          borderColor: addTransparency(palette.primary.main)
        }
      },
      outlinedSecondary: {
        backgroundColor: mainLight(palette.primary),
        '&:hover': {
          backgroundColor: lighten(
            mainLight(palette.primary),
            action.hoverOpacity
          )
        },
        '&$disabled': {
          backgroundColor: addTransparency(mainLight(palette.primary)),
          borderColor: addTransparency(palette.secondary.light)
        }
      },
      disabled: {}
    },
    MuiCheckbox: {
      root: {
        color: palette.neutral.main,
        '&$disabled': {
          color: addTransparency(palette.neutral.main)
        }
      },
      colorPrimary: {
        color: palette.primary.main,
        '&$checked': {
          color: palette.primary.main,
          '&:hover': {
            backgroundColor: fade(palette.brand.main, action.hoverOpacity)
          }
        },
        '& span:nth-of-type(2)': {
          color: palette.brand.main
        },
        '&$disabled': {
          color: addTransparency(palette.primary.main)
        }
      },
      colorSecondary: {
        color: palette.secondary.light,
        '&$checked': {
          color: palette.secondary.light,
          '&:hover': {
            backgroundColor: fade(palette.primary.main, action.hoverOpacity)
          }
        },
        '& span:nth-of-type(2)': {
          color: palette.primary.main
        },
        '&$disabled': {
          color: addTransparency(palette.secondary.light)
        }
      }
    },
    MuiCssBaseline: {
      '@global': {
        /* Disable auto-enlargement of small text in Safari */
        textSizeAdjust: '100%',
        /* Enable kerning and optional ligatures */
        textRendering: 'optimizeLegibility',
        /**
         * Form elements render using OS defaults,
         * so font-family inheritance must be specifically declared
         */
        'button, input, optgroup, select, textarea': {
          fontFamily: 'inherit',
          fontSize: 'inherit'
        }
      }
    },
    MuiDialog: {
      paper: {
        borderTop: `4px solid ${palette.brand.main}`
      }
    },
    MuiDivider: {
      vertical: {
        // 100% is the default, this doesn't seem to work so set to auto
        height: 'auto'
      }
    },
    MuiIconButton: {
      colorPrimary: {
        '&:hover': {
          backgroundColor: fade(palette.brand.main, action.hoverOpacity)
        },
        '& span:nth-of-type(2)': {
          color: palette.brand.main
        }
      },
      colorSecondary: {
        color: palette.brand.dark,
        '&:hover': {
          backgroundColor: fade(palette.primary.main, action.hoverOpacity)
        },
        '& span:nth-of-type(2)': {
          color: palette.primary.main
        }
      }
    },
    MuiRadio: {
      root: {
        color: palette.neutral.main,
        '&$disabled': {
          color: addTransparency(palette.neutral.main)
        }
      },
      colorPrimary: {
        color: palette.primary.main,
        '&$checked': {
          color: palette.primary.main,
          '&:hover': {
            backgroundColor: fade(palette.brand.main, action.hoverOpacity)
          }
        },
        '& span:nth-of-type(2)': {
          color: palette.brand.main
        },
        '& svg:nth-of-type(2)': {
          color: palette.brand.main
        },
        '&$disabled': {
          color: addTransparency(palette.primary.main),
          '& svg:nth-of-type(2)': {
            color: addTransparency(palette.brand.main)
          }
        }
      },
      colorSecondary: {
        color: palette.secondary.light,
        '&$checked': {
          color: palette.secondary.light,
          '&:hover': {
            backgroundColor: fade(palette.primary.main, action.hoverOpacity)
          }
        },
        '& span:nth-of-type(2)': {
          color: palette.primary.main
        },
        '& svg:nth-of-type(2)': {
          color: palette.primary.main
        },
        '&$disabled': {
          color: addTransparency(palette.secondary.light),
          '& svg:nth-of-type(2)': {
            color: addTransparency(palette.primary.main)
          }
        }
      }
    },
    MuiSwitch: {
      root: {
        color: palette.neutral.main,
        '&$disabled': {
          color: addTransparency(palette.neutral.main)
        }
      },
      colorPrimary: {
        '&$checked + $track': {
          backgroundColor: palette.brand.main
        }
      }
    },
    MuiTableHead: {
      root: {
        '& th': {
          fontWeight: 'bold',
          color: text.primary
        },
        borderBottom: `2px solid ${palette.brand.main}`
      }
    },
    MuiTableBody: {
      root: {
        '& tr:nth-child(even)': {
          backgroundColor: lightLightVery(palette.neutral)
        },
        borderColor: lightLightVery(palette.neutral)
      }
    },
    MuiTableCell: {
      body: {
        borderBottomColor: lightLightVery(palette.neutral)
      }
    },
    MuiTableFooter: {
      root: {
        '& th,td': {
          fontWeight: 'bold',
          color: text.primary
        },
        borderTop: `2px solid ${palette.brand.main}`,
        borderBottom: `2px solid ${palette.brand.main}`
      }
    },
    MuiTabs: {
      indicator: {
        backgroundColor: palette.brand.main,
        height: '4px'
      }
    }
  }
}
