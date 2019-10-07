import React from 'react'
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
import { Theme } from '../../theme'

const textColor = style<'color', Theme>({
  prop: 'color',
  themeKey: 'palette'
})

const bgcolor = style<'bgcolor', Theme>({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
})

const width = style<'size', Theme>({
  prop: 'size',
  cssProperty: 'width',
  transform: fractionToPercent
})

const height = style<'size', Theme>({
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
    bgcolor?: string
    /**
     * The color of the icon or text
     */
    color?: string
    /**
     * The size (width and height) of the avatar, e.g. (24px)
     */
    size?: string | number
  }

export const Avatar: React.ComponentType<AvatarProps> = styled<
  React.ComponentType<AvatarProps>
>(MaterialAvatar)(
  compose(
    spacing,
    flexbox,
    textColor,
    bgcolor,
    width,
    height
  )
)
