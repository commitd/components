import React, { FC, ComponentType, HTMLAttributes } from 'react'
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
import { fractionToPercent } from '../../util/transform'
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
     * The background color, supports dot reference from theme.palette
     */
    bgcolor?: string
    /**
     * The color of the icon or text, supports dot reference from theme.palette
     */
    color?: string
    /**
     * The size (width and height) of the avatar,
     * numeric value > 1 transformed to 'px' e.g. (24 maps to  24px)
     */
    size?: string | number
  }

export const Avatar: ComponentType<AvatarProps> = styled<
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

// For documentation only
export type BaseAvatarProps = Pick<
  AvatarProps,
  'alt' | 'imgProps' | 'size' | 'src' | 'color' | 'bgcolor'
>
export type RestAvatarProps = Omit<
  AvatarProps,
  keyof (BaseAvatarProps &
    SpacingProps &
    FlexboxProps &
    HTMLAttributes<HTMLDivElement>)
>
export const BaseAvatarDocs: FC<BaseAvatarProps> = () => null
export const RestAvatarDocs: FC<RestAvatarProps> = () => null
