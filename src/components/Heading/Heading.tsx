import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { cva, RecipeVariantProps } from '../../../styled-system/css'
import { styled } from '../../../styled-system/jsx'
import { Text } from '../Text'
import { text } from '../Text/Text'

const DEFAULT_TAG = 'h3'

const heading = cva({
  ...text.config,
  variants: {
    ...text.config.variants,
    variant: {
      h1: { fontSize: '$7' },
      h2: { fontSize: '$6' },
      h3: { fontSize: '$5' },
      h4: { fontSize: '$4' },
      h5: { fontSize: '$3' },
      h6: { fontSize: '$2' },
    },
  },
  defaultVariants: {
    variant: 'h3',
    weight: 'bold',
  },
})

const StyledHeading = styled(Text, heading)

type HeadingVariants = RecipeVariantProps<typeof heading>
type HeadingProps = ComponentProps<typeof Text> & HeadingVariants

export const Heading = forwardRef<ElementRef<typeof DEFAULT_TAG>, HeadingProps>(
  ({ variant = DEFAULT_TAG, as, ...props }, forwardedRef) => {
    return (
      <StyledHeading
        as={as ?? variant}
        variant={variant}
        {...props}
        ref={forwardedRef}
      />
    )
  }
)
Heading.toString = () => `.Heading`
