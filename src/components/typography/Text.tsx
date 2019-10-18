import { ComponentType } from 'react'
import { styled } from '@material-ui/styles'
import { Typography, TypographyProps } from './Typography'
import { fonts } from '../../theme'

export type TextProps = TypographyProps

export const Text: ComponentType<TextProps> = styled(Typography)({
  fontFamily: fonts.families.main
})
