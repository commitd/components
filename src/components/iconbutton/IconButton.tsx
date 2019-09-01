import * as React from "react"
import {
  compose,
  spacing,
  flexbox,
  SpacingProps,
  FlexboxProps
} from "@material-ui/system"
import MaterialIconButton, {
  IconButtonProps as MaterialIconButtonProps
} from "@material-ui/core/IconButton"
import { styled } from "@material-ui/styles"

export type IconButtonProps = MaterialIconButtonProps &
  SpacingProps &
  FlexboxProps

export const IconButton = styled(MaterialIconButton)(
  compose(
    spacing,
    flexbox
  )
)

export default IconButton as React.FC<IconButtonProps>
