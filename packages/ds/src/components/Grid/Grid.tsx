import { cva, RecipeVariantProps } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { BoxVariants, component } from '../../utils'

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

const Base = component('div', 'c-grid')
// const Base = styled(Box, grid)

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
export const Grid = styled(Base, grid) //as PolyCComponent<'div', GridProps>
Grid.displayName = 'Grid'
