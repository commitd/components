import { RecipeVariantProps, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { Root } from '@radix-ui/react-separator'
import { ComponentProps, ElementRef, forwardRef } from 'react'

const dividerRoot = cva({
  base: {
    border: 'none',
    margin: 0,
    flexShrink: 0,
    backgroundColor: '$grey8',
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
const StyledDivider = styled(Root, dividerRoot)

type DividerVariants = RecipeVariantProps<typeof dividerRoot>
type DividerProps = ComponentProps<typeof Root> & DividerVariants

/**
 * Use a divider to separate different groups of content.
 *
 * By default it uses a `div` but the `as` props can be used to assign it to the correct html tag for the
 * use case, such as a `hr` for thematic break in text.
 *
 * Based on [Radix Separator](https://radix-ui.com/primitives/docs/components/separator).
 */
export const Divider = forwardRef<
  ElementRef<typeof StyledDivider>,
  DividerProps
>((props, forwardedRef) => <StyledDivider {...props} ref={forwardedRef} />)
Divider.displayName = 'Divider'
