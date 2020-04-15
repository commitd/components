import { ComponentType } from 'react'
import MaterialChip, {
  ChipProps as MaterialChipProps,
} from '@material-ui/core/Chip'
import { styled } from '@material-ui/styles'
import {
  compose,
  spacing,
  flexbox,
  SpacingProps,
  FlexboxProps,
} from '@material-ui/system'

export type ChipProps = MaterialChipProps & SpacingProps & FlexboxProps

export const Chip: ComponentType<ChipProps> = styled(MaterialChip)(
  compose(spacing, flexbox)
)
