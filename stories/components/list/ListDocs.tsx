import { FC, HTMLAttributes } from 'react'
import { ListProps } from '@material-ui/core/List'
import { ListItemProps } from '@material-ui/core/ListItem'
import { ListItemAvatarProps } from '@material-ui/core/ListItemAvatar'
import { ListItemIconProps } from '@material-ui/core/ListItemIcon'
import { ListItemSecondaryActionProps } from '@material-ui/core/ListItemSecondaryAction'
import { ListItemTextProps } from '@material-ui/core/ListItemText'
import { ListSubheaderProps } from '@material-ui/core/ListSubheader'

// For documentation only
export type ListDocsProps = Omit<
  ListProps,
  keyof HTMLAttributes<HTMLUListElement>
>
export type ListItemDocsProps = Omit<
  ListItemProps,
  keyof HTMLAttributes<HTMLLIElement>
>
export type ListItemAvatarDocsProps = ListItemAvatarProps
export type ListItemIconDocsProps = Omit<
  ListItemIconProps,
  keyof HTMLAttributes<HTMLDivElement>
>
export type ListItemSecondaryActionDocsProps = Omit<
  ListItemSecondaryActionProps,
  keyof HTMLAttributes<HTMLDivElement>
>
export type ListItemTextDocsProps = Omit<
  ListItemTextProps,
  keyof HTMLAttributes<HTMLDivElement>
>
export type ListSubheaderDocsProps = Omit<
  ListSubheaderProps,
  keyof HTMLAttributes<HTMLDivElement>
>

export const ListDocs: FC<ListDocsProps> = () => null
export const ListItemDocs: FC<ListItemDocsProps> = () => null
export const ListItemAvatarDocs: FC<ListItemAvatarDocsProps> = () => null
export const ListItemIconDocs: FC<ListItemIconDocsProps> = () => null
export const ListItemSecondaryActionDocs: FC<ListItemSecondaryActionDocsProps> = () =>
  null
export const ListItemTextDocs: FC<ListItemTextDocsProps> = () => null
export const ListSubheaderDocs: FC<ListSubheaderDocsProps> = () => null
