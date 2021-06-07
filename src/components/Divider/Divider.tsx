import React, { forwardRef } from 'react'
import { styled, StitchesVariants, CSS } from 'stitches.config'
import { Root } from '@radix-ui/react-separator'
import type * as Polymorphic from '@radix-ui/react-polymorphic'

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
    width: '90%',
  },

  '&[data-orientation="vertical"]': {
    width: '1px',
    height: 'auto',
    mx: '$2',
  },
})

type ButtonCSSProp = { css?: CSS }
type DividerVariants = StitchesVariants<typeof StyledDivider>
type DividerOwnProps = Polymorphic.OwnProps<typeof Root> &
  ButtonCSSProp &
  DividerVariants

type DividerComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Root>,
  DividerOwnProps
>

/**
 * Use a divider to separate different groups of content.
 *
 * By default it uses a `div` but the `as` props can be used to assign it to the correct html tag for the
 * use case, such as a `hr` for thematic break in text.
 *
 * Based on [Radix Separator](https://radix-ui.com/primitives/docs/components/separator).
 */
export const Divider = forwardRef((props, forwardedRef) => (
  <StyledDivider {...props} ref={forwardedRef} />
)) as DividerComponent
