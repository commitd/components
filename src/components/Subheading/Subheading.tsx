import React, { ElementRef, forwardRef } from 'react'
import type {
  As,
  AsProps,
  ChildProps,
  CSSProps,
  VariantProps,
} from '../../stitches.config'
import { styled } from '../../stitches.config'
import { Text } from '../Text'

const DEFAULT_TAG = 'h3'

const StyledSubheading = styled(Text, {
  fontWight: '$regular',
  color: '$textSecondary',
  marginTop: '$1',
  marginBottom: '$4',
  variants: {
    variant: {
      h1: { fontSize: '$3' },
      h2: { fontSize: '$3' },
      h3: { fontSize: '$2' },
      h4: { fontSize: '$2' },
      h5: { fontSize: '$1' },
      h6: { fontSize: '$1' },
    },
  },
})

type TextVariants = VariantProps<typeof Text>
type SubheadingVariants = VariantProps<typeof StyledSubheading>
type SubheadingProps = CSSProps &
  AsProps &
  ChildProps &
  SubheadingVariants &
  TextVariants

export const Subheading = forwardRef<
  ElementRef<typeof DEFAULT_TAG>,
  SubheadingProps
>(({ variant = DEFAULT_TAG, as = 'div', ...props }, forwardedRef) => {
  return (
    <StyledSubheading
      as={as ?? (variant as As)}
      variant={variant}
      role="doc-subtitle"
      {...props}
      ref={forwardedRef}
    />
  )
})
Subheading.toString = () => `.${StyledSubheading.className}`
