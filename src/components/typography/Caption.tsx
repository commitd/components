import React from 'react'
import { Typography, TypographyProps } from './Typography'

export type CaptionProps<C extends React.ElementType> = TypographyProps<C>

export const Caption = React.forwardRef(
  <C extends React.ElementType>(
    props: CaptionProps<C>,
    ref?: React.Ref<HTMLElement>
  ) => <Typography<C> forwardedRef={ref} {...props} variant="caption" />
)
