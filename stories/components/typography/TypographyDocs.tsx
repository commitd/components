import React, { FC, HTMLAttributes } from 'react'
import { TypographyProps as MaterialTypographyProps } from '@material-ui/core/Typography'

// TODO: reference
export type ExtraTypographyProps = {
  /** Select from a scaled font size, 0 in normal, negative index for smaller, positive for larger */
  fontSize?: number
  /** Set the text alignment */
  align?: 'left' | 'center' | 'right'
  /** Set true to set title case */
  capital?: boolean
  /** Set true to set all upper */
  upper?: boolean
  /** Set true to use bold font */
  bold?: boolean
  /** Set true to use light font */
  light?: boolean
  /** Set true to use italic font  */
  italic?: boolean
  /** Set to true to add strikethrough */
  strike?: boolean
}

// For documentation only
export type TypographyDocsProps = Omit<
  ExtraTypographyProps & MaterialTypographyProps,
  keyof Omit<HTMLAttributes<HTMLElement>, 'color'> | 'variantMapping'
>
export const TypographyDocs: FC<TypographyDocsProps> = () => null
