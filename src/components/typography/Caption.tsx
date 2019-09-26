import React from 'react'
import { Typography, TypographyProps } from './Typography'

export type CaptionProps = TypographyProps

export const Caption = ({ variant, ...others }: CaptionProps) => (
  <Typography {...others} variant="caption" />
)
