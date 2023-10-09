'use client'
import { Button, Inline, useToast } from '@committed/ds'

export const ToastExample = () => {
  const { addToast } = useToast()
  return (
    <Inline>
      <Button
        onClick={() => {
          addToast({
            title: 'Default Toast',
            severity: 'default',
            description: 'This is toast description',
            close: true,
          })
        }}
      >
        Default
      </Button>
      <Button
        onClick={() => {
          addToast({
            title: 'Info Toast',
            severity: 'info',
            description: 'This is toast description',
            close: true,
          })
        }}
      >
        Info
      </Button>
      <Button
        onClick={() => {
          addToast({
            title: 'Success Toast',
            severity: 'success',
            description: 'This is toast description',
            close: true,
          })
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          addToast({
            title: 'Warning Toast',
            severity: 'warn',
            description: 'This is toast description',
            close: true,
          })
        }}
      >
        Warning
      </Button>
      <Button
        onClick={() => {
          addToast({
            title: 'Error Toast',
            severity: 'error',
            description: 'This is toast description',
            close: true,
          })
        }}
      >
        Error
      </Button>
    </Inline>
  )
}
