import React, { ComponentType } from 'react'
import { Typography, TypographyProps } from './Typography'

export type TextProps = TypographyProps

export const Text: ComponentType<TextProps> = props => (
  <Typography {...props} font="text" />
)
