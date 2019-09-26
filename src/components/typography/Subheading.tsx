import React from 'react'
import { Typography, TypographyProps } from './Typography'

export type SubheadingProps = TypographyProps

export const Subheading: {
  h1: React.ComponentType<SubheadingProps>
  h2: React.ComponentType<SubheadingProps>
  h3: React.ComponentType<SubheadingProps>
  h4: React.ComponentType<SubheadingProps>
  h5: React.ComponentType<SubheadingProps>
} = {
  h1: ({ variant, component, ...others }: SubheadingProps) => (
    <Typography {...others} variant="subtitle1" component="h2" />
  ),
  h2: ({ variant, component, ...others }: SubheadingProps) => (
    <Typography {...others} variant="subtitle1" component="h3" />
  ),
  h3: ({ variant, component, ...others }: SubheadingProps) => (
    <Typography {...others} variant="subtitle1" component="h4" />
  ),
  h4: ({ variant, component, ...others }: SubheadingProps) => (
    <Typography {...others} variant="subtitle1" component="h5" />
  ),
  h5: ({ variant, component, ...others }: SubheadingProps) => (
    <Typography {...others} variant="subtitle1" component="h6" />
  )
}
