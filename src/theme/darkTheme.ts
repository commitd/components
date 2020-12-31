import { deepmerge } from '@material-ui/utils'
import { fade, lighten } from '../styles'
import * as allColors from './colors'
import { OverrideOptionsFunction, PaletteOptions } from './types'

export type DarkPaletteColors = typeof committedDarkPaletteColors

export const committedDarkPaletteColors = {
  ...allColors,
  brand: allColors.committedYellow,
  primary: allColors.committedYellow,
  secondary: allColors.committedGrey,
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

const paletteColors = committedDarkPaletteColors
const textColor = paletteColors.grey[900]
export const committedDarkPalette: PaletteOptions = {
  type: 'dark',
  brand: {
    light: paletteColors.brand[300],
    main: paletteColors.brand[500],
    dark: paletteColors.brand[700],
    contrastText: textColor,
  },
  primary: {
    light: paletteColors.primary[500],
    main: paletteColors.primary[700],
    dark: paletteColors.primary[900],
    contrastText: paletteColors.secondary[500],
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
    paper: paletteColors.grey[900],
  },
  text,
  grey: paletteColors.grey,
  action,
  divider: 'rgba(255, 255, 255, 0.8)',
}

export const committedDarkOverrides: OverrideOptionsFunction = (
  defaultOverrides,
  helpers
) => {
  const { palette } = helpers
  return deepmerge(defaultOverrides, {
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
        color: palette.secondary.light,
      },
      outlinedSecondary: {
        color: palette.secondary.light,
        borderColor: palette.secondary.light,
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        color: palette.secondary.light,
        '&$checked': {
          color: palette.secondary.light,
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
