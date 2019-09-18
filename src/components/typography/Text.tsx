import React from 'react'
import { styled } from '@material-ui/styles'
import { Typography, TypographyProps } from './Typography'
import { fonts } from '../../theme'

export type MainTextProps = {
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
}
export type TextProps = TypographyProps & MainTextProps

export const Text = styled(
  ({ italic, fontSize, upper, light, capital, bold, ...others }: TextProps) => (
    <Typography {...others} />
  )
)({
  fontFamily: fonts.families.main,
  fontStyle: props => (props.italic ? 'italic' : 'normal'),
  fontSize: props => fonts.sizes[props.fontSize ? props.fontSize : 0],
  // letterSpacing: props =>
  //   props.upper
  //     ? themeGet("letterSpacings.upper")(props)
  //     : props.capital
  //     ? themeGet("letterSpacings.title")(props)
  //     : themeGet("letterSpacings.normal")(props),
  textTransform: props =>
    props.upper ? 'uppercase' : props.capital ? 'capitalize' : 'none',
  fontWeight: props => (props.light ? 100 : props.bold ? 500 : 300)
})

Text.displayName = 'Text'
export const Span: React.FC<TextProps> = props => (
  <Text {...props} component="span" />
)
Span.displayName = 'Span'
export const Paragraph: React.FC<TextProps> = props => (
  <Text {...props} component="p" />
)
Paragraph.displayName = 'Paragraph'
