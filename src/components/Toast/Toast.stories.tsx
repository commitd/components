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
import { Box } from '../Box'

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
        title="Toast Title"
        description="This is the toast content, the content is optional but should usually give
        further explanation about the toast and if any action is required."
        altText="Undo"
      />
    </>
  )
}

export const WithClose: Story = () => {
  const [open, setOpen] = React.useState(true)
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
        title="Toast Title"
        description="This is the toast content"
        altText="Undo"
        duration={9999999}
      />
    </>
  )
}

export const WithAction: Story = () => {
  const [open, setOpen] = React.useState(true)
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
        title="Deleted ID#1928"
        description="Was this intentional?"
        altText="Undo"
        duration={9999999}
      >
        <Button variant="primary" size="small">
          Undo
        </Button>
      </Toast>
    </>
  )
}

const Template: Story = (args) => {
  return (
    <Box css={{ paddingTop: '$4' }}>
      <Toast
        open={true}
        title="Variant Toast Title"
        description="This is the toast content"
        altText="Undo"
        {...args}
      />
    </Box>
  )
}

export const SuccessVariant = Template.bind({})
SuccessVariant.args = {
  title: 'Success Title',
  severity: 'success',
}

export const InfoVariant = Template.bind({})
InfoVariant.args = {
  title: 'Info Title',
  severity: 'info',
}

export const WarningVariant = Template.bind({})
WarningVariant.args = {
  title: 'Warning Title',
  severity: 'warning',
}

export const ErrorVariant = Template.bind({})
ErrorVariant.args = {
  title: 'Error Title',
  severity: 'error',
}

/**
 * While the Toast component is wrapped for ease of use, its underlying root components
 * can still be accessed to allow for more customisation, such as the toast appearing in the bottom left.
 */
export const FullAccess: Story = () => {
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
    <ToastProvider swipeDirection="left">
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
      <ToastRoot open={open} onOpenChange={setOpen} severity="default">
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
      <ToastViewport css={{ bottom: '$0', left: '$0' }} />
    </ToastProvider>
  )
}
