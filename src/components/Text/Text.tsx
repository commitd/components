import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef, PropsWithChildren } from 'react'
import { CSS, StitchesVariants, styled } from 'stitches.config'

const DEFAULT_TAG = 'span'

export const StyledText = styled(DEFAULT_TAG, {
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

type TextCSSProp = { css?: CSS }
type TextVariants = StitchesVariants<typeof StyledText>
type TextOwnProps = TextCSSProp & TextVariants

type TextComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG | 'a',
  TextOwnProps
>

/**
 * Text component covers all text use in the components.
 *
 * Prefer styling using the supplied props options, but the standard css is also available if required.
 *
 * A set of pre-configured components are also supplied for common use cases. These all use the same underlying Text component.
 */
export const Text = forwardRef((props, forwardedRef) => {
  return <StyledText {...props} ref={forwardedRef} />
}) as TextComponent

Text.toString = () => `.${StyledText.className}`

export const Paragraph = forwardRef<
  HTMLParagraphElement,
  PropsWithChildren<TextOwnProps>
>(({ css, ...props }, forwardedRef) => {
  return (
    <Text
      css={{ display: 'block', mb: '$3', ...css } as CSS}
      as="p"
      {...props}
      ref={forwardedRef}
    />
  )
})

/**
 * Convenience export of text with the `span` tag
 */
export const Span = forwardRef<
  HTMLSpanElement,
  PropsWithChildren<TextOwnProps>
>((props, forwardedRef) => {
  return <Text {...props} ref={forwardedRef} />
})

/**
 * Convenience export of text with the `strikethrough` tag
 */
export const Strike = forwardRef<
  HTMLSpanElement,
  PropsWithChildren<TextOwnProps>
>((props, forwardedRef) => {
  return <Text as="s" {...props} ref={forwardedRef} />
})

/**
 * Convenience export of text with the monospace font and `pre` tag
 */
export const Monospace = forwardRef<
  HTMLPreElement,
  PropsWithChildren<TextOwnProps>
>((props, forwardedRef) => {
  return <Text as="pre" font="monospace" {...props} ref={forwardedRef} />
})

type CaptionComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  TextOwnProps
>

/**
 * Captions styles the text for use in a caption. This remain polymorphic, so the component type can be set to `caption` or `figcaption` if required.
 */
export const Caption = forwardRef((props, forwardedRef) => {
  return <Text size={-2} {...props} ref={forwardedRef} />
}) as CaptionComponent
