import * as allColors from './colors'
import * as fonts from './fonts'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    success: PaletteColorOptions
    warning: PaletteColorOptions
    brand: PaletteColorOptions
  }

  interface Palette {
    success: PaletteColor
    warning: PaletteColor
    brand: PaletteColor
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
  neutral: allColors.blueGrey,
  primary: allColors.blue,
  secondary: allColors.purple,
  supporting: allColors.purple,
  success: allColors.teal,
  warning: allColors.committedYellow,
  brand: allColors.committedYellow,
  error: allColors.red
}

export const palette = {
  primary: palettes.primary[400],
  bg: palettes.neutral[50],
  text: palettes.neutral[900],
  lighttext: palettes.neutral[300],
  secondary: palettes.secondary[400],
  supporting: palettes.supporting[400],
  success: palettes.success[400],
  warning: palettes.warning[400],
  error: palettes.error[400],
  brand: palettes.brand[400],
  palettes
}

export const light: ThemeOptions = {
  palette: {
    type: 'light',
    primary: { main: palettes.primary[400] },
    background: {
      default: palettes.neutral[50],
      paper: 'white'
    },
    secondary: { main: palettes.secondary[400] },
    success: { main: palettes.success[400] },
    warning: { main: palettes.warning[400] },
    error: { main: palettes.error[400] },
    brand: { main: palettes.brand[400] },
    // text: {
    //   primary: string;
    //   secondary: string;
    //   disabled: string;
    //   hint: string;
    // }
    // action: {
    //   active: string;
    //   hover: string;
    //   hoverOpacity: number;
    //   selected: string;
    //   disabled: string;
    //   disabledBackground: string;
    // }
    grey: palettes.blueGrey
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
    }
  }
}
