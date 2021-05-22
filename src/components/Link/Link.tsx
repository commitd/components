import React, { forwardRef, ComponentProps } from 'react'
import { CSS, StitchesVariants, styled } from 'stitches.config'
import type * as Polymorphic from '@radix-ui/react-polymorphic'

const DEFAULT_TAG = 'a'

const isExternal = (url: string | undefined): boolean =>
  !!(url && url.startsWith('http'))

/**
 * Link component
 */
export const StyledLink = styled(DEFAULT_TAG, {
  $$linkBackground: '$colors$selection',
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: '$regular',
  fontVariantNumeric: 'tabular-nums',
  display: 'inline',

  color: 'inherit',
  textDecoration: 'none',

  variants: {
    variant: {
      clear: {
        '& .gatsby-resp-image-background-image': {
          display: 'none !important',
        },
        '&:hover': {
          cursor: 'pointer',
        },
      },
      default: {
        textDecoration: 'underline',
      },
      styled: {
        transition: 'background 100ms ease-out',
        fontWeight: 'bold',
        background:
          'linear-gradient($$linkBackground, $$linkBackground) left bottom transparent no-repeat',
        backgroundSize: '100% 2px',
        '&:hover': {
          backgroundSize: '100% 100%',
        },
      },
    },
    external: {
      true: {
        $$linkBackground: '$colors$errorLowlight',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type LinkCSSProp = { css?: CSS }
type LinkVariants = ComponentProps<typeof StyledLink>
type LinkVariants = StitchesVariants<typeof StyledLink>
type LinkOwnProps = LinkCSSProp & Omit<LinkVariants, 'eternal'>

type LinkComponent = Polymorphic.ForwardRefComponent<DEFAULT_TAG, LinkOwnProps>

export const Link = forwardRef(({ href, ...props }, forwardedRef) => {
  return (
    <StyledLink
      href={href}
      external={isExternal(href)}
      {...props}
      ref={forwardedRef}
    />
  )
}) as LinkComponent

Link.toString = () => `.${StyledLink.className}`
