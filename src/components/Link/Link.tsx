import React, { forwardRef } from 'react'
import { CSS, StitchesVariants, styled } from 'stitches.config'
import type * as Polymorphic from '@radix-ui/react-polymorphic'

/**
 * Link component
 */
export const StyledLink = styled('a', {
  color: '$primary',
  variants: {
    underline: {
      none: { textDecoration: 'none' },
      hover: {
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
          background: '$primaryContrast',
        },
      },
      always: {
        textDecoration: 'underline',
      },
    },
  },
  defaultVariants: {
    underline: 'hover',
  },
})

type LinkCSSProp = { css?: CSS }
type LinkVariants = StitchesVariants<typeof StyledLink>
type LinkOwnProps = LinkCSSProp & LinkVariants

type LinkComponent = Polymorphic.ForwardRefComponent<
  'a',
  //    | 'button'
  LinkOwnProps
>

export const Link = forwardRef((props, forwardedRef) => {
  return <StyledLink {...props} ref={forwardedRef} />
}) as LinkComponent

Link.toString = () => `.${StyledLink.className}`
