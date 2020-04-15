import React, { FC, ComponentType, HTMLAttributes } from 'react'
import { AvatarProps } from '../../../src'
import { SpacingProps, FlexboxProps } from '@material-ui/system'

// import {
//   AvatarProps as MaterialAvatarProps,
// } from '@material-ui/core/Avatar';

// export type AvatarProps = MaterialAvatarProps &
//   SpacingProps &
//   FlexboxProps & {
//     /**
//      * The background color, supports dot reference from theme.palette
//      */
//     bgcolor?: string;
//     /**
//      * The color of the icon or text, supports dot reference from theme.palette
//      */
//     color?: string;
//     /**
//      * The size (width and height) of the avatar,
//      * numeric value > 1 transformed to 'px' e.g. (24 maps to  24px)
//      */
//     size?: string | number;
//   };

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
