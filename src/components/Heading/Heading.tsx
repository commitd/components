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

const StyledHeading = styled(Text, {
  fontWight: '$bold',
  variants: {
    variant: {
      h1: { fontSize: '$7' },
      h2: { fontSize: '$6' },
      h3: { fontSize: '$5' },
      h4: { fontSize: '$4' },
      h5: { fontSize: '$3' },
      h6: { fontSize: '$2' },
    },
  },
})

type TextVariants = VariantProps<typeof Text>
type HeadingVariants = VariantProps<typeof StyledHeading>
type HeadingProps = CSSProps &
  AsProps &
  ChildProps &
  HeadingVariants &
  TextVariants

export const Heading = forwardRef<ElementRef<typeof DEFAULT_TAG>, HeadingProps>(
  ({ variant = DEFAULT_TAG, as, ...props }, forwardedRef) => {
    return (
      <StyledHeading
        as={as ?? (variant as As)}
        variant={variant}
        {...props}
        ref={forwardedRef}
      />
    )
  }
)
Heading.toString = () => `.${StyledHeading.className}`
