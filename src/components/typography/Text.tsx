import { ComponentType } from 'react'
import { styled } from '@material-ui/styles'
import { Typography, TypographyProps } from './Typography'
import { Theme } from '../../theme'

export type TextProps = TypographyProps

const textFont = ({ theme }: { theme: Theme }) => theme.fonts.text

export const Text: ComponentType<TextProps> = styled(Typography)(textFont)
