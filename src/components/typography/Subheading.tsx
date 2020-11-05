import React from 'react'
import { styled, compose } from '../../styles'
import { Theme } from '../../theme'
import { Typography, TypographyProps } from './Typography'

export type SubheadingProps = Omit<TypographyProps<'h6'>, 'variant'>

const font = ({ theme }: { theme: Theme }) => theme.fonts.subheading
const fontSize = (factor: number) => ({ theme }: { theme: Theme }) => ({
  fontSize: theme.fontSizing(factor),
})

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
  ))(compose(fontSize(-1), font)),
  h4: styled((props: SubheadingProps) => (
    <Typography {...props} variant="subtitle1" />
  ))(compose(fontSize(-1), font)),
  h5: styled((props: SubheadingProps) => (
    <Typography {...props} variant="subtitle1" />
  ))(compose(fontSize(-1), font)),
}
