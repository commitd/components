import React from 'react'
import { Typography, TypographyProps } from './Typography'
import { styled } from '@material-ui/styles'
import { fonts, colors } from '../../theme'

export type BrandProps = TypographyProps & { fontSize: number }

export const Brand: React.ComponentType<BrandProps> = styled(
  ({ variant, component, ...others }: BrandProps) => (
    <Typography {...others} variant="body1" component="pre" />
  )
)(({ fontSize, color }: BrandProps) => ({
  fontFamily: fonts.families.brand,
  fontSize: fonts.sizes[fontSize ? fontSize : 0],
  color: color ? undefined : colors.committedGrey[500]
}))
