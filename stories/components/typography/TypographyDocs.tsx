import * as React from 'react'
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

export type TypographyDocsProps = Omit<
  ExtraTypographyProps & MaterialTypographyProps,
  keyof Omit<React.HTMLAttributes<HTMLElement>, 'color'> | 'variantMapping'
> & {
  /**
   * Base typography and text component support changing the underlying component type with this prop. Specialized types are mostly predefining this component and can not be overridden.
   * @default 'span'
   */
  component?: React.ElementType
}
export const TypographyDocs: React.FC<TypographyDocsProps> = () => null
