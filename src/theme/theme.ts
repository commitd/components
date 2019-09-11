import * as allColors from './colors'
import * as fonts from './fonts'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    success: PaletteColorOptions
    warning: PaletteColorOptions
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
    status: {
      danger: string
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

export const palettes = {
  ...allColors,
  brand: allColors.committedYellow,
  primary: allColors.committedYellow,
  secondary: allColors.committedGrey,
  success: allColors.teal,
  warning: allColors.orange,
  error: allColors.red,
  info: allColors.lightBlue,
  neutral: allColors.committedGrey
}

export const palette = {
  text: palettes.neutral[900]
}

export const light: ThemeOptions = {
  palette: {
    type: 'light',
    primary: palettes.primary,
    secondary: {
      light: palettes.secondary[300],
      main: palettes.secondary[500],
      dark: palettes.secondary[700]
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
      light: palettes.info[300],
      main: palettes.info[500],
      dark: palettes.info[700],
      contrastText: palette.text
    },
    background: {
      default: palettes.neutral[50],
      paper: 'white'
    },
    text: {
      primary: palettes.neutral[800],
      secondary: palettes.neutral[700],
      disabled: palettes.neutral[500],
      hint: palettes.neutral[500]
    },
    grey: palettes.blueGrey
    // action: {
    //   active: string;
    //   hover: string;
    //   hoverOpacity: number;
    //   selected: string;
    //   disabled: string;
    //   disabledBackground: string;
    // }
    //divider?:
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
  spacing: (factor: number) => [0, 4, 8, 16, 32, 64, 128][factor],
  typography: {
    fontFamily: fonts.families.system,
    htmlFontSize: 16,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  shape: {
    borderRadius: 2
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': fonts.faces,
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
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    },
    MuiTabs: {
      indicator: {
        backgroundColor: allColors.committedYellow[500],
        height: '4px'
      }
    },
    MuiDialog: {
      paper: {
        borderTop: `4px solid ${allColors.committedYellow[500]}`
      }
    }
  }
}
