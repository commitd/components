import * as React from "react"
import { Typography, TypographyProps } from "./Typography"

export type DisplayProps = TypographyProps

export const Display: {
  d1: React.FC<DisplayProps>
  d2: React.FC<DisplayProps>
  d3: React.FC<DisplayProps>
  d4: React.FC<DisplayProps>
} = {
  d1: props => <Typography {...props} component="h1" variant="h1" />,
  d2: props => <Typography {...props} component="h2" variant="h2" />,
  d3: props => <Typography {...props} component="h3" variant="h3" />,
  d4: props => <Typography {...props} component="h4" variant="h4" />
}

//TODO Add variant font

export default Display
