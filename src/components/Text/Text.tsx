import React, { ElementRef, forwardRef } from 'react'
import type { CSS, CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'

const DEFAULT_TAG = 'span'

/**
 * Text component covers all text use in the components.
 *
 * Prefer styling using the supplied props options, but the standard css is also available if required.
 *
 * A set of pre-configured components are also supplied for common use cases. These all use the same underlying Text component.
 */
export const Text = styled(DEFAULT_TAG, {
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: '$regular',
  fontVariantNumeric: 'tabular-nums',
  display: 'inline',
  color: '$text',

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
    size: '0',
    weight: 'regular',
  },
})

type ParagraphProps = CSSProps &
  VariantProps<typeof Text> & { children?: React.ReactNode }

const PARAGRAPH_CLASS_NAME = 'c-paragraph'
const SPAN_CLASS_NAME = 'c-span'
const STRIKE_CLASS_NAME = 'c-strike'
const MONOSPACE_CLASS_NAME = 'c-monospace'
const CAPTION_CLASS_NAME = 'c-caption'

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ css, ...props }, forwardedRef) => {
    return (
      <Text
        css={{ display: 'block', mb: '$3', ...css } as CSS}
        as="p"
        className={PARAGRAPH_CLASS_NAME}
        {...props}
        ref={forwardedRef}
      />
    )
  }
)
Paragraph.toString = () => `.${PARAGRAPH_CLASS_NAME}`

type SpanProps = CSSProps &
  VariantProps<typeof Text> & { children?: React.ReactNode }

/**
 * Convenience export of text with the `span` tag
 */
export const Span = forwardRef<HTMLSpanElement, SpanProps>(
  (props, forwardedRef) => {
    return <Text className={SPAN_CLASS_NAME} {...props} ref={forwardedRef} />
  }
)
Span.toString = () => `.${SPAN_CLASS_NAME}`

type StrikeProps = CSSProps &
  VariantProps<typeof Text> & { children?: React.ReactNode }

/**
 * Convenience export of text with the `strikethrough` tag
 */
export const Strike = forwardRef<HTMLSpanElement, StrikeProps>(
  (props, forwardedRef) => {
    return (
      <Text
        as="s"
        className={STRIKE_CLASS_NAME}
        {...props}
        ref={forwardedRef}
      />
    )
  }
)
Span.toString = () => `.${STRIKE_CLASS_NAME}`

type MonospaceProps = CSSProps &
  VariantProps<typeof Text> & {
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
        className={MONOSPACE_CLASS_NAME}
        font="monospace"
        {...props}
        ref={forwardedRef}
      />
    )
  }
)
Monospace.toString = () => `.${MONOSPACE_CLASS_NAME}`

type CaptionProps = CSSProps &
  VariantProps<typeof Text> & { children?: React.ReactNode }

/**
 * Captions styles the text for use in a caption. This remain polymorphic, so the component type can be set to `caption` or `figcaption` if required.
 */
export const Caption = forwardRef<ElementRef<typeof Text>, CaptionProps>(
  (props, forwardedRef) => {
    return (
      <Text
        size={-2}
        className={CAPTION_CLASS_NAME}
        {...props}
        ref={forwardedRef}
      />
    )
  }
)
Caption.toString = () => `.${CAPTION_CLASS_NAME}`
