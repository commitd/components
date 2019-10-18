import { FC, HTMLAttributes } from 'react'
import Menu, { MenuProps } from '@material-ui/core/Menu'
import MenuItem, { MenuItemProps } from '@material-ui/core/MenuItem'
import MenuList, { MenuListProps } from '@material-ui/core/MenuList'

export type MenuProps = MenuProps
export type MenuItemProps = MenuItemProps
export type MenuListProps = MenuListProps

export { Menu, MenuItem, MenuList }

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
