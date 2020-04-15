import React from 'react'
import { styled } from '@material-ui/styles'
import { Theme } from '../../theme'
import { Typography, TypographyProps } from './Typography'
import { OverrideComponent } from '../../internal/util'

export type HeadingProps = TypographyProps &
  OverrideComponent & { theme?: Theme }

const displayFont = ({ theme }: { theme: Theme }) => theme.fonts.heading

export const Heading: {
  h1: React.ComponentType<HeadingProps>
  h2: React.ComponentType<HeadingProps>
  h3: React.ComponentType<HeadingProps>
  h4: React.ComponentType<HeadingProps>
  h5: React.ComponentType<HeadingProps>
  h6: React.ComponentType<HeadingProps>
} = {
  h1: styled(({ variant, component, ...others }: HeadingProps) => (
    <Typography {...others} variant="h1" />
  ))(displayFont),
  h2: styled(({ variant, component, ...others }: HeadingProps) => (
    <Typography {...others} variant="h2" />
  ))(displayFont),
  h3: styled(({ variant, component, ...others }: HeadingProps) => (
    <Typography {...others} variant="h3" />
  ))(displayFont),
  h4: styled(({ variant, component, ...others }: HeadingProps) => (
    <Typography {...others} variant="h4" />
  ))(displayFont),
  h5: styled(({ variant, component, ...others }: HeadingProps) => (
    <Typography {...others} variant="h5" />
  ))(displayFont),
  h6: styled(({ variant, component, ...others }: HeadingProps) => (
    <Typography {...others} variant="h6" />
  ))(displayFont),
}
