import React from 'react'
import { styled } from '@material-ui/styles'
import { Theme, fonts } from '../../theme'
import { Typography, TypographyProps } from './Typography'
import { OverrideComponent } from '../../internal/util'

export type SubheadingProps = TypographyProps &
  OverrideComponent & { theme?: Theme }

const font = ({ theme }: { theme: Theme }) => theme.fonts.subheading

export const Subheading: {
  h1: React.ComponentType<SubheadingProps>
  h2: React.ComponentType<SubheadingProps>
  h3: React.ComponentType<SubheadingProps>
  h4: React.ComponentType<SubheadingProps>
  h5: React.ComponentType<SubheadingProps>
} = {
  h1: styled(({ variant, component, ...others }: SubheadingProps) => (
    <Typography {...others} variant="subtitle1" />
  ))(font),
  h2: styled(({ variant, component, ...others }: SubheadingProps) => (
    <Typography {...others} variant="subtitle1" />
  ))(font),
  h3: styled(({ variant, component, ...others }: SubheadingProps) => (
    <Typography {...others} variant="subtitle1" />
  ))(Object.assign({ fontSize: fonts.sizes[-1] }, font)),
  h4: styled(({ variant, component, ...others }: SubheadingProps) => (
    <Typography {...others} variant="subtitle1" />
  ))(Object.assign({ fontSize: fonts.sizes[-1] }, font)),
  h5: styled(({ variant, component, ...others }: SubheadingProps) => (
    <Typography {...others} variant="subtitle1" />
  ))(Object.assign({ fontSize: fonts.sizes[-1] }, font)),
}
