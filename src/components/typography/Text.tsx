import React from 'react'
import { Typography, TypographyProps } from './Typography'

export type TextProps = TypographyProps

export const Text: React.ComponentType<TextProps> = React.forwardRef(
  (props, ref) => <Typography ref={ref} {...props} font="text" />
)
