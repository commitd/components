'use client'
import {
  Button,
  ConfirmDialog,
  ConfirmDialogActions,
  ConfirmDialogContent,
  ConfirmDialogTrigger,
  useToast,
} from '@committed/ds'

export const ConfirmDialogExample = () => {
  const { addToast } = useToast()
  return (
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
          onCancel={() => addToast({ title: 'confirmed', severity: 'error' })}
          onConfirm={() =>
            addToast({ title: 'confirmed', severity: 'success' })
          }
        />
      </ConfirmDialogContent>
    </ConfirmDialog>
  )
}
