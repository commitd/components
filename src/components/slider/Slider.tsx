import * as React from "react"
import {
  compose,
  spacing,
  flexbox,
  sizing,
  SpacingProps,
  FlexboxProps,
  SizingProps
} from "@material-ui/system"
import MaterialSlider, {
  SliderProps as MaterialSliderProps
} from "@material-ui/core/Slider"
import { styled } from "@material-ui/styles"

export type SliderProps = MaterialSliderProps &
  SpacingProps &
  FlexboxProps &
  SizingProps

export const Container = styled("div")(
  compose(
    spacing,
    flexbox,
    sizing
  )
)

export const Slider = ({
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  order,
  flex,
  flexGrow,
  flexShrink,
  alignSelf,
  justifyItems,
  justifySelf,
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  sizeWidth,
  sizeHeight,
  ...rest
}: SliderProps) => (
  <Container
    {...{
      m,
      mt,
      mr,
      mb,
      ml,
      mx,
      my,
      p,
      pt,
      pr,
      pb,
      pl,
      px,
      py,
      margin,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      marginX,
      marginY,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingX,
      paddingY,
      flexBasis,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent,
      order,
      flex,
      flexGrow,
      flexShrink,
      alignSelf,
      justifyItems,
      justifySelf,
      width,
      maxWidth,
      minWidth,
      height,
      maxHeight,
      minHeight,
      sizeWidth,
      sizeHeight
    }}
  >
    <MaterialSlider {...rest} />
  </Container>
)

export default Slider
