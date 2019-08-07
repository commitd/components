import * as React from "react"
import styled from "styled-components"
import {
  space,
  width,
  color,
  textAlign,
  flex,
  SpaceProps,
  WidthProps,
  ColorProps,
  TextAlignProps,
  FlexProps,
  alignSelf,
  order,
  OrderProps,
  AlignSelfProps,
  HeightProps,
  height
} from "styled-system"
import { theme, ThemeProps } from "../../theme"

export type SpacingProps = SpaceProps & FlexProps
export type RemainingBoxProps = WidthProps &
  HeightProps &
  ColorProps &
  TextAlignProps &
  OrderProps &
  AlignSelfProps &
  ThemeProps

export type BoxProps = SpacingProps & RemainingBoxProps

export const Spacing: React.FC<SpacingProps> = styled.div<SpacingProps>`
  ${space} ${flex}
`

export const Box: React.FC<BoxProps> = styled(Spacing)<BoxProps>`
   ${width} ${height} ${color} ${textAlign} ${order} ${alignSelf}
 `

Box.defaultProps = {
  theme: theme
}

export default Box
