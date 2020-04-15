import React, { ComponentType } from 'react'
import { Typography, TypographyProps } from './Typography'

export type TextProps = TypographyProps

export const Text: ComponentType<TextProps> = React.forwardRef((props, ref) => (
  <Typography ref={ref} {...props} font="text" />
))
