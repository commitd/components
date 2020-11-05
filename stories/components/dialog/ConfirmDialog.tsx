import {
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
  DialogContent,
  DialogContentText,
  DialogProps,
} from '../../../src'
import React from 'react'
import { Icons } from '../../util/Icons'

export interface ConfirmDialogProps extends DialogProps {
  open: boolean
  onConfirm: () => void
  onCancel: () => void
  confirmButtonText?: string
  cancelButtonText?: string
  title?: string
  content?: string
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  onConfirm,
  onCancel,
  content,
  title = 'Are you sure?',
  confirmButtonText = 'Confirm',
  cancelButtonText = 'Cancel',
  ...dialogProps
}) => {
  const deleting = /^delet|remov/i.exec(confirmButtonText) != null
  return (
    <Dialog open={open} onClose={onCancel} fullWidth {...dialogProps}>
      <DialogTitle>{title}</DialogTitle>
      {content && (
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button onClick={onCancel} variant="text" startIcon={<Icons.Clear />}>
          {cancelButtonText}
        </Button>
        <Button
          color="primary"
          startIcon={deleting ? <Icons.Delete /> : <Icons.Check />}
          onClick={onConfirm}
        >
          {confirmButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
