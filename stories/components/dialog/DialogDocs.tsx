import * as React from 'react'
import { DialogProps } from '@material-ui/core/Dialog'
import { DialogActionsProps } from '@material-ui/core/DialogActions'
import { DialogContentProps } from '@material-ui/core/DialogContent'
import { DialogContentTextProps } from '@material-ui/core/DialogContentText'
import { DialogTitleProps } from '@material-ui/core/DialogTitle'

export type DialogDocsProps = Omit<
  DialogProps,
  keyof React.HTMLAttributes<HTMLDivElement>
>
export type DialogActionsDocsProps = Omit<
  DialogActionsProps,
  keyof React.HTMLAttributes<HTMLDivElement>
>
export type DialogContentDocsProps = Omit<
  DialogContentProps,
  keyof React.HTMLAttributes<HTMLDivElement>
>
export type DialogContentTextDocsProps = Omit<
  DialogContentTextProps,
  keyof React.HTMLAttributes<HTMLDivElement>
>
export type DialogTitleDocsProps = Omit<
  DialogTitleProps,
  keyof React.HTMLAttributes<HTMLDivElement>
>
export const DialogDocs: React.FC<DialogDocsProps> = () => null
export const DialogActionsDocs: React.FC<DialogActionsDocsProps> = () => null
export const DialogContentDocs: React.FC<DialogContentDocsProps> = () => null
export const DialogContentTextDocs: React.FC<DialogContentTextDocsProps> = () =>
  null
export const DialogTitleDocs: React.FC<DialogTitleDocsProps> = () => null
