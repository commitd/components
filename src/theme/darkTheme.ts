import {
  darken,
  fade,
  lighten,
} from '@material-ui/core/styles/colorManipulator'
import {
  Palette,
  PaletteColor,
  PaletteOptions,
} from '@material-ui/core/styles/createPalette'
import { Overrides } from '@material-ui/core/styles/overrides'
import deepmerge from 'deepmerge'
import * as allColors from './colors'
import {
  addTransparency,
  baseCommittedOverrides,
  createCommittedFonts,
  createCommittedShape,
  createCommittedSpacing,
  createCommittedTypography,
} from './theme'

export type DarkPaletteColors = typeof committedDarkPaletteColors

export const committedDarkPaletteColors = {
  ...allColors,
  brand: allColors.committedGrey,
  primary: allColors.committedYellow,
  secondary: {
    '300': allColors.committedGrey[50],
    '500': allColors.committedGrey[200],
    '700': allColors.committedGrey[400],
  },
  success: allColors.teal,
  warning: allColors.orange,
  error: allColors.red,
  info: allColors.lightBlueVivid,
  grey: allColors.grey,
}

const text = {
  primary: committedDarkPaletteColors.grey[50],
  secondary: committedDarkPaletteColors.grey[100],
  disabled: committedDarkPaletteColors.grey[200],
  hint: committedDarkPaletteColors.grey[500],
}

const action = {
  // The color of an active action like an icon button.
  active: 'rgba(255, 255, 255, 0.95)',
  // The color of an hovered action.
  hover: 'rgba(255, 255, 255, 0.08)',
  hoverOpacity: 0.08,
  // The color of a selected action.
  selected: 'rgba(255, 255, 255, 0.16)',
  selectedOpacity: 0.16,
  // The color of a disabled action.
  disabled: 'rgba(255, 255, 255, 0.3)',
  // The background color of a disabled action.
  disabledBackground: 'rgba(255, 255, 255, 0.12)',
  disabledOpacity: 0.38,
  focus: 'rgba(255, 255, 255, 0.12)',
  focusOpacity: 0.12,
  activatedOpacity: 0.24,
}

export const createCommittedDarkPaletteOptions = (): PaletteOptions => {
  const paletteColors = committedDarkPaletteColors
  const textColor = paletteColors.grey[900]
  return {
    type: 'dark',
    brand: {
      light: paletteColors.brand[300],
      main: paletteColors.brand[500],
      dark: paletteColors.brand[700],
      contrastText: textColor,
    },
    primary: {
      light: paletteColors.primary[300],
      main: paletteColors.primary[500],
      dark: paletteColors.primary[700],
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
      default: 'black',
      paper: paletteColors.grey[800],
    },
    text,
    grey: paletteColors.grey,
    action,
    divider: 'rgba(255, 255, 255, 0.8)',
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

export const createCommittedDarkOverrides = (palette: Palette): Overrides => {
  return deepmerge(baseCommittedOverrides(palette), {
    MuiBadge: {
      colorSecondary: {
        backgroundColor: palette.secondary.dark,
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: palette.grey[400],
        '&:hover': {
          backgroundColor: lighten(palette.grey[300], action.hoverOpacity),
        },
      },
      containedPrimary: {
        color: palette.getContrastText(palette.primary.main),
        '&:hover': {
          backgroundColor: lighten(palette.primary.light, action.hoverOpacity),
        },
      },
      containedSecondary: {
        color: palette.primary.dark,
        backgroundColor: palette.secondary.dark,
        '&:hover': {
          backgroundColor: lighten(palette.secondary.dark, action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: palette.secondary.main,
          },
        },
      },
      textSecondary: {
        color: palette.secondary.main,
        '&:hover': {
          backgroundColor: fade(palette.primary.main, action.hoverOpacity),
        },
      },
      outlinedPrimary: {
        color: palette.getContrastText(palette.primary.light),
        borderColor: palette.getContrastText(palette.primary.light),
        backgroundColor: palette.primary.light,
        '&:hover': {
          backgroundColor: lighten(
            lightLight(palette.primary),
            action.hoverOpacity
          ),
          borderColor: darken(
            palette.getContrastText(palette.primary.light),
            0.25
          ),
        },
        '&$disabled': {
          backgroundColor: addTransparency(mainLight(palette.primary)),
          borderColor: addTransparency(palette.secondary.light),
        },
      },
      outlinedSecondary: {
        color: palette.primary.dark,
        borderColor: palette.primary.dark,
        backgroundColor: palette.brand.light,
        '&:hover': {
          backgroundColor: lightLight(palette.brand),
          borderColor: darken(palette.primary.dark, 0.25),
        },
        '&$disabled': {
          backgroundColor: addTransparency(lightLightVery(palette.brand)),
          borderColor: addTransparency(palette.primary.main),
        },
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        color: palette.secondary.main,
        '&$checked': {
          color: palette.secondary.main,
          '&:hover': {
            backgroundColor: fade(palette.primary.main, action.hoverOpacity),
          },
        },
      },
    },
    MuiDialog: {
      paper: {
        borderTop: `4px solid ${palette.primary.main}`,
      },
    },
    MuiIconButton: {
      colorPrimary: {
        '&:hover': {
          backgroundColor: fade(palette.primary.main, action.hoverOpacity),
        },
        '& span:nth-of-type(2)': {
          color: palette.primary.main,
        },
      },
      colorSecondary: {
        color: palette.secondary.main,
        '&:hover': {
          backgroundColor: fade(palette.primary.main, action.hoverOpacity),
        },
        '& span:nth-of-type(2)': {
          color: palette.secondary.main,
        },
      },
    },
    MuiRadio: {
      colorPrimary: {
        color: palette.primary.main,
        '&$checked': {
          color: palette.primary.main,
          '&:hover': {
            backgroundColor: fade(palette.brand.main, action.hoverOpacity),
          },
        },
        '& span:nth-of-type(2)': {
          color: palette.brand.light,
        },
        '& svg:nth-of-type(2)': {
          color: palette.brand.light,
        },
      },
      colorSecondary: {
        color: palette.secondary.main,
        '&$checked': {
          color: palette.secondary.main,
          '&:hover': {
            backgroundColor: fade(palette.primary.main, action.hoverOpacity),
          },
        },
      },
    },
    MuiSwitch: {
      colorPrimary: {
        '&$checked + $track': {
          backgroundColor: palette.primary.light,
        },
      },
    },
    MuiTableHead: {
      root: {
        borderBottom: `1px solid ${palette.primary.main}`,
      },
    },
    MuiTableBody: {
      root: {
        '& tr:nth-child(even)': {
          backgroundColor: palette.grey[700],
        },
        borderColor: palette.grey[700],
        '& tr:last-child': {
          borderBottom: `1px solid ${palette.primary.main}`,
        },
      },
    },
    MuiTableFooter: {
      root: {
        borderTop: `1px solid ${palette.primary.main}`,
        borderBottom: `1px solid ${palette.primary.main}`,
      },
    },
  })
}

export const darkTheme = {
  createPaletteOptions: createCommittedDarkPaletteOptions,
  createOverrides: createCommittedDarkOverrides,
  createFonts: createCommittedFonts,
  createShape: createCommittedShape,
  createSpacing: createCommittedSpacing,
  createTypography: createCommittedTypography,
}
