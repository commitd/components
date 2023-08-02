import { styled } from '@committed/ss/jsx'
import { BoxVariants, CComponent, box, component } from '../../utils'

const Base = component('div', 'c-box')
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
export const Box: CComponent<'div', BoxVariants> = styled(Base, box)
Box.displayName = 'Box'
