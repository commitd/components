import { styled } from '@committed/ss/jsx'
import { CComponentProps, component, fixedForwardRef } from '../../utils'
import { TextVariants, text } from '../Text/Text'

const DEFAULT_TAG = 'h3'
type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
const headingSizesVariants: Record<
  Headings,
  NonNullable<TextVariants>['size']
> = {
  h1: '$7',
  h2: '$6',
  h3: '$5',
  h4: '$4',
  h5: '$3',
  h6: '$2',
}

const BaseHeading = component(DEFAULT_TAG, 'c-heading')
const StyledHeading = styled(BaseHeading, text)

export const Heading = fixedForwardRef<
  typeof DEFAULT_TAG,
  CComponentProps &
    TextVariants & { as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }
>(({ as: Variant = DEFAULT_TAG, children, ...props }, forwardedRef) => {
  return (
    <StyledHeading
      weight="bold"
      size={headingSizesVariants[Variant]}
      {...props}
      asChild
      ref={forwardedRef}
    >
      <Variant>{children}</Variant>
    </StyledHeading>
  )
})
Heading.displayName = 'Heading'
