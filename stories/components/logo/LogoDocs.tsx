import * as React from 'react'

//TODO: Use directly when storybook issue fixed
//import { LogoProps } from '../../../src'

export interface BaseLogoProps {
  /**
   * Adjust the size in px of the loader, or % if <= 1.
   * Supply an array for responsive adjustment.
   *
   * @default 256
   */
  size?: number | number[]
}

export type LogoProps = BaseLogoProps & React.HTMLAttributes<SVGElement>

export type LogoDocsProps = Omit<
  LogoProps,
  keyof React.HTMLAttributes<SVGElement>
>

export const LogoDocs: React.FC<LogoDocsProps> = () => null
