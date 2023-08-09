import { cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { Slot } from '@radix-ui/react-slot'
import React, { ElementRef, forwardRef } from 'react'
import { AsChildProps } from '../../utils'

const DEFAULT_TAG = 'a' as const

/**
 * Can be used to test the href to determine if it is external to the application.
 *
 * Used inside `Link` but can be used separately to create custom links.
 */
export function isExternalUrl(url: string | undefined): boolean {
  return !!(
    url &&
    /^((https?:|s?ftp:|file:\/|chrome:)?\/\/|mailto:|tel:)/.test(
      url.toLowerCase(),
    )
  )
}

type InternalLinkProps = React.ComponentPropsWithRef<typeof DEFAULT_TAG> &
  AsChildProps

const InternalLink: React.FC<InternalLinkProps> = forwardRef(
  ({ asChild, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot : DEFAULT_TAG
    return <Comp {...props} ref={forwardedRef} />
  },
)

/**
 * Used to provide link props derived from the href
 *
 * Used inside `Link` but can be used separately to create custom links.
 * */
export function linkProps(href: string | undefined): {
  href: string | undefined
  target?: string
  rel?: string
  external: boolean
} {
  return isExternalUrl(href)
    ? {
        href,
        target: '_blank',
        rel: 'noopener noreferrer',
        external: true,
      }
    : { href, external: false }
}

/**
 * Used to style `Link` component
 *
 * Can be used separately to create custom links.
 * */
export const link = cva({
  base: {
    '--linkBackground': 'token(colors.$selection)',
    // Reset
    lineHeight: '1',
    margin: '0',
    fontWeight: '$regular',
    fontVariantNumeric: 'tabular-nums',
    display: 'inline',

    color: 'inherit',
    textDecoration: 'none',

    _hover: {
      cursor: 'pointer',
    },
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
      hovered: {
        textDecoration: 'none',
        _hover: {
          textDecoration: 'revert',
        },
      },
      styled: {
        _motionReduce: { transition: 'none' },
        _motionSafe: {
          transition: 'background 100ms ease-out',
        },
        fontWeight: 'bold',
        background:
          'linear-gradient(var(--linkBackground), var(--linkBackground)) left bottom transparent no-repeat',
        backgroundSize: '100% 2px',
        _hover: {
          backgroundSize: '100% 100%',
        },
      },
    },
    external: {
      true: {
        '--linkBackground': 'token(colors.$error.3)',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export const StyledLink = styled(InternalLink, link)

// This doesn't work as expected
// type AllLinkVariants = RecipeVariantProps<typeof link>
//type LinkVariants = Pick<AllLinkVariants, 'variant'>
type LinkVariants = {
  variant?: 'clear' | 'default' | 'hovered' | 'styled' | undefined
}
export type LinkProps = LinkVariants & InternalLinkProps & AsChildProps

/**
 * Link component
 *
 * Has standard anchor tag props. Uses the radix style `asChild` prop to render as the child component.
 * This can be used to wrap other link providers, say for routing. Other the styles and utils are also available to build your own: `linkStyles`, `linkProps` `isExternalUrl`.
 */
export const Link = forwardRef<ElementRef<typeof StyledLink>, LinkProps>(
  ({ href, ...props }, forwardedRef) => {
    return <StyledLink {...linkProps(href)} {...props} ref={forwardedRef} />
  },
)
Link.displayName = 'Link'
