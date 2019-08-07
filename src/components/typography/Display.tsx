import * as React from "react"
import { Typography, TypographyProps } from "./Typography"

export type DisplayProps = TypographyProps

export const Display: {
  d1: React.FC<DisplayProps>
  d2: React.FC<DisplayProps>
  d3: React.FC<DisplayProps>
  d4: React.FC<DisplayProps>
} = {
  d1: props => (
    <Typography as="h1" textStyle="display" fontSize={[6, 7, 8]} {...props} />
  ),
  d2: props => (
    <Typography as="h2" textStyle="display" fontSize={[5, 6, 7]} {...props} />
  ),
  d3: props => (
    <Typography as="h3" textStyle="display" fontSize={[4, 5, 6]} {...props} />
  ),
  d4: props => (
    <Typography as="h4" textStyle="display" fontSize={[3, 4, 5]} {...props} />
  )
}

export default Display
