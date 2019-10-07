import React from 'react'
import { Typography, TypographyProps } from './Typography'

export type CaptionProps = TypographyProps

export const Caption: React.ComponentType<CaptionProps> = ({
  variant,
  ...others
}: CaptionProps) => <Typography {...others} variant="caption" />
