import * as React from 'react'
import { SpacingProps, FlexboxProps } from '@material-ui/system'

// TODO: Remove once issue fixed in storybook
//import { AvatarProps } from '../../../src'
import { AvatarProps as MaterialAvatarProps } from '@material-ui/core/Avatar'

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

export type BaseAvatarProps = Partial<
  Pick<AvatarProps, 'alt' | 'imgProps' | 'size' | 'src' | 'color' | 'bgcolor'>
>

export type RestAvatarProps = Omit<
  AvatarProps,
  keyof (BaseAvatarProps &
    SpacingProps &
    FlexboxProps &
    React.HTMLAttributes<HTMLDivElement>)
>

export const BaseAvatarDocs: React.FC<BaseAvatarProps> = (
  props: BaseAvatarProps
) => null
export const RestAvatarDocs: React.FC<RestAvatarProps> = (
  props: RestAvatarProps
) => null
