import { Button, useToast } from '@committed/ds'

export const ToastExample = () => {
  const { addToast } = useToast()
  return (
    <Button
      onClick={() => {
        addToast({
          title: 'Hello Toast',
        })
      }}
    >
      Add Toast
    </Button>
  )
}
