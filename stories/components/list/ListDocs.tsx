import * as React from 'react'
import { ListProps } from '@material-ui/core/List'
import { ListItemProps } from '@material-ui/core/ListItem'
import { ListItemAvatarProps } from '@material-ui/core/ListItemAvatar'
import { ListItemIconProps } from '@material-ui/core/ListItemIcon'
import { ListItemSecondaryActionProps } from '@material-ui/core/ListItemSecondaryAction'
import { ListItemTextProps } from '@material-ui/core/ListItemText'
import { ListSubheaderProps } from '@material-ui/core/ListSubheader'

export type ListDocsProps = Omit<
  ListProps,
  keyof React.HTMLAttributes<HTMLUListElement>
>
export type ListItemDocsProps = Omit<
  ListItemProps,
  keyof React.HTMLAttributes<HTMLLIElement>
>
export type ListItemAvatarDocsProps = ListItemAvatarProps
export type ListItemIconDocsProps = Omit<
  ListItemIconProps,
  keyof React.HTMLAttributes<HTMLDivElement>
>
export type ListItemSecondaryActionDocsProps = Omit<
  ListItemSecondaryActionProps,
  keyof React.HTMLAttributes<HTMLDivElement>
>
export type ListItemTextDocsProps = Omit<
  ListItemTextProps,
  keyof React.HTMLAttributes<HTMLDivElement>
>
export type ListSubheaderDocsProps = Omit<
  ListSubheaderProps,
  keyof React.HTMLAttributes<HTMLDivElement>
>

export const ListDocs: React.FC<ListDocsProps> = () => null
export const ListItemDocs: React.FC<ListItemDocsProps> = () => null
export const ListItemAvatarDocs: React.FC<ListItemAvatarDocsProps> = () => null
export const ListItemIconDocs: React.FC<ListItemIconDocsProps> = () => null
export const ListItemSecondaryActionDocs: React.FC<ListItemSecondaryActionDocsProps> = () =>
  null
export const ListItemTextDocs: React.FC<ListItemTextDocsProps> = () => null
export const ListSubheaderDocs: React.FC<ListSubheaderDocsProps> = () => null
