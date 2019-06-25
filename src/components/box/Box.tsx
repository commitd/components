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
import theme from "../../theme/theme"
import { ThemeProps } from "../../theme/theme"

export type BoxProps = SpaceProps &
  WidthProps &
  HeightProps &
  ColorProps &
  TextAlignProps &
  FlexProps &
  OrderProps &
  AlignSelfProps &
  ThemeProps

export const Box: React.FC<BoxProps> = styled.div<BoxProps>`
   ${space} ${width} ${height} ${color} ${textAlign} ${flex} ${order} ${alignSelf}
 `

Box.defaultProps = {
  theme: theme
}

export default Box
