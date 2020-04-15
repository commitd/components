import React, { FC } from 'react'
import { LogoProps } from '../../../src'

// export interface BaseLogoProps {
//   /**
//    * Adjust the size in px of the loader, or % if <= 1.
//    * Supply an array for responsive adjustment.
//    *
//    * @default 256
//    */
//   size?: number | number[]
// }

// export type LogoProps = BaseLogoProps & React.HTMLAttributes<SVGElement>

export type BaseLogoProps = Omit<
  LogoProps,
  keyof React.HTMLAttributes<SVGElement>
>

// For documentation only
export const LogoDocs: FC<BaseLogoProps> = () => null
