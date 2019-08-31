import * as React from "react"
import { styled } from "@material-ui/styles"
import { fonts } from "../../theme"
import { Typography, TypographyProps } from "./Typography"

export type DisplayProps = TypographyProps

export const Display: {
  d1: React.ComponentType<DisplayProps>
  d2: React.ComponentType<DisplayProps>
  d3: React.ComponentType<DisplayProps>
  d4: React.ComponentType<DisplayProps>
} = {
  d1: styled((props: DisplayProps) => (
    <Typography {...props} component="h1" variant="h1" />
  ))({
    fontFamily: fonts.families.display
  }),
  d2: styled((props: DisplayProps) => (
    <Typography {...props} component="h2" variant="h2" />
  ))({
    fontFamily: fonts.families.display
  }),
  d3: styled((props: DisplayProps) => (
    <Typography {...props} component="h3" variant="h3" />
  ))({
    fontFamily: fonts.families.display
  }),
  d4: styled((props: DisplayProps) => (
    <Typography {...props} component="h4" variant="h4" />
  ))({
    fontFamily: fonts.families.display
  })
}

//TODO Add variant font

export default Display