import { styled } from '@committed/ds-ss'
import { ElementType } from 'react'
import {
  CComponentProps,
  Headings,
  component,
  forwardRefExtend,
} from '../../utils'
import { TextVariants, text } from '../Text/Text'

const DEFAULT_TAG = 'h3'

const sizes: Record<Headings, NonNullable<TextVariants>['size']> = {
  h1: '$7',
  h2: '$6',
  h3: '$5',
  h4: '$4',
  h5: '$3',
  h6: '$2',
}

const Base = component(DEFAULT_TAG, 'c-heading')
const Styled = styled(Base, text)

export const Heading = forwardRefExtend<
  typeof DEFAULT_TAG,
  CComponentProps &
    TextVariants & { variant?: Headings; as?: Headings | ElementType }
>(({ variant = DEFAULT_TAG, as: asProp, children, ...props }, forwardedRef) => {
  const Variant = asProp ?? variant
  return (
    <Styled
      weight="bold"
      size={sizes[variant]}
      {...props}
      asChild
      ref={forwardedRef}
    >
      <Variant>{children}</Variant>
    </Styled>
  )
})
Heading.displayName = 'Heading'
