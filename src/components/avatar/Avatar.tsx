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

function transform(value: number) {
  return value <= 1 ? ''.concat(String(value * 100), '%') : value
}

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
  transform
})

export const height = style({
  prop: 'size',
  cssProperty: 'height',
  transform
})

export type AvatarProps = MaterialAvatarProps &
  SpacingProps &
  FlexboxProps & {
    /* the background color */
    bg: string
  }

export const Avatar = styled(MaterialAvatar)(
  compose(
    spacing,
    flexbox,
    textColor,
    bgcolor,
    width,
    height
  )
)
Avatar.displayName = 'Avatar'

export default Avatar as React.FC<AvatarProps>
