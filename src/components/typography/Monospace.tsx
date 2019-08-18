import * as React from "react"
import { Typography, TypographyProps } from "./Typography"
import { styled } from "@material-ui/styles"
import { fonts } from "../../theme"

export type MonospaceProps = TypographyProps

export const Monospace = styled((props: MonospaceProps) => (
  <Typography {...props} variant="body1" component="pre" />
))({
  fontFamily: fonts.mono
  // TODO: other font properties
})

//TODO Add variant font

export default Monospace
