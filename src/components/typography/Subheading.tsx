import * as React from "react"
import { Typography, TypographyProps } from "./Typography"

export type SubheadingProps = TypographyProps

export const Subheading: {
  h1: React.FC<SubheadingProps>
  h2: React.FC<SubheadingProps>
  h3: React.FC<SubheadingProps>
  h4: React.FC<SubheadingProps>
  h5: React.FC<SubheadingProps>
  h6: React.FC<SubheadingProps>
} = {
  h1: props => (
    <Typography
      as="span"
      textStyle="subheading"
      fontSize={[4, 5, 6]}
      {...props}
    />
  ),
  h2: props => (
    <Typography
      as="span"
      textStyle="subheading"
      fontSize={[3, 4, 5]}
      {...props}
    />
  ),
  h3: props => (
    <Typography
      as="span"
      textStyle="subheading"
      fontSize={[3, 3, 4]}
      {...props}
    />
  ),
  h4: props => (
    <Typography
      as="span"
      textStyle="subheading"
      fontSize={[3, 3, 3]}
      {...props}
    />
  ),
  h5: props => (
    <Typography as="span" textStyle="subheading" fontSize={[2, 3]} {...props} />
  ),
  h6: props => (
    <Typography as="span" textStyle="subheading" fontSize={[2]} {...props} />
  )
}

export default Subheading
