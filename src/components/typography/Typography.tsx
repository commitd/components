import * as React from "react"
import styled from "styled-components"
import {
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  lineHeight,
  LineHeightProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  textStyle,
  TextStyleProps,
  fontFamily,
  FontFamilyProps
} from "styled-system"
import { theme, ThemeProps, withTheme } from "../../theme"

export type TypographyProps = ThemeProps &
  TextAlignProps &
  SpaceProps &
  ColorProps

export type InnerTypographyProps = TypographyProps &
  FontFamilyProps &
  TextStyleProps &
  FontSizeProps &
  LineHeightProps & { as?: any }

export const InnerTypography = styled.div<InnerTypographyProps>`
  ${fontFamily}
  ${textStyle}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${space}
  ${color}
  `

export const Typography: React.FC<InnerTypographyProps> = withTheme(
  InnerTypography
)

Typography.defaultProps = {
  theme: theme
}

export default Typography
