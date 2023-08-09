import { cva, RecipeVariantProps } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { BoxVariants, component, PolyCComponent } from '../../utils'
import { Box } from '../Box/Box'

const grid = cva({
  base: {
    display: 'grid',
  },
  variants: {
    gap: {
      true: {
        gap: '$3',
      },
    },
  },
})

const Base = styled(Box, grid)

type GridProps = RecipeVariantProps<typeof grid> & BoxVariants

/**
 * Grid component
 * <p>
 * Use the `Grid` component to layout the children using [grid](https://css-tricks.com/snippets/css/complete-guide-grid/).
 *
 * Extends from `Box`, so has the same utility variants and in addition:
 *
 * - gap: Adds standard gap between items (gap: '$3')
 */
export const Grid = component(Base, 'c-grid') as PolyCComponent<
  'div',
  GridProps
>
Grid.displayName = 'Grid'
