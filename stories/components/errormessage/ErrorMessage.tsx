import React from 'react'
import {
  Text,
  IconButton,
  Collapse,
  Alert,
  AlertTitle,
  AlertProps,
} from '../../../src'
import { Icons } from '../../util/Icons'

interface MessageProps {
  title?: string
  message?: string
  icon?: React.ReactNode
  severity?: AlertProps['color']
  closeable?: boolean
  onClose?: () => void
}

export const Message: React.FC<MessageProps> = ({
  title,
  message,
  severity = 'warning',
  closeable = false,
  onClose,
}) => {
  const [open, setOpen] = React.useState(true)
  return (
    <Collapse in={open}>
      <Alert
        severity={severity}
        action={
          closeable ? (
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false)
                if (onClose != null) {
                  onClose()
                }
              }}
            >
              <Icons.Close fontSize="inherit" />
            </IconButton>
          ) : undefined
        }
      >
        <AlertTitle>{title}</AlertTitle>
        {message && <Text>{message}</Text>}
      </Alert>
    </Collapse>
  )
}

export const ErrorMessage: React.FC<MessageProps> = ({
  title = 'Error',
  message = 'Something went wrong.',
  ...messageProps
}) => {
  return (
    <Message
      severity="error"
      title={title}
      message={message}
      {...messageProps}
    />
  )
}
