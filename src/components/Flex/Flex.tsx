import { styled } from 'stitches.config'

/**
 * Flex component
 * <p>
 * Use the `Flex` component to layout the children using [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
 */
export const Flex = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
})

export const Row = styled(Flex, {
  flexDirection: 'row',
})

export const Column = styled(Flex, {
  flexDirection: 'column',
})
