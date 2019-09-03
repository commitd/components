import * as React from 'react'
import { Typography, TypographyProps } from './Typography'
import { styled } from '@material-ui/styles'
import { fonts } from '../../theme'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export type MonospaceProps = TypographyProps

export const Monospace = styled((props: MonospaceProps) => (
  <Typography {...props} variant="body1" component="pre" />
))(({ theme }: { theme: Theme }) => ({
  fontFamily: fonts.families.mono,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.body1.fontSize,
  lineHeight: theme.typography.body1.fontSize
}))

//TODO Add variant font

export default Monospace
