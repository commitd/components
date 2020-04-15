import { FC, ComponentType, HTMLAttributes } from 'react'
import { DividerProps } from '../../../src'
// import MaterialDivider, {
//   DividerProps as MaterialDividerProps
// } from '@material-ui/core/Divider'
import { SpacingProps } from '@material-ui/system'

// export type DividerProps = MaterialDividerProps &
//   SpacingProps & {
//     /**
//      * The color of the divider from the theme's palette
//      */
//     color?: string
//   }

// For documentation only
export type DividerDocsProps = Omit<
  DividerProps,
  keyof (SpacingProps & Omit<HTMLAttributes<HTMLDivElement>, 'color'>)
>

export const DividerDocs: FC<DividerDocsProps> = () => null
