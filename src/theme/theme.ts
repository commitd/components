import * as allColors from './colors'
import * as fonts from './fonts'
import { fade, lighten } from '@material-ui/core/styles/colorManipulator'
import { BaseCSSProperties } from '@material-ui/styles/withStyles'

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
  secondary: allColors.committedYellow,
  success: allColors.teal,
  warning: allColors.orange,
  error: allColors.red,
  info: allColors.lightBlueVivid,
  neutral: allColors.grey
}

export const createPalette = (paletteColors: PaletteColors) => ({
  text: paletteColors.neutral[900]
})

const createText = (paletteColors: PaletteColors) => ({
  primary: paletteColors.neutral[800],
  secondary: paletteColors.neutral[700],
  disabled: paletteColors.neutral[500],
  hint: paletteColors.neutral[500]
})

const action = {
  active: 'rgba(0, 0, 0, 0.54)',
  hover: 'rgba(0, 0, 0, 0.08)',
  hoverOpacity: 0.08,
  selected: 'rgba(0, 0, 0, 0.14)',
  disabled: 'rgba(0, 0, 0, 0.26)',
  disabledBackground: 'rgba(0, 0, 0, 0.12)'
}

export const createLightOptions = (paletteColors: PaletteColors) => {
  const palette = createPalette(paletteColors)
  const text = createText(paletteColors)
  return {
    fonts: fonts.defaultFonts,
    palette: {
      type: 'light',
      brand: {
        light: paletteColors.brand[300],
        main: paletteColors.brand[500],
        dark: paletteColors.brand[700],
        contrastText: palette.text
      },
      primary: {
        light: paletteColors.primary[400],
        main: paletteColors.primary[600],
        dark: paletteColors.primary[800],
        contrastText: paletteColors.brand[500]
      },
      secondary: {
        light: paletteColors.brand[50],
        main: paletteColors.brand[200],
        dark: paletteColors.brand[400],
        contrastText: paletteColors.primary[500]
      },
      error: paletteColors.error,
      success: {
        light: paletteColors.success[300],
        main: paletteColors.success[500],
        dark: paletteColors.success[700],
        contrastText: palette.text
      },
      warning: {
        light: paletteColors.warning[200],
        main: paletteColors.warning[400],
        dark: paletteColors.warning[600],
        contrastText: palette.text
      },
      info: {
        light: paletteColors.info[100],
        main: paletteColors.info[300],
        dark: paletteColors.info[500],
        contrastText: palette.text
      },
      background: {
        default: paletteColors.neutral[50],
        paper: 'white'
      },
      text,
      grey: paletteColors.neutral,
      action,
      divider: 'rgba(0, 0, 0, 0.12)'
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
            backgroundColor: lighten(
              paletteColors.primary[300],
              action.hoverOpacity
            )
          },
          '&$disabled': {
            color: addTransparency(text.primary),
            backgroundColor: addTransparency(paletteColors.neutral[300])
          }
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: lighten(
              paletteColors.primary[500],
              action.hoverOpacity
            )
          },
          '&$disabled': {
            backgroundColor: addTransparency(paletteColors.primary[500]),
            color: addTransparency(paletteColors.secondary[500])
          }
        },
        containedSecondary: {
          '&$disabled': {
            backgroundColor: addTransparency(paletteColors.secondary[200]),
            color: addTransparency(paletteColors.primary[500])
          }
        },
        text: {
          '&$disabled': {
            color: addTransparency(text.primary)
          }
        },
        textPrimary: {
          color: paletteColors.primary[500],
          '&:hover': {
            backgroundColor: fade(paletteColors.brand[500], action.hoverOpacity)
          },
          '& span:nth-of-type(2)': {
            color: paletteColors.brand[500]
          },
          '&$disabled': {
            color: addTransparency(paletteColors.primary[500])
          }
        },
        textSecondary: {
          color: paletteColors.brand[800],
          '&:hover': {
            backgroundColor: fade(
              paletteColors.primary[500],
              action.hoverOpacity
            )
          },
          '& span:nth-of-type(2)': {
            color: paletteColors.primary[500]
          },
          '&$disabled': {
            color: addTransparency(paletteColors.brand[500])
          }
        },
        outlined: {
          '&$disabled': {
            borderColor: addTransparency(paletteColors.neutral[500]),
            color: addTransparency(paletteColors.neutral[200])
          }
        },
        outlinedPrimary: {
          backgroundColor: paletteColors.brand[100],
          '&:hover': {
            backgroundColor: paletteColors.brand[200]
          },
          '& span:nth-of-type(2)': {
            color: paletteColors.brand[500]
          },
          '&$disabled': {
            backgroundColor: addTransparency(paletteColors.brand[100]),
            borderColor: addTransparency(paletteColors.primary[500]),
            color: addTransparency(paletteColors.primary[500])
          }
        },
        outlinedSecondary: {
          backgroundColor: paletteColors.primary[400],
          '&:hover': {
            backgroundColor: lighten(
              paletteColors.primary[400],
              action.hoverOpacity
            )
          },
          '& span:nth-of-type(2)': {
            color: paletteColors.primary[500]
          },
          '&$disabled': {
            backgroundColor: addTransparency(paletteColors.primary[400]),
            borderColor: addTransparency(paletteColors.secondary[300]),
            color: addTransparency(paletteColors.secondary[300])
          }
        },
        disabled: {}
      },
      MuiCheckbox: {
        root: {
          color: paletteColors.neutral[500],
          '&$disabled': {
            color: addTransparency(paletteColors.neutral[500])
          }
        },
        colorPrimary: {
          color: paletteColors.primary[500],
          '&$checked': {
            color: paletteColors.primary[500],
            '&:hover': {
              backgroundColor: fade(
                paletteColors.brand[500],
                action.hoverOpacity
              )
            }
          },
          '& span:nth-of-type(2)': {
            color: paletteColors.brand[500]
          },
          '&$disabled': {
            color: addTransparency(paletteColors.primary[500])
          }
        },
        colorSecondary: {
          color: paletteColors.secondary[300],
          '&$checked': {
            color: paletteColors.secondary[300],
            '&:hover': {
              backgroundColor: fade(
                paletteColors.primary[500],
                action.hoverOpacity
              )
            }
          },
          '& span:nth-of-type(2)': {
            color: paletteColors.primary[500]
          },
          '&$disabled': {
            color: addTransparency(paletteColors.secondary[300])
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
            backgroundColor: fade(paletteColors.brand[500], action.hoverOpacity)
          },
          '& span:nth-of-type(2)': {
            color: paletteColors.brand[500]
          }
        },
        colorSecondary: {
          color: paletteColors.brand[800],
          '&:hover': {
            backgroundColor: fade(
              paletteColors.primary[500],
              action.hoverOpacity
            )
          },
          '& span:nth-of-type(2)': {
            color: paletteColors.primary[500]
          }
        }
      },
      MuiRadio: {
        root: {
          color: paletteColors.neutral[500],
          '&$disabled': {
            color: addTransparency(paletteColors.neutral[500])
          }
        },
        colorPrimary: {
          color: paletteColors.primary[500],
          '&$checked': {
            color: paletteColors.primary[500],
            '&:hover': {
              backgroundColor: fade(
                paletteColors.brand[500],
                action.hoverOpacity
              )
            }
          },
          '& span:nth-of-type(2)': {
            color: paletteColors.brand[500]
          },
          '& svg:nth-of-type(2)': {
            color: paletteColors.brand[500]
          },
          '&$disabled': {
            color: addTransparency(paletteColors.primary[500]),
            '& svg:nth-of-type(2)': {
              color: addTransparency(paletteColors.brand[500])
            }
          }
        },
        colorSecondary: {
          color: paletteColors.secondary[300],
          '&$checked': {
            color: paletteColors.secondary[300],
            '&:hover': {
              backgroundColor: fade(
                paletteColors.primary[500],
                action.hoverOpacity
              )
            }
          },
          '& span:nth-of-type(2)': {
            color: paletteColors.primary[500]
          },
          '& svg:nth-of-type(2)': {
            color: paletteColors.primary[500]
          },
          '&$disabled': {
            color: addTransparency(paletteColors.secondary[300]),
            '& svg:nth-of-type(2)': {
              color: addTransparency(paletteColors.primary[500])
            }
          }
        }
      },
      MuiSwitch: {
        root: {
          color: paletteColors.neutral[500],
          '&$disabled': {
            color: addTransparency(paletteColors.neutral[500])
          }
        },
        colorPrimary: {
          '&$checked + $track': {
            backgroundColor: paletteColors.brand[500]
          }
        }
      },
      MuiTableHead: {
        root: {
          '& th': {
            fontWeight: 'bold',
            color: text.primary
          },
          borderBottom: `2px solid ${paletteColors.brand[500]}`
        }
      },
      MuiTableBody: {
        root: {
          '& tr:nth-child(even)': {
            backgroundColor: paletteColors.neutral[100]
          },
          borderColor: paletteColors.neutral[100]
        }
      },
      MuiTableCell: {
        body: {
          borderBottomColor: paletteColors.neutral[100]
        }
      },
      MuiTableFooter: {
        root: {
          '& th,td': {
            fontWeight: 'bold',
            color: text.primary
          },
          borderTop: `2px solid ${paletteColors.brand[500]}`,
          borderBottom: `2px solid ${paletteColors.brand[500]}`
        }
      },
      MuiTabs: {
        indicator: {
          backgroundColor: paletteColors.brand[500],
          height: '4px'
        }
      }
    }
  }
}
