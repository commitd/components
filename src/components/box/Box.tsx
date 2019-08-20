import * as React from "react"
import MaterialBox, {
  BoxProps as MaterialBoxProps
} from "@material-ui/core/Box"

export type BoxProps = MaterialBoxProps & {
  /** The background colour */
  bg?: string
}

export const Box: React.FC<BoxProps> = (props: BoxProps) => (
  <MaterialBox {...props} bgcolor={props.bg ? props.bg : props.bgcolor} />
)
Box.displayName = "Box"

export default Box
