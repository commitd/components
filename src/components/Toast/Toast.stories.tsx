import React from 'react'
import { Story, Meta } from '@storybook/react'
import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  ToastRoot,
} from '.'
import { Button } from '../Button'

export default {
  title: 'Components/Toast',
  component: Toast,
  subcomponents: {
    Toast,
    ToastAction,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
  },
  argTypes: {
    severity: {
      control: {
        type: 'select',
        options: ['error', 'warning', 'info', 'success', 'ghost'],
      },
      defaultValue: 'error',
      description: 'Set the severity of the alert',
    },
  },
} as Meta

export const Default: Story = () => {
  const [open, setOpen] = React.useState(false)
  const timerRef = React.useRef(0)

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        Open Toast
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title="Upgrade available"
        description="We've just released Radix 3.0!"
        altText="Undo"
      />
    </>
  )
}

export const WithClose: Story = () => {
  const [open, setOpen] = React.useState(false)
  const timerRef = React.useRef(0)

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        Open Toast
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        close
        title="Upgrade available"
        description="We've just released Radix 3.0!"
        altText="Undo"
      ></Toast>
    </>
  )
}

export const WithAction: Story = () => {
  const [open, setOpen] = React.useState(false)
  const timerRef = React.useRef(0)

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        Open Toast
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title="Upgrade available"
        description="We've just released Radix 3.0!"
        altText="Undo"
      >
        <Button variant="primary" size="small">
          Undo
        </Button>
      </Toast>
    </>
  )
}

export const Full: Story = () => {
  const [open, setOpen] = React.useState(false)
  const eventDateRef = React.useRef(new Date())
  const timerRef = React.useRef(0)

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  function oneWeekAway() {
    const now = new Date()
    const inOneWeek = now.setDate(now.getDate() + 7)
    return new Date(inOneWeek)
  }

  return (
    <ToastProvider swipeDirection="right">
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway()
            setOpen(true)
          }, 100)
        }}
      >
        Add to calendar
      </Button>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>Scheduled: Catch up</ToastTitle>
        <ToastDescription asChild>
          <time dateTime={eventDateRef.current.toISOString()}>
            {eventDateRef.current.toLocaleString()}
          </time>
        </ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo">
          <Button variant="primary" size="small">
            Undo
          </Button>
        </ToastAction>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}
