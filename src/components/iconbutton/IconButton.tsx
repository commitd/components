import { FC, ComponentType, HTMLAttributes } from 'react'
import {
  compose,
  spacing,
  flexbox,
  SpacingProps,
  FlexboxProps
} from '@material-ui/system'
import MaterialIconButton, {
  IconButtonProps as MaterialIconButtonProps
} from '@material-ui/core/IconButton'
import { styled } from '@material-ui/styles'
import { withNoOpener, AProps } from '../internal'

export interface IconButtonProps
  extends MaterialIconButtonProps,
    SpacingProps,
    FlexboxProps,
    AProps {}

export const IconButton: ComponentType<IconButtonProps> = styled(
  withNoOpener(MaterialIconButton)
)(
  compose(
    spacing,
    flexbox
  )
)

// For documentation only
export type IconButtonDocsProps = Omit<
  IconButtonProps,
  keyof (SpacingProps &
    FlexboxProps &
    Omit<HTMLAttributes<HTMLDivElement>, 'color'>)
>

export const IconButtonDocs: FC<IconButtonDocsProps> = () => null
