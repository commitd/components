import React, { ForwardRefExoticComponent } from 'react'
import { styled } from '@material-ui/styles'
import MaterialTypography, {
  TypographyProps as MaterialTypographyProps,
} from '@material-ui/core/Typography'
import { withPositioningProps, PositioningProps } from '../../internal'
import { FontType, Theme } from '../../theme'

type BaseTypographyProps<C extends React.ElementType> = MaterialTypographyProps<
  C,
  { component?: C }
> &
  PositioningProps

// function test() {
//   const ref = React.useRef(null)
//   return <MaterialTypography ref={ref} />
// }

const BaseTypography = withPositioningProps<MaterialTypographyProps>(
  MaterialTypography as ForwardRefExoticComponent<MaterialTypographyProps>
)

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

export type InternalTypographyProps = {
  /** Select the font to use from the theme */
  font?: FontType
}

//TODO: check if Omit theme still required
export type TypographyProps<C extends React.ElementType> = BaseTypographyProps<
  C
> &
  ExtraTypographyProps &
  InternalTypographyProps

export type Ref = HTMLElement

function WrappedTypography<C extends React.ElementType>({
  italic,
  fontSize,
  upper,
  light,
  capital,
  bold,
  font,
  ...others
}: TypographyProps<C>) {
  return <BaseTypography {...others} />
}

export const StyledTypography = styled(WrappedTypography)(
  ({
    theme,
    italic,
    fontSize,
    upper,
    light,
    capital,
    bold,
    font = 'typography',
  }: { theme: Theme } & TypographyProps<any>) =>
    Object.assign(theme.fonts[font], {
      fontStyle: italic ? 'italic' : 'normal',
      // @ts-ignore
      fontSize: theme.fontSizing(fontSize ? fontSize : 0),
      textTransform: upper ? 'uppercase' : capital ? 'capitalize' : 'none',
      fontWeight: light ? 200 : bold ? 700 : 400,
    })
) as React.ComponentType<TypographyProps<any>>

const Strike: React.FC<{ strike: boolean }> = ({ strike, children }) =>
  strike ? <s>{children}</s> : <>{children}</>

export function Typography<C extends React.ElementType>({
  strike = false,
  ...props
}: TypographyProps<C>) {
  return (
    <Strike strike={strike}>
      {props.variant ? (
        <WrappedTypography {...props} />
      ) : (
        <StyledTypography {...props} />
      )}
    </Strike>
  )
}

export type SpanProps = TypographyProps<'span'>

export function Span(props: SpanProps) {
  return <Typography component="span" {...props} />
}

export type ParagraphProps = TypographyProps<'p'>

export function Paragraph(props: ParagraphProps) {
  return <Typography component="p" {...props} />
}
