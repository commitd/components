import React from 'react'
import MaterialDivider, {
  DividerProps as MaterialDividerProps
} from '@material-ui/core/Divider'
import { styled } from '@material-ui/styles'
import { style, SpacingProps, spacing, compose } from '@material-ui/system'

export type DividerProps = MaterialDividerProps &
  SpacingProps & {
    /* the color of the divider from the theme's palette */
    color?: string
  }

export const color = style({
  prop: 'color',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
})

export const Divider = styled<React.ComponentType<DividerProps>>(
  MaterialDivider
)(
  compose(
    color,
    spacing
  )
)
