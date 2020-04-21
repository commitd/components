import React from 'react'
import { styled } from '@material-ui/styles'
import { Theme, fonts } from '../../theme'
import { Typography, TypographyProps } from './Typography'

export type SubheadingProps = Omit<TypographyProps<'h6'>, 'variant'>

const font = ({ theme }: { theme: Theme }) => theme.fonts.subheading

export const Subheading: {
  h1: React.ComponentType<SubheadingProps>
  h2: React.ComponentType<SubheadingProps>
  h3: React.ComponentType<SubheadingProps>
  h4: React.ComponentType<SubheadingProps>
  h5: React.ComponentType<SubheadingProps>
} = {
  h1: styled((props: SubheadingProps) => (
    <Typography {...props} variant="subtitle1" />
  ))(font),
  h2: styled((props: SubheadingProps) => (
    <Typography {...props} variant="subtitle1" />
  ))(font),
  h3: styled((props: SubheadingProps) => (
    <Typography {...props} variant="subtitle1" />
  ))(Object.assign({ fontSize: fonts.sizes[-1] }, font)),
  h4: styled((props: SubheadingProps) => (
    <Typography {...props} variant="subtitle1" />
  ))(Object.assign({ fontSize: fonts.sizes[-1] }, font)),
  h5: styled((props: SubheadingProps) => (
    <Typography {...props} variant="subtitle1" />
  ))(Object.assign({ fontSize: fonts.sizes[-1] }, font)),
}
