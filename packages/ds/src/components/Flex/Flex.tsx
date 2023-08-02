import { css, cva, RecipeVariantProps } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { BoxVariants, CComponent, component } from '../../utils'
import { Box } from '../Box'

const flex = cva({
  base: {
    display: 'flex',
  },
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

const Base = styled(Box, flex)
type FlexVariants = RecipeVariantProps<typeof flex> & BoxVariants

/**
 * Flex component
 * <p>
 * Use the `Flex` component to layout the children using [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
 *
 * Extends from `Box`, so has the same utility variants and in addition:
 *
 * - gap: Adds standard gap between items (gap: '$3')
 * - wrap: Enables wrapping (flexWrap: 'wrap')
 * - spaced: Makes spaced between (justifyContent: 'spaced-between')
 * - centered: Makes items centered: ((justifyContent: 'center', (align-items: 'center'))
 */
export const Flex = component(Base, 'c-flex') as CComponent<'div', FlexVariants>
Flex.displayName = 'Flex'

export const Row = component(
  Base,
  'c-row',
  css({
    flexDirection: 'row',
  }),
) as CComponent<'div', FlexVariants>
Row.displayName = 'Row'

export const Column = component(
  Base,
  'c-column',
  css({
    flexDirection: 'column',
  }),
) as CComponent<'div', FlexVariants>
Column.displayName = 'Column'
