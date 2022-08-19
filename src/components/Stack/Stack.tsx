import { styled } from '../../stitches.config'
import { spacing } from '../../utils/layout'
import { Box } from '../Box'

/**
 * `Stack` is a layout component that stacks children is an equally spaced column.
 *
 * It is implemented with `flex` so supports other flexbox controls provided by css
 */
export const Stack = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  variants: {
    spacing,
    align: {
      left: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      right: {
        alignItems: 'flex-end',
      },
    },
  },
  defaultVariants: {
    spacing: 'default',
  },
})
