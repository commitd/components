import * as React from 'react'
import MaterialBox, {
  BoxProps as MaterialBoxProps
} from '@material-ui/core/Box'

export type BoxRef = HTMLDivElement

export type BoxProps = MaterialBoxProps & {
  /** The background colour */
  bg?: string
}

export const Box = React.forwardRef<BoxRef, BoxProps>((props, ref) => (
  // @ts-ignore due to ref forward
  <MaterialBox
    {...props}
    bgcolor={props.bg ? props.bg : props.bgcolor}
    ref={ref}
  />
))
