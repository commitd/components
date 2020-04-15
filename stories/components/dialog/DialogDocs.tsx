import { FC, HTMLAttributes } from 'react'
import { DialogProps } from '@material-ui/core/Dialog'
import { DialogActionsProps } from '@material-ui/core/DialogActions'
import { DialogContentProps } from '@material-ui/core/DialogContent'
import { DialogContentTextProps } from '@material-ui/core/DialogContentText'
import { DialogTitleProps } from '@material-ui/core/DialogTitle'

// For documentation only
export type DialogDocsProps = Omit<
  DialogProps,
  keyof HTMLAttributes<HTMLDivElement>
>
export type DialogActionsDocsProps = Omit<
  DialogActionsProps,
  keyof HTMLAttributes<HTMLDivElement>
>
export type DialogContentDocsProps = Omit<
  DialogContentProps,
  keyof HTMLAttributes<HTMLDivElement>
>
export type DialogContentTextDocsProps = Omit<
  DialogContentTextProps,
  keyof HTMLAttributes<HTMLDivElement>
>
export type DialogTitleDocsProps = Omit<
  DialogTitleProps,
  keyof HTMLAttributes<HTMLDivElement>
>
export const DialogDocs: FC<DialogDocsProps> = () => null
export const DialogActionsDocs: FC<DialogActionsDocsProps> = () => null
export const DialogContentDocs: FC<DialogContentDocsProps> = () => null
export const DialogContentTextDocs: FC<DialogContentTextDocsProps> = () => null
export const DialogTitleDocs: FC<DialogTitleDocsProps> = () => null
