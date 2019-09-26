import React from 'react'
import { Typography, TypographyProps } from './Typography'

export type HeadingProps = TypographyProps

export const Heading: {
  h1: React.FC<HeadingProps>
  h2: React.FC<HeadingProps>
  h3: React.FC<HeadingProps>
  h4: React.FC<HeadingProps>
  h5: React.FC<HeadingProps>
  h6: React.FC<HeadingProps>
} = {
  h1: ({ variant, ...others }) => <Typography {...others} variant="h1" />,
  h2: ({ variant, ...others }) => <Typography {...others} variant="h2" />,
  h3: ({ variant, ...others }) => <Typography {...others} variant="h3" />,
  h4: ({ variant, ...others }) => <Typography {...others} variant="h4" />,
  h5: ({ variant, ...others }) => <Typography {...others} variant="h5" />,
  h6: ({ variant, ...others }) => <Typography {...others} variant="h6" />
}
