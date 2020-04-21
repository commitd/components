import * as React from 'react'
import { SpacingProps } from '@material-ui/system'
// TODO use normal import when storybook issue fixed
//import { DividerProps } from '../../../src'
import { DividerProps as MaterialDividerProps } from '@material-ui/core/Divider'

export type DividerProps = MaterialDividerProps &
  SpacingProps & {
    /**
     * The color of the divider from the theme's palette
     */
    color?: string
  }

export type DividerDocsProps = Omit<
  DividerProps,
  keyof (SpacingProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>)
>

export const DividerDocs: React.FC<DividerDocsProps> = (
  props: DividerDocsProps
) => null
