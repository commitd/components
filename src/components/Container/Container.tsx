import { cva } from '../../../styled-system/css'
import { styled } from '../../../styled-system/jsx'

/**
 * Container component
 *
 * Use a container to keep the content within the maxWidth set by a breakpoint.
 */
export const Container = styled(
  'div',
  cva({
    base: {
      boxSizing: 'border-box',
      flexShrink: 0,

      // Custom
      ml: 'auto',
      mr: 'auto',
      px: 5,
    },
    variants: {
      maxWidth: {
        sm: {
          maxWidth: 'calc(token(sizes.sm) - token(sizes.8))',
        },
        md: {
          maxWidth: 'calc(token(sizes.md) - token(sizes.9))',
        },
        lg: {
          maxWidth: 'calc(token(sizes.lg) - token(sizes.10))',
        },
        xl: {
          maxWidth: 'calc(token(sizes.xl) - token(sizes.11))',
        },
        responsive: {
          sm: {
            maxWidth: 'calc(token(sizes.sm) - token(sizes.8))',
          },
          md: {
            maxWidth: 'calc(token(sizes.md) - token(sizes.9))',
          },
          lg: {
            maxWidth: 'calc(token(sizes.lg) - token(sizes.10))',
          },
          xl: {
            maxWidth: 'calc(token(sizes.xl) - token(sizes.11))',
          },
        },
      },
    },
    defaultVariants: {
      maxWidth: 'lg',
    },
  })
)
