import { styled } from '../../stitches.config'

/**
 * Box component
 * <p>
 * Use the `Box` component where you might otherwise use a div.
 * It has access to our design tokens to control width, margin, padding, color etc. though the css prop.
 *
 * Some utility variants are provided for standard box behaviors.
 *
 * - `grow` for use with `flex` layout sets `flex-grow` to 1
 * - `high` adds 100% height
 * - `wide` adds 100% width
 * - `max` adds 100% height and width
 * - `fullscreen` adds 100vh height and 100% width
 */
export const Box = styled('div', {
  // Reset
  boxSizing: 'border-box',

  variants: {
    variant: {
      grow: {
        flex: 1,
      },
      high: {
        height: '100%',
      },
      wide: {
        width: '100%',
      },
      max: {
        height: '100%',
        width: '100%',
      },
      fullscreen: {
        width: '100%',
        height: '100vh',
      },
    },
  },
})
