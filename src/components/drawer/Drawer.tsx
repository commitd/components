import { FC, HTMLAttributes } from 'react'
import Drawer, { DrawerProps } from '@material-ui/core/Drawer'

export type DrawerProps = DrawerProps
export { Drawer }

// For documentation only
export type DrawerDocsProps = Omit<
  DrawerProps,
  keyof HTMLAttributes<HTMLDivElement>
>

export const DrawerDocs: FC<DrawerDocsProps> = () => null
