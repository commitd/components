import { styled } from '../../stitches.config'
import { Box } from '../Box'

/**
 * Flex component
 * <p>
 * Use the `Flex` component to layout the children using [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
 *
 * Extends from `Box`, so has the same utility valiants.
 */
export const Flex = styled(Box, {
  display: 'flex',
})

export const Row = styled(Flex, {
  flexDirection: 'row',
})

export const Column = styled(Flex, {
  flexDirection: 'column',
})
