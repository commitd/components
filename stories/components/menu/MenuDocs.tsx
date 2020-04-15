import { FC, HTMLAttributes } from 'react'
import { MenuProps } from '@material-ui/core/Menu'
import { MenuItemProps } from '@material-ui/core/MenuItem'
import { MenuListProps } from '@material-ui/core/MenuList'

// For documentation only
export type MenuDocsProps = Omit<
  MenuProps,
  keyof HTMLAttributes<HTMLDivElement>
>
export type MenuItemDocsProps = Omit<
  MenuItemProps,
  keyof HTMLAttributes<HTMLLIElement>
>
export type MenuListDocsProps = Omit<
  MenuListProps,
  keyof HTMLAttributes<HTMLUListElement>
>

export const MenuDocs: FC<MenuDocsProps> = () => null
export const MenuItemDocs: FC<MenuItemDocsProps> = () => null
export const MenuListDocs: FC<MenuListDocsProps> = () => null
