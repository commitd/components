import React from 'react'
import { Typography, TypographyProps } from './Typography'

export type TextProps<C extends React.ElementType> = TypographyProps<C>

export const Text = React.forwardRef(
  <C extends React.ElementType>(
    props: TextProps<C>,
    ref?: React.Ref<HTMLElement>
  ) => <Typography<C> ref={ref} {...props} font="text" />
)
