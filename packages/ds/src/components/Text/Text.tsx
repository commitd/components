import { RecipeVariantProps, css, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { ComponentProps } from 'react'
import {
  CComponent,
  PolyCComponent,
  component,
  forwardRefExtend,
} from '../../utils'

export const TEXT_CLASS = 'c-text'
export const PARAGRAPH_CLASS = 'c-paragraph'
export const SPAN_CLASS = 'c-span'
export const STRIKE_CLASS = 'c-strike'
export const MONOSPACE_CLASS = 'c-monospace'
export const CAPTION_CLASS = 'c-caption'

export const text = cva({
  base: {
    lineHeight: '1',
    fontVariantNumeric: 'tabular-nums',
  },
  variants: {
    size: {
      '$-2': {
        fontSize: '$-2',
        lineHeight: '$body',
      },
      '$-1': {
        fontSize: '$-1',
        lineHeight: '$body',
      },
      $0: {
        fontSize: '$0',
        lineHeight: '$body',
      },
      $1: {
        fontSize: '$1',
        lineHeight: '$body',
      },
      $2: {
        fontSize: '$2',
        lineHeight: '$body',
      },
      $3: {
        fontSize: '$3',
        lineHeight: '$body',
      },
      $4: {
        fontSize: '$4',
        lineHeight: '$body',
      },
      $5: {
        fontSize: '$5',
        letterSpacing: '$tight',
        lineHeight: '$tight',
      },
      $6: {
        fontSize: '$6',
        lineHeight: '$tight',
        letterSpacing: '$tight',
      },
      $7: {
        fontSize: '$7',
        letterSpacing: '$tighter',
        lineHeight: '$tight',
        textIndent: '-.005em',
      },
      $8: {
        fontSize: '$8',
        letterSpacing: '$tighter',
        lineHeight: '$tight',
        textIndent: '-.018em',
      },
    },
    weight: {
      regular: { fontWeight: '$regular' },
      bold: { fontWeight: '$bold' },
      light: { fontWeight: '$light' },
    },
    font: {
      default: { fontFamily: '$text' },
      display: { fontFamily: '$display' },
      system: { fontFamily: '$system' },
      monospace: { fontFamily: '$monospace' },
    },
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
    nowrap: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
  },
  defaultVariants: {
    size: '$0',
    weight: 'regular',
    font: 'default',
  },
})

export type TextVariants = RecipeVariantProps<typeof text>
const inlineCss = css({ display: 'inline' })

/**
 * Text component covers all text use in the components.
 *
 * Prefer styling using the supplied props options, but the standard css is also available if required.
 *
 * A set of pre-configured components are also supplied for common use cases. These all use the same underlying Text component.
 */
export const Text: PolyCComponent<'span', TextVariants> = component(
  styled('span', text),
  TEXT_CLASS,
)
Text.displayName = 'Text'

const paragraphCss = css({ display: 'block', mb: '$3' })

export const Paragraph: CComponent<'p', TextVariants> = component(
  styled('p', text),
  PARAGRAPH_CLASS,
  paragraphCss,
)
Paragraph.displayName = 'Paragraph'

const captionCss = css({
  fontSize: '$-2',
  lineHeight: '$body',
})

/**
 * Captions styles the text for use in a caption. This remain polymorphic, so the component type can be set to `caption` or `figcaption` if required.
 */
export const Caption: CComponent<'caption', TextVariants> = component(
  styled('caption', text),
  CAPTION_CLASS,
  captionCss,
)
Caption.displayName = 'Caption'

/**
 * Convenience export of text with the `span` tag
 */
export const Span: CComponent<'span', TextVariants> = component(
  styled('span', text),
  SPAN_CLASS,
  inlineCss,
)
Span.displayName = 'Span'

/**
 * Convenience export of text with the `strikethrough` tag
 */
export const Strike: CComponent<'s', TextVariants> = component(
  styled('s', text),
  STRIKE_CLASS,
  inlineCss,
)
Strike.displayName = 'Strike'

type MonospaceProps = ComponentProps<typeof Text> & {
  inline?: boolean
}

/**
 * Convenience export of text with the monospace font and `pre` tag (or 'span' if marked `inline`)
 */
export const Monospace = forwardRefExtend<typeof Text, MonospaceProps>(
  ({ inline = false, className, children, ...props }, forwardedRef) => {
    const MonoComponent = inline ? 'span' : 'pre'
    return (
      <Text
        asChild
        className={cx(MONOSPACE_CLASS, className, inlineCss)}
        font="monospace"
        {...props}
        ref={forwardedRef}
      >
        <MonoComponent>{children}</MonoComponent>
      </Text>
    )
  },
)
Monospace.displayName = 'Monospace'
