import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { styled } from '../../stitches.config'
import { ToggleStyling } from '../Toggle'

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: 'inline-flex',
  backgroundColor: 'transparent',
  borderRadius: '$default',
})

const StyledItem = styled(ToggleGroupPrimitive.Item, {
  all: 'unset',
  ...ToggleStyling,

  '&:first-child': {
    marginLeft: 0,
    borderTopLeftRadius: '$default',
    borderBottomLeftRadius: '$default',
  },
  '&:last-child': {
    borderTopRightRadius: '$default',
    borderBottomRightRadius: '$default',
  },
  defaultVariants: {
    variant: 'tertiary',
    size: 'default',
  },
})

/**
 * Toggle Group Component
 *
 * Based on [Radix Toggle Group](https://www.radix-ui.com/docs/primitives/components/toggle-group).
 */
export const ToggleGroup = StyledToggleGroup
export const ToggleGroupItem = StyledItem
