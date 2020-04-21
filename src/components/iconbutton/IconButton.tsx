import React from 'react'
import {
  compose,
  spacing,
  flexbox,
  SpacingProps,
  FlexboxProps,
} from '@material-ui/system'
import MaterialIconButton, {
  IconButtonProps as MaterialIconButtonProps,
} from '@material-ui/core/IconButton'
import { styled } from '@material-ui/styles'
import { withNoOpener, AProps } from '../../internal'

export interface IconButtonProps
  extends MaterialIconButtonProps,
    SpacingProps,
    FlexboxProps,
    AProps {}

export const IconButton: React.ComponentType<IconButtonProps> = styled(
  withNoOpener(MaterialIconButton)
)(compose(spacing, flexbox))
