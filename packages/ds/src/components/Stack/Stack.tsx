import { RecipeVariantProps, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import {
  BoxVariants,
  CComponent,
  SpacingVariants,
  component,
  spacing,
} from '../../utils'
import { Box } from '../Box/Box'

const stack = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  variants: {
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
})

const Base = styled(styled(Box, spacing), stack)
type StackProps = RecipeVariantProps<typeof stack> &
  SpacingVariants &
  BoxVariants

/**
 * `Stack` is a layout component that stacks children is an equally spaced column.
 *
 * It is implemented with `flex` so supports other flexbox controls provided by css
 */
export const Stack = component(Base, 'c-stack') as CComponent<'div', StackProps>
Stack.displayName = 'Stack'
