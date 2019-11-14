import * as allColors from './colors'
import * as fonts from './fonts'
import { fade, lighten } from '@material-ui/core/styles/colorManipulator'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    success: PaletteColorOptions
    warning: PaletteColorOptions
    brand: PaletteColorOptions
    info: PaletteColorOptions
  }

  interface Palette {
    success: PaletteColor
    warning: PaletteColor
    info: PaletteColor
  }
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    fonts: {
      default: string
      text: string
      display: string
      mono: string
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    fonts?: {
      default?: string
      text?: string
      display?: string
      mono?: string
    }
  }
}

const addTransparency = (color: string) => `${color}88`

export const spacing = (factor: number) => {
  if (factor < 0 || factor > 6) {
    throw new Error(
      `Spacing ${factor} invalid, must be between 0 and 6 inclusive`
    )
  }
  return [0, 4, 8, 16, 32, 64, 128][factor]
}

export const palettes = {
  ...allColors,
  brand: allColors.committedYellow,
  primary: allColors.committedGrey,
  secondary: allColors.committedYellow,
  success: allColors.teal,
  warning: allColors.orange,
  error: allColors.red,
  info: allColors.lightBlueVivid,
  neutral: allColors.grey
}

export const palette = {
  text: palettes.neutral[900]
}

const text = {
  primary: palettes.neutral[800],
  secondary: palettes.neutral[700],
  disabled: palettes.neutral[500],
  hint: palettes.neutral[500]
}

const action = {
  active: 'rgba(0, 0, 0, 0.54)',
  hover: 'rgba(0, 0, 0, 0.08)',
  hoverOpacity: 0.08,
  selected: 'rgba(0, 0, 0, 0.14)',
  disabled: 'rgba(0, 0, 0, 0.26)',
  disabledBackground: 'rgba(0, 0, 0, 0.12)'
}

export const light: ThemeOptions = {
  fonts: {
    default: fonts.families.system,
    text: fonts.families.main,
    display: fonts.families.display,
    mono: fonts.families.mono
  },
  palette: {
    type: 'light',
    brand: {
      light: palettes.brand[300],
      main: palettes.brand[500],
      dark: palettes.brand[700],
      contrastText: palette.text
    },
    primary: {
      light: palettes.primary[400],
      main: palettes.primary[600],
      dark: palettes.primary[800],
      contrastText: palettes.brand[500]
    },
    secondary: {
      light: palettes.brand[50],
      main: palettes.brand[200],
      dark: palettes.brand[400],
      contrastText: palettes.primary[500]
    },
    error: palettes.error,
    success: {
      light: palettes.success[300],
      main: palettes.success[500],
      dark: palettes.success[700],
      contrastText: palette.text
    },
    warning: {
      light: palettes.warning[200],
      main: palettes.warning[400],
      dark: palettes.warning[600],
      contrastText: palette.text
    },
    info: {
      light: palettes.info[100],
      main: palettes.info[300],
      dark: palettes.info[500],
      contrastText: palette.text
    },
    background: {
      default: palettes.neutral[50],
      paper: 'white'
    },
    text,
    grey: palettes.neutral,
    action,
    divider: 'rgba(0, 0, 0, 0.12)'
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'h2',
        subtitle2: 'h3',
        body1: 'p',
        body2: 'span'
      }
    }
  },
  spacing: spacing,
  typography: {
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
    }
  },
  shape: {
    borderRadius: 2
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none'
      },
      contained: {
        '&:hover': {
          backgroundColor: lighten(palettes.primary[300], action.hoverOpacity)
        },
        '&$disabled': {
          color: addTransparency(text.primary),
          backgroundColor: addTransparency(palettes.neutral[300])
        }
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: lighten(palettes.primary[500], action.hoverOpacity)
        },
        '&$disabled': {
          backgroundColor: addTransparency(palettes.primary[500]),
          color: addTransparency(palettes.secondary[500])
        }
      },
      containedSecondary: {
        '&$disabled': {
          backgroundColor: addTransparency(palettes.secondary[200]),
          color: addTransparency(palettes.primary[500])
        }
      },
      text: {
        '&$disabled': {
          color: addTransparency(text.primary)
        }
      },
      textPrimary: {
        color: palettes.primary[500],
        '&:hover': {
          backgroundColor: fade(palettes.brand[500], action.hoverOpacity)
        },
        '& span:nth-of-type(2)': {
          color: palettes.brand[500]
        },
        '&$disabled': {
          color: addTransparency(palettes.primary[500])
        }
      },
      textSecondary: {
        color: palettes.brand[800],
        '&:hover': {
          backgroundColor: fade(palettes.primary[500], action.hoverOpacity)
        },
        '& span:nth-of-type(2)': {
          color: palettes.primary[500]
        },
        '&$disabled': {
          color: addTransparency(palettes.brand[500])
        }
      },
      outlined: {
        '&$disabled': {
          borderColor: addTransparency(palettes.neutral[500]),
          color: addTransparency(palettes.neutral[200])
        }
      },
      outlinedPrimary: {
        backgroundColor: palettes.brand[100],
        '&:hover': {
          backgroundColor: palettes.brand[200]
        },
        '& span:nth-of-type(2)': {
          color: palettes.brand[500]
        },
        '&$disabled': {
          backgroundColor: addTransparency(palettes.brand[100]),
          borderColor: addTransparency(palettes.primary[500]),
          color: addTransparency(palettes.primary[500])
        }
      },
      outlinedSecondary: {
        backgroundColor: palettes.primary[400],
        '&:hover': {
          backgroundColor: lighten(palettes.primary[400], action.hoverOpacity)
        },
        '& span:nth-of-type(2)': {
          color: palettes.primary[500]
        },
        '&$disabled': {
          backgroundColor: addTransparency(palettes.primary[400]),
          borderColor: addTransparency(palettes.secondary[300]),
          color: addTransparency(palettes.secondary[300])
        }
      },
      disabled: {}
    },
    MuiCheckbox: {
      root: {
        color: palettes.neutral[500],
        '&$disabled': {
          color: addTransparency(palettes.neutral[500])
        }
      },
      colorPrimary: {
        color: palettes.primary[500],
        '&$checked': {
          color: palettes.primary[500],
          '&:hover': {
            backgroundColor: fade(palettes.brand[500], action.hoverOpacity)
          }
        },
        '& span:nth-of-type(2)': {
          color: palettes.brand[500]
        },
        '&$disabled': {
          color: addTransparency(palettes.primary[500])
        }
      },
      colorSecondary: {
        color: palettes.secondary[300],
        '&$checked': {
          color: palettes.secondary[300],
          '&:hover': {
            backgroundColor: fade(palettes.primary[500], action.hoverOpacity)
          }
        },
        '& span:nth-of-type(2)': {
          color: palettes.primary[500]
        },
        '&$disabled': {
          color: addTransparency(palettes.secondary[300])
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
        borderTop: `4px solid ${allColors.committedYellow[500]}`
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
          backgroundColor: fade(palettes.brand[500], action.hoverOpacity)
        },
        '& span:nth-of-type(2)': {
          color: palettes.brand[500]
        }
      },
      colorSecondary: {
        color: palettes.brand[800],
        '&:hover': {
          backgroundColor: fade(palettes.primary[500], action.hoverOpacity)
        },
        '& span:nth-of-type(2)': {
          color: palettes.primary[500]
        }
      }
    },
    MuiRadio: {
      root: {
        color: palettes.neutral[500],
        '&$disabled': {
          color: addTransparency(palettes.neutral[500])
        }
      },
      colorPrimary: {
        color: palettes.primary[500],
        '&$checked': {
          color: palettes.primary[500],
          '&:hover': {
            backgroundColor: fade(palettes.brand[500], action.hoverOpacity)
          }
        },
        '& span:nth-of-type(2)': {
          color: palettes.brand[500]
        },
        '& svg:nth-of-type(2)': {
          color: palettes.brand[500]
        },
        '&$disabled': {
          color: addTransparency(palettes.primary[500]),
          '& svg:nth-of-type(2)': {
            color: addTransparency(palettes.brand[500])
          }
        }
      },
      colorSecondary: {
        color: palettes.secondary[300],
        '&$checked': {
          color: palettes.secondary[300],
          '&:hover': {
            backgroundColor: fade(palettes.primary[500], action.hoverOpacity)
          }
        },
        '& span:nth-of-type(2)': {
          color: palettes.primary[500]
        },
        '& svg:nth-of-type(2)': {
          color: palettes.primary[500]
        },
        '&$disabled': {
          color: addTransparency(palettes.secondary[300]),
          '& svg:nth-of-type(2)': {
            color: addTransparency(palettes.primary[500])
          }
        }
      }
    },
    MuiSwitch: {
      root: {
        color: palettes.neutral[500],
        '&$disabled': {
          color: addTransparency(palettes.neutral[500])
        }
      },
      colorPrimary: {
        '&$checked + $track': {
          backgroundColor: palettes.brand[500]
        }
      }
    },
    MuiTableHead: {
      root: {
        '& th': {
          fontWeight: 'bold',
          color: text.primary
        },
        borderBottom: `2px solid ${palettes.brand[500]}`
      }
    },
    MuiTableBody: {
      root: {
        '& tr:nth-child(even)': {
          backgroundColor: palettes.neutral[100]
        },
        borderColor: palettes.neutral[100]
      }
    },
    MuiTableCell: {
      body: {
        borderBottomColor: palettes.neutral[100]
      }
    },
    MuiTableFooter: {
      root: {
        '& th,td': {
          fontWeight: 'bold',
          color: text.primary
        },
        borderTop: `2px solid ${palettes.brand[500]}`,
        borderBottom: `2px solid ${palettes.brand[500]}`
      }
    },
    MuiTabs: {
      indicator: {
        backgroundColor: palettes.brand[500],
        height: '4px'
      }
    }
  }
}
