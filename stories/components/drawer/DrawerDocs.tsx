import * as React from 'react'
import { DrawerProps } from '@material-ui/core/Drawer'

export type DrawerDocsProps = Omit<
  DrawerProps,
  keyof React.HTMLAttributes<HTMLDivElement>
>

export const DrawerDocs: React.FC<DrawerDocsProps> = () => null
