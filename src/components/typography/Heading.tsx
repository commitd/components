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
  h1: props => (
    <Typography as="h1" textStyle="heading" fontSize={[6, 7, 8]} {...props} />
  ),
  h2: props => (
    <Typography as="h2" textStyle="heading" fontSize={[5, 6, 7]} {...props} />
  ),
  h3: props => (
    <Typography as="h3" textStyle="heading" fontSize={[4, 5, 6]} {...props} />
  ),
  h4: props => (
    <Typography as="h4" textStyle="heading" fontSize={[4, 5, 5]} {...props} />
  ),
  h5: props => (
    <Typography as="h5" textStyle="heading" fontSize={[3, 4]} {...props} />
  ),
  h6: props => (
    <Typography as="h6" textStyle="heading" fontSize={[3]} {...props} />
  )
}

export default Heading
