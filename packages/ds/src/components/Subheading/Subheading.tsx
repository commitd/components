import { css } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'

import {
  CComponentProps,
  Headings,
  component,
  fixedForwardRef,
} from '../../utils'
import { TextVariants, text } from '../Text/Text'

const DEFAULT_TAG = 'div' as const

const sizes: Record<string, NonNullable<TextVariants>['size']> = {
  h1: '$3',
  h2: '$3',
  h3: '$2',
  h4: '$2',
  h5: '$1',
  h6: '$1',
}

const Base = component(
  DEFAULT_TAG,
  'c-subheading',
  css({
    fontWeight: '$regular',
    color: '$text.secondary',
    marginTop: '$1',
    marginBottom: '$4',
  }),
)
const Styled = styled(Base, text)

export const Subheading = fixedForwardRef<
  typeof DEFAULT_TAG,
  CComponentProps & TextVariants & { variant?: Headings; as?: Headings }
>(
  (
    { variant = 'h3', as: Variant = DEFAULT_TAG, children, ...props },
    forwardedRef,
  ) => {
    return (
      <Styled
        size={sizes[variant] ?? '$3'}
        role="doc-subtitle"
        {...props}
        asChild
        ref={forwardedRef}
      >
        <Variant>{children}</Variant>
      </Styled>
    )
  },
)
Subheading.displayName = 'Subheading'
