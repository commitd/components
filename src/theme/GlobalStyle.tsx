import { createGlobalStyle } from "styled-components"
import fswoff from "../../public/fonts/FreeSans/FreeSans.woff"
import fsttf from "../../public/fonts/FreeSans/FreeSans.ttf"
import fsbwoff from "../../public/fonts/FreeSans/FreeSans.woff"
import fsbttf from "../../public/fonts/FreeSans/FreeSans.ttf"
import afeot from "../../public/fonts/ArciformFF/arciform.eot"
import afwoff from "../../public/fonts/ArciformFF/arciform.woff"
import afttf from "../../public/fonts/ArciformFF/arciform.ttf"
import theme from "./theme"

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${theme.fontSize};
    @font-face: {
      fontFamily: 'FreeSans',
      src: url(${fswoff}) format('woff'), url(${fsttf}) format('truetype'),
      fontStyle: 'normal',
    },
    @font-face: {
      fontFamily: 'FreeSans',
      src: url(${fsbwoff}) format('woff'), url(${fsbttf}) format('truetype'),
      fontStyle: 'bold',
    },
    @font-face: {
      fontFamily: 'Arciform',
      src: url(${afeot}),
      src: url(${afwoff}) format('afwoff'), url(${afttf}) format('truetype'),
      fontStyle: 'normal',
    },

    /* Make type rendering look crisper */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Disable auto-enlargement of small text in Safari */
    text-size-adjust: 100%;

    /* Enable kerning and optional ligatures */
    text-rendering: optimizeLegibility;
  }

  /**
   * Form elements render using OS defaults,
   * so font-family inheritance must be specifically declared
   */
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
  }
`

export default GlobalStyle
