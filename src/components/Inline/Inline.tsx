import { styled } from '../../stitches.config'
import { spacing } from '../../utils/layout'
import { Box } from '../Box'

/**
 * `Inline` is a layout component that puts children is an equally spaced row.
 *
 * It is implemented with `flex` so supports other flexbox controls provided by css
 */
export const Inline = styled(Box, {
  display: 'flex',
  flexDirection: 'row',
  variants: {
    spacing,
    align: {
      left: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      right: {
        justifyContent: 'flex-end',
      },
    },
  },
  defaultVariants: {
    spacing: 'default',
    align: 'left',
  },
})
