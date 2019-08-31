import * as React from "react"
import { Typography, TypographyProps } from "./Typography"
import { styled } from "@material-ui/styles"
import { fonts } from "../../theme"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

export type BrandProps = TypographyProps & { fontSize: number }

export const Brand = styled((props: BrandProps) => (
  <Typography {...props} variant="body1" component="pre" />
))(({ theme, fontSize }: { theme: Theme; fontSize: number }) => ({
  fontFamily: fonts.families.brand,
  fontSize: fonts.sizes[fontSize ? fontSize : 0]
}))

//TODO Add variant font

export default Brand
