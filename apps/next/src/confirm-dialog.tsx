'use client'
import {
  Button,
  ConfirmDialog,
  ConfirmDialogActions,
  ConfirmDialogContent,
  ConfirmDialogTrigger,
} from '@committed/ds'

export const ConfirmDialogExample = () => (
  <ConfirmDialog>
    <ConfirmDialogTrigger>
      <Button>Show Dialog</Button>
    </ConfirmDialogTrigger>
    <ConfirmDialogContent
      description="Are you sure this is a confirm dialog?"
      title="Confirm Dialog"
    >
      <ConfirmDialogActions
        confirm="Confirm"
        onConfirm={() => alert('confirmed')}
      />
    </ConfirmDialogContent>
  </ConfirmDialog>
)
