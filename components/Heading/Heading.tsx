import { RecipeVariantProps, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Text } from '../Text'

const DEFAULT_TAG = 'h3'

const heading = cva({
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
  defaultVariants: {
    variant: 'h3',
  },
})

const StyledHeading = styled(Text, heading)

type HeadingVariants = RecipeVariantProps<typeof heading>
type HeadingProps = ComponentProps<typeof Text> & HeadingVariants

export const Heading = forwardRef<ElementRef<typeof DEFAULT_TAG>, HeadingProps>(
  ({ className, variant = DEFAULT_TAG, as, ...props }, forwardedRef) => {
    return (
      <StyledHeading
        weight="bold"
        className={cx('c-heading', className)}
        as={as ?? variant}
        variant={variant}
        {...props}
        ref={forwardedRef}
      />
    )
  }
)
Heading.displayName = 'Heading'
