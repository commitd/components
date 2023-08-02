import { RecipeVariantProps, css, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { HTMLPolymorphicProps } from '@polymorphic-factory/react'
import React, { ComponentRef, ElementRef, HTMLProps, forwardRef } from 'react'
import { PolymorphicComponent, poly } from '../../packages/ds/src/components/Base'
import { withClasses } from '../../utils'

const DEFAULT_TAG = 'span'

export const TEXT_CLASS = 'c-text'
export const PARAGRAPH_CLASS = 'c-paragraph'
export const SPAN_CLASS = 'c-span'
export const STRIKE_CLASS = 'c-strike'
export const MONOSPACE_CLASS = 'c-monospace'
export const CAPTION_CLASS = 'c-caption'

export const text = cva({
  base: {
    // Reset
    lineHeight: '1',
    margin: '0',
    fontFamily: 'text',
    fontWeight: 'regular',
    fontVariantNumeric: 'tabular-nums',
    display: 'inline',
    color: 'inherit',
  },
  variants: {
    size: {
      '-2': {
        fontSize: '$-2',
        lineHeight: '$body',
      },
      '-1': {
        fontSize: '$-1',
        lineHeight: '$body',
      },
      '0': {
        fontSize: '$0',
        lineHeight: '$body',
      },
      '1': {
        fontSize: '$1',
        lineHeight: '$body',
      },
      '2': {
        fontSize: '$2',
        lineHeight: '$body',
      },
      '3': {
        fontSize: '$3',
        lineHeight: '$body',
      },
      '4': {
        fontSize: '$4',
        lineHeight: '$body',
      },
      '5': {
        fontSize: '$5',
        letterSpacing: '$tight',
        lineHeight: '$tight',
      },
      '6': {
        fontSize: '$6',
        lineHeight: '$tight',
        letterSpacing: '$tight',
      },
      '7': {
        fontSize: '$7',
        letterSpacing: '$tighter',
        lineHeight: '$tight',
        textIndent: '-.005em',
      },
      '8': {
        fontSize: '8',
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
    size: '0',
    weight: 'regular',
  },
})

const PolySpan: PolymorphicComponent[typeof DEFAULT_TAG] = poly(DEFAULT_TAG)
const StyledText = styled(PolySpan, text)

type TextVariantProps = RecipeVariantProps<typeof text>
type TextRef = Partial<Pick<Parameters<typeof StyledText>[0], 'ref'>>
export type TextProps = HTMLPolymorphicProps<typeof DEFAULT_TAG> &
  TextVariantProps &
  TextRef

/**
 * Text component covers all text use in the components.
 *
 * Prefer styling using the supplied props options, but the standard css is also available if required.
 *
 * A set of pre-configured components are also supplied for common use cases. These all use the same underlying Text component.
 */

export const Text = withClasses(StyledText, TEXT_CLASS) as React.FC<TextProps>
Text.displayName = 'Text'

type ParagraphProps = React.HTMLProps<'p'> & TextVariantProps

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <Text
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        as="p"
        className={cx(
          PARAGRAPH_CLASS,
          css({ display: 'block', mb: 3 }),
          className
        )}
        {...props}
        ref={forwardedRef}
      />
    )
  }
)
Paragraph.displayName = 'Paragraph'

type SpanProps = TextVariantProps &
  HTMLProps<'span'> & { children?: React.ReactNode }

/**
 * Convenience export of text with the `span` tag
 */
export const Span = forwardRef<ComponentRef<typeof Text>, SpanProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <Text
        className={cx(SPAN_CLASS, className)}
        {...props}
        ref={forwardedRef}
      />
    )
  }
)
Span.displayName = 'Span'

type StrikeProps = TextVariantProps & { children?: React.ReactNode }

/**
 * Convenience export of text with the `strikethrough` tag
 */
export const Strike = forwardRef<HTMLSpanElement, StrikeProps>(
  (props, forwardedRef) => {
    return (
      <Text as="s" className={STRIKE_CLASS} {...props} ref={forwardedRef} />
    )
  }
)
Strike.displayName = 'Strike'

type MonospaceProps = TextVariantProps & {
  inline?: boolean
  children?: React.ReactNode
}

/**
 * Convenience export of text with the monospace font and `pre` tag (or 'span' if marked `inline`)
 */
export const Monospace = forwardRef<HTMLPreElement, MonospaceProps>(
  ({ inline = false, ...props }, forwardedRef) => {
    return (
      <Text
        as={inline ? 'span' : 'pre'}
        className={MONOSPACE_CLASS}
        font="monospace"
        {...props}
        ref={forwardedRef}
      />
    )
  }
)
Monospace.displayName = 'Monospace'

type CaptionProps = TextVariantProps & { children?: React.ReactNode }

/**
 * Captions styles the text for use in a caption. This remain polymorphic, so the component type can be set to `caption` or `figcaption` if required.
 */
export const Caption = forwardRef<ElementRef<typeof Text>, CaptionProps>(
  (props, forwardedRef) => {
    return (
      <Text size="-2" className={CAPTION_CLASS} {...props} ref={forwardedRef} />
    )
  }
)
Caption.displayName = 'Caption'
