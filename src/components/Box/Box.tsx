import { styled } from 'stitches.config'

/**
 * Box component
 * <p>
 * Use the `Box` component where you might otherwise use a div.
 * It has access to our design tokens to control width, margin, padding, color etc. though the css prop.
 *
 */
export const Box = styled('div', {
  // Reset
  boxSizing: 'border-box',
})
