import { FC, HTMLAttributes } from 'react'
import { DrawerProps } from '@material-ui/core/Drawer'

// For documentation only
export type DrawerDocsProps = Omit<
  DrawerProps,
  keyof HTMLAttributes<HTMLDivElement>
>

export const DrawerDocs: FC<DrawerDocsProps> = () => null
