import { styled } from '../../stitches.config'
import { Box } from '../Box'

/**
 * Flex component
 * <p>
 * Use the `Flex` component to layout the children using [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
 *
 * Extends from `Box`, so has the same utility valiants and in addition:
 *
 * - gap: Adds standard gap between items (gap: '$3')
 * - wrap: Enables wrapping (flexWrap: 'wrap')
 * - spaced: Makes spaced between (justifyContent: 'spaced-between')
 * - centered: Makes items centered: ((justifyContent: 'center', (align-items: 'center'))
 */
export const Flex = styled(Box, {
  display: 'flex',

  variants: {
    gap: {
      true: {
        gap: '$3',
      },
    },
    spaced: {
      true: {
        justifyContent: 'space-between',
      },
    },
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
    centered: {
      true: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
})

export const Row = styled(Flex, {
  flexDirection: 'row',
})

export const Column = styled(Flex, {
  flexDirection: 'column',
})
