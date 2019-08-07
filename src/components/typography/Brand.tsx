import * as React from "react"
import styled from "styled-components"
import { theme, withTheme } from "../../theme"
import Typography from "./Typography"
import { TypographyProps } from "./Typography"

export type BrandProps = TypographyProps

export const Brand: React.FC<BrandProps> = withTheme(styled(Typography)<
  BrandProps & { as?: any }
>`
  font-family: "FreeSans";
  font-style: normal;
  text-transform: lowercase;
  font-weight: 500;
  font-size: 50px;
  color: #454545;
`)

Brand.defaultProps = {
  theme: theme
}

Brand.displayName = "Brand"

export default Brand
