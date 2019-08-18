import * as React from "react"
import { Typography, TypographyProps } from "./Typography"

export type HeadingProps = TypographyProps

export const Heading: {
  h1: React.FC<HeadingProps>
  h2: React.FC<HeadingProps>
  h3: React.FC<HeadingProps>
  h4: React.FC<HeadingProps>
  h5: React.FC<HeadingProps>
  h6: React.FC<HeadingProps>
} = {
  h1: props => <Typography {...props} variant="h1" />,
  h2: props => <Typography {...props} variant="h2" />,
  h3: props => <Typography {...props} variant="h3" />,
  h4: props => <Typography {...props} variant="h4" />,
  h5: props => <Typography {...props} variant="h5" />,
  h6: props => <Typography {...props} variant="h6" />
}

export default Heading
