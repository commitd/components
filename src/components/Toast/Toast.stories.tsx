import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
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
  excludeStories: ['ToastProvider', 'ToastViewport'],
  argTypes: {
    severity: {
      options: ['error', 'warning', 'info', 'success', 'ghost', 'default'],
      description: 'Set the severity of the alert',
    },
  },
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = ({
  title = 'Toast Title',
  altText = 'Undo',
  ...args
}) => {
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
        title={title}
        altText={altText}
        description="This is the toast content, the content is optional but should usually give
        further explanation about the toast and if any action is required."
        severity="default"
        {...args}
      />
    </>
  )
}

export const Default = Template.bind({})

export const WithClose: ComponentStory<typeof Toast> = () => {
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
        title="Toast Title"
        description="This is the toast content"
        altText="Undo"
        duration={9999999}
      />
    </>
  )
}

export const WithAction: ComponentStory<typeof Toast> = () => {
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
 *
 * Each application should have a `ToastProvider` and a `ToastViewport`, these are provided by default in the
 * `ComponentsProvider`. they can be configured there or disabled and used separately.
 */
export const FullAccess: ComponentStory<typeof Toast> = () => {
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
