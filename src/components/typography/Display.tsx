import React from 'react'
import { styled } from '@material-ui/styles'
import { Theme } from '../../theme'
import { Typography, TypographyProps } from './Typography'

export type DisplayProps = TypographyProps

const displayFont = ({ theme }: { theme: Theme }) => ({
    fontFamily: theme.fonts.display
  }
)

export const Display: {
  d1: React.ComponentType<DisplayProps>
  d2: React.ComponentType<DisplayProps>
  d3: React.ComponentType<DisplayProps>
  d4: React.ComponentType<DisplayProps>
} = {
  d1: styled(({ variant, component, ...others }: DisplayProps) => (
    <Typography {...others} component="h1" variant="h1" />
  ))(displayFont),
  d2: styled(({ variant, component, ...others }: DisplayProps) => (
    <Typography {...others} component="h2" variant="h2" />
  ))(displayFont),
  d3: styled(({ variant, component, ...others }: DisplayProps) => (
    <Typography {...others} component="h3" variant="h3" />
  ))(displayFont),
  d4: styled(({ variant, component, ...others }: DisplayProps) => (
    <Typography {...others} component="h4" variant="h4" />
  ))(displayFont)
}
