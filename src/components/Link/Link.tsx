import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { AsProps, CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'

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

  '&:hover': {
    cursor: 'pointer',
  },

  variants: {
    variant: {
      clear: {
        '& .gatsby-resp-image-background-image': {
          display: 'none !important',
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

type LinkVariants = VariantProps<typeof StyledLink>
type AProps = ComponentProps<typeof DEFAULT_TAG>
type LinkProps = Omit<LinkVariants, 'external'> & AProps & CSSProps & AsProps

export const Link = forwardRef<ElementRef<typeof StyledLink>, LinkProps>(
  ({ href, ...props }, forwardedRef) => {
    return (
      <StyledLink
        href={href}
        external={isExternal(href)}
        {...props}
        ref={forwardedRef}
      />
    )
  }
)
Link.toString = () => `.${StyledLink.className}`
