import { styled } from '../../stitches.config'

/**
 * Container component
 *
 * Use a container to keep the content within the maxWidth set by a breakpoint.
 */
export const Container = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // Custom
  ml: 'auto',
  mr: 'auto',
  px: '$5',

  variants: {
    maxWidth: {
      sm: {
        maxWidth: 'calc($sizes$sm - $sizes$8)',
      },
      md: {
        maxWidth: 'calc($sizes$md - $sizes$9)',
      },
      lg: {
        maxWidth: 'calc($sizes$lg - $sizes$10)',
      },
      xl: {
        maxWidth: 'calc($sizes$xl - $sizes$11)',
      },
      responsive: {
        '@sm': {
          maxWidth: 'calc($sizes$sm - $sizes$8)',
        },
        '@md': {
          maxWidth: 'calc($sizes$md - $sizes$9)',
        },
        '@lg': {
          maxWidth: 'calc($sizes$lg - $sizes$10)',
        },
        '@xl': {
          maxWidth: 'calc($sizes$xl - $sizes$11)',
        },
      },
    },
  },
  defaultVariants: {
    maxWidth: 'lg',
  },
})
