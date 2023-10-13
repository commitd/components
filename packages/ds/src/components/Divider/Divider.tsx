'use client'

import { RecipeVariantProps, cva, styled } from '@committed/ds-ss'
import { Root } from '@radix-ui/react-separator'
import { PolyCComponent, component } from '../../utils'

const dividerRoot = cva({
  base: {
    border: 'none',
    margin: 0,
    flexShrink: 0,
    backgroundColor: '$neutral.8',
    cursor: 'default',

    '&:not([data-orientation=vertical])': {
      height: '1px',
      mx: 'auto',
      my: '$4',
    },

    '&[data-orientation="vertical"]': {
      width: '1px',
      my: 'auto',
      mx: '$2',
    },
  },

  variants: {
    size: {
      full: {
        '&:not([data-orientation=vertical])': {
          width: '100%',
        },
        '&[data-orientation="vertical"]': {
          height: '100%',
        },
      },
      most: {
        '&:not([data-orientation=vertical])': {
          width: '90%',
        },
        '&[data-orientation="vertical"]': {
          height: '90%',
        },
      },
      medium: {
        '&:not([data-orientation=vertical])': {
          width: '$12',
        },
        '&[data-orientation="vertical"]': {
          height: '$12',
        },
      },
      small: {
        '&:not([data-orientation=vertical])': {
          width: '$4',
        },
        '&[data-orientation="vertical"]': {
          height: '$4',
        },
      },
    },
  },
  defaultVariants: {
    size: 'full',
  },
})
const Styled = styled(Root, dividerRoot)

type Variants = RecipeVariantProps<typeof dividerRoot>

/**
 * Use a divider to separate different groups of content.
 *
 * By default it uses a `div` but the `asChild` prop can be used to assign it to the correct html tag for the
 * use case, such as a `hr` for thematic break in text by supplying the child component.
 *
 * Based on [Radix Separator](https://radix-ui.com/primitives/docs/components/separator).
 */
export const Divider: PolyCComponent<typeof Root, Variants> = component(
  Styled,
  'c-divider',
)
Divider.displayName = 'Divider'
