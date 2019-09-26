import * as React from 'react'
import MaterialAvatar, {
  AvatarProps as MaterialAvatarProps
} from '@material-ui/core/Avatar'
import { styled } from '@material-ui/styles'
import {
  style,
  compose,
  spacing,
  flexbox,
  SpacingProps,
  FlexboxProps
} from '@material-ui/system'
import { fractionToPercent } from '../../util'

export const textColor = style({
  prop: 'color',
  themeKey: 'palette'
})

export const bgcolor = style({
  prop: 'bg',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
})

export const width = style({
  prop: 'size',
  cssProperty: 'width',
  transform: fractionToPercent
})

export const height = style({
  prop: 'size',
  cssProperty: 'height',
  transform: fractionToPercent
})

export type AvatarProps = MaterialAvatarProps &
  SpacingProps &
  FlexboxProps & {
    /**
     * The background color
     */
    bg?: string
    /**
     * The color of the icon or text
     */
    color?: string
    /**
     * The size (width and height) of the avatar, e.g. (24px)
     */
    size?: string
  }

export const Avatar = styled<React.ComponentType<AvatarProps>>(MaterialAvatar)(
  compose(
    spacing,
    flexbox,
    textColor,
    bgcolor,
    width,
    height
  )
)
