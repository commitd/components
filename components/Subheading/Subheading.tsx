import { RecipeVariantProps, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Text } from '../Text'

const DEFAULT_TAG = 'h3'

const subheading = cva({
  base: {
    fontWeight: '$regular',
    color: '$textSecondary',
    marginTop: '$1',
    marginBottom: '$4',
  },
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

const StyledSubheading = styled(Text, subheading)

type SubheadingVariants = RecipeVariantProps<typeof subheading>
type SubheadingProps = ComponentProps<typeof Text> & SubheadingVariants

export const Subheading = forwardRef<
  ElementRef<typeof DEFAULT_TAG>,
  SubheadingProps
>(({ className, variant = DEFAULT_TAG, as, ...props }, forwardedRef) => {
  return (
    <StyledSubheading
      className={cx('c-subheading', className)}
      as={as ?? variant}
      variant={variant}
      role="doc-subtitle"
      {...props}
      ref={forwardedRef}
    />
  )
})
Subheading.displayName = 'Subheading'
