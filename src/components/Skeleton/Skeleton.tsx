import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled, keyframes } from '../../stitches.config'

const DEFAULT_TAG = 'div'

export const ripple = keyframes({
  '0%': {
    backgroundPosition: '-200px 0',
  },
  '100%': {
    backgroundPosition: 'calc(200px + 100%) 0',
  },
})

export const pulse = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: '100%' },
})

/**
 * StyledSkeleton base component
 */
export const Skeleton = styled(DEFAULT_TAG, {
  backgroundColor: '$grey4',
  position: 'relative',
  overflow: 'hidden',

  '&::after': {
    animationName: `${pulse}`,
    animationDuration: '500ms',
    animationDirection: 'alternate',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    backgroundColor: '$slate6',
    borderRadius: 'inherit',
    bottom: 0,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  variants: {
    variant: {
      avatar: {
        borderRadius: '$round',
        size: '$7',
      },
      text: {
        height: '$1',
      },
      title: {
        height: '$5',
      },
      heading: {
        height: '$3',
      },
      button: {
        borderRadius: '$default',
        height: '$6',
        width: '$8',
      },
    },
    size: {
      small: {},
      default: {},
      large: {},
    },
  },
  compoundVariants: [
    {
      variant: 'button',
      size: 'small',
      css: {
        height: '$5',
        width: '$7',
      },
    },
    {
      variant: 'button',
      size: 'large',
      css: {
        height: '$7',
        width: '$9',
      },
    },
  ],
  defaultVariants: {
    variant: 'text',
  },
})
