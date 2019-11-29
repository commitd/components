import React, { ComponentType, FC, HTMLAttributes } from 'react'
import { styled } from '@material-ui/styles'
import MaterialTypography, {
  TypographyProps as MaterialTypographyProps
} from '@material-ui/core/Typography'
import { withPositioning, PositioningProps } from '../../internal'
import { fonts, Theme, theme } from '../../theme'

type BaseTypographyProps = MaterialTypographyProps & PositioningProps
const BaseTypography: ComponentType<BaseTypographyProps> = withPositioning(
  MaterialTypography
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
  font?: theme.FontType
}

export type TypographyProps = BaseTypographyProps &
  ExtraTypographyProps &
  InternalTypographyProps
export type SpanProps = Omit<TypographyProps, 'component'>
export type ParagraphProps = Omit<TypographyProps, 'component'>

export type Ref = HTMLElement

export const StyledTypography: ComponentType<TypographyProps> = styled(
  ({ italic, fontSize, upper, light, capital, bold, font, ...others }) => (
    <BaseTypography {...others} />
  )
)(
  ({
    theme,
    italic,
    fontSize,
    upper,
    light,
    capital,
    bold,
    font = 'typography'
  }: { theme: Theme } & TypographyProps) =>
    Object.assign(theme.fonts[font], {
      fontStyle: italic ? 'italic' : 'normal',
      fontSize: fonts.sizes[fontSize ? fontSize : 0],
      textTransform: upper ? 'uppercase' : capital ? 'capitalize' : 'none',
      fontWeight: light ? 200 : bold ? 700 : 400
    })
)

const Strike: FC<{ strike: boolean }> = ({ strike, children }) =>
  strike ? <s>{children}</s> : <>{children}</>

export const Typography: FC<TypographyProps> = ({
  strike = false,
  ...props
}: TypographyProps) => {
  return (
    <Strike strike={strike}>
      {props.variant ? (
        <BaseTypography {...props} />
      ) : (
        <StyledTypography {...props} />
      )}
    </Strike>
  )
}

// For documentation only
export type TypographyDocsProps = Omit<
  ExtraTypographyProps & MaterialTypographyProps,
  keyof Omit<HTMLAttributes<HTMLElement>, 'color'> | 'variantMapping'
>
export const TypographyDocs: FC<TypographyDocsProps> = () => null
