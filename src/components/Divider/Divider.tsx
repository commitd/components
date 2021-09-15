import { Root } from '@radix-ui/react-separator'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { AsProps, CSSProps } from '../../stitches.config'
import { styled, VariantProps } from '../../stitches.config'

const StyledDivider = styled(Root, {
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

type DividerVariants = VariantProps<typeof StyledDivider>
type DividerProps = ComponentProps<typeof Root> &
  CSSProps &
  AsProps &
  DividerVariants

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
Divider.toString = () => `.${StyledDivider.className}`
