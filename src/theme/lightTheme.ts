import * as allColors from './colors'
import deepmerge from 'deepmerge'
import { fade, lighten } from '@material-ui/core/styles/colorManipulator'
import {
  PaletteOptions,
  Palette,
  PaletteColor,
} from '@material-ui/core/styles/createPalette'
import { Overrides } from '@material-ui/core/styles/overrides'
import { baseCommittedOverrides } from './theme'
import {
  addTransparency,
  createCommittedFonts,
  createCommittedShape,
  createCommittedSpacing,
  createCommittedTypography,
} from './theme'

export const committedLightPaletteColors = {
  ...allColors,
  brand: allColors.committedYellow,
  primary: allColors.committedGrey,
  secondary: {
    '300': allColors.committedYellow[50],
    '500': allColors.committedYellow[200],
    '700': allColors.committedYellow[400],
  },
  success: allColors.teal,
  warning: allColors.orange,
  error: allColors.red,
  info: allColors.lightBlueVivid,
  grey: allColors.grey,
}

const text = {
  primary: committedLightPaletteColors.grey[800],
  secondary: committedLightPaletteColors.grey[700],
  disabled: committedLightPaletteColors.grey[500],
  hint: committedLightPaletteColors.grey[500],
}

const action = {
  // The color of an active action like an icon button.
  active: 'rgba(0, 0, 0, 0.54)',
  // The color of an hovered action.
  hover: 'rgba(0, 0, 0, 0.04)',
  hoverOpacity: 0.04,
  // The color of a selected action.
  selected: 'rgba(0, 0, 0, 0.08)',
  selectedOpacity: 0.08,
  // The color of a disabled action.
  disabled: 'rgba(0, 0, 0, 0.26)',
  // The background color of a disabled action.
  disabledBackground: 'rgba(0, 0, 0, 0.12)',
  disabledOpacity: 0.38,
  focus: 'rgba(0, 0, 0, 0.12)',
  focusOpacity: 0.12,
  activatedOpacity: 0.12,
}

export const createCommittedLightPaletteOptions = (): PaletteOptions => {
  const paletteColors = committedLightPaletteColors
  const textColor = paletteColors.grey[900]
  return {
    type: 'light',
    brand: {
      light: paletteColors.brand[300],
      main: paletteColors.brand[500],
      dark: paletteColors.brand[700],
      contrastText: textColor,
    },
    primary: {
      light: paletteColors.primary[400],
      main: paletteColors.primary[600],
      dark: paletteColors.primary[800],
      contrastText: paletteColors.brand[500],
    },
    secondary: {
      light: paletteColors.secondary[300],
      main: paletteColors.secondary[500],
      dark: paletteColors.secondary[700],
      contrastText: paletteColors.primary[500],
    },
    error: paletteColors.error,
    success: {
      light: paletteColors.success[300],
      main: paletteColors.success[500],
      dark: paletteColors.success[700],
      contrastText: textColor,
    },
    warning: {
      light: paletteColors.warning[200],
      main: paletteColors.warning[400],
      dark: paletteColors.warning[600],
      contrastText: textColor,
    },
    info: {
      light: paletteColors.info[100],
      main: paletteColors.info[300],
      dark: paletteColors.info[500],
      contrastText: textColor,
    },
    background: {
      default: paletteColors.grey[50],
      paper: 'white',
    },
    text,
    grey: paletteColors.grey,
    action,
    divider: 'rgba(0, 0, 0, 0.12)',
  }
}

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

export const createCommittedLightOverrides = (palette: Palette): Overrides => {
  return deepmerge(baseCommittedOverrides(palette, text, action), {
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
        color: palette.secondary.dark,
        backgroundColor: mainLight(palette.primary),
        '&:hover': {
          backgroundColor: lighten(
            mainLight(palette.primary),
            action.hoverOpacity
          ),
        },
        '&$disabled': {
          backgroundColor: addTransparency(mainLight(palette.primary)),
          borderColor: addTransparency(palette.secondary.main),
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
        color: palette.secondary.dark,
        '&$checked': {
          color: palette.secondary.dark,
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
        color: palette.brand.dark,
        '&$checked': {
          color: palette.brand.dark,
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
          borderBottom: 'none',
        },
        borderBottom: `1px solid ${palette.brand.main}`,
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
  })
}

export const lightTheme = {
  createPaletteOptions: createCommittedLightPaletteOptions,
  createOverrides: createCommittedLightOverrides,
  createFonts: createCommittedFonts,
  createShape: createCommittedShape,
  createSpacing: createCommittedSpacing,
  createTypography: createCommittedTypography,
}