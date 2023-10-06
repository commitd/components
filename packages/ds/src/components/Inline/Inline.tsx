import { RecipeVariantProps, cva, styled } from '@committed/ss'
import {
  BoxVariants,
  PolyCComponent,
  SpacingVariants,
  component,
  spacing,
} from '../../utils'
import { Box } from '../Box/Box'

const inline = cva({
  base: {
    display: 'flex',
    flexDirection: 'row',
  },
  variants: {
    align: {
      left: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      right: {
        justifyContent: 'flex-end',
      },
    },
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
  },
})

const Base = styled(styled(Box, spacing), inline)

type InlineProps = RecipeVariantProps<typeof inline> &
  SpacingVariants &
  BoxVariants

/**
 * `Inline` is a layout component that puts children is an equally spaced row.
 *
 * It is implemented with `flex` so supports other flexbox controls provided by css
 */
export const Inline = component(Base, 'c-inline') as PolyCComponent<
  'div',
  InlineProps
>
Inline.displayName = 'Inline'
