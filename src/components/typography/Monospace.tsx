import React from 'react'
import { Typography, TypographyProps } from './Typography'
import { styled } from '@material-ui/styles'
import { fonts, Theme } from '../../theme'

export type MonospaceProps = TypographyProps & {
  wrap?: boolean
}

export const Monospace = styled<React.ComponentType<MonospaceProps>>(
  ({ variant, component, wrap, ...other }) => (
    <Typography {...other} variant="body1" component="pre" />
  )
)(({ theme, wrap }: { theme: Theme; wrap?: boolean }) => ({
  fontFamily: fonts.families.mono,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.body1.fontSize,
  lineHeight: theme.typography.body1.fontSize,
  whiteSpace: wrap ? 'pre-wrap' : 'pre'
}))
