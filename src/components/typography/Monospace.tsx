import React from 'react'
import { Typography, TypographyProps } from './Typography'
import { styled } from '@material-ui/styles'
import { Theme } from '../../theme'

export type MonospaceProps = TypographyProps<'pre'> & {
  wrap?: boolean
}

export const Monospace: React.ComponentType<MonospaceProps> = styled<
  React.ComponentType<MonospaceProps>
>(({ variant, component, wrap, ...other }) => (
  <Typography {...other} variant="body1" component={'pre'} />
))(({ theme, wrap }: { theme: Theme; wrap?: boolean }) => {
  return Object.assign(
    {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.body1.fontSize,
      lineHeight: theme.typography.body1.fontSize,
      whiteSpace: wrap ? 'pre-wrap' : 'pre',
    },
    theme.fonts.monospace
  )
})
