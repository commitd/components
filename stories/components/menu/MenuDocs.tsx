import * as React from 'react'
import { MenuProps } from '@material-ui/core/Menu'
import { MenuItemProps } from '@material-ui/core/MenuItem'
import { MenuListProps } from '@material-ui/core/MenuList'

export type MenuDocsProps = Omit<
  MenuProps,
  keyof React.HTMLAttributes<HTMLDivElement>
>
export type MenuItemDocsProps = Omit<
  MenuItemProps,
  keyof React.HTMLAttributes<HTMLLIElement>
>
export type MenuListDocsProps = Omit<
  MenuListProps,
  keyof React.HTMLAttributes<HTMLUListElement>
>

export const MenuDocs: React.FC<MenuDocsProps> = () => null
export const MenuItemDocs: React.FC<MenuItemDocsProps> = () => null
export const MenuListDocs: React.FC<MenuListDocsProps> = () => null
