import { css } from '@committed/ss/css'
import { action } from '@storybook/addon-actions'
import { Meta, StoryFn } from '@storybook/react'
import React, { useCallback, useEffect } from 'react'
import {
    Toast,
    ToastAction,
    ToastDescription,
    ToastProvider,
    ToastRoot,
    ToastTitle,
    ToastViewport,
} from '.'
import { withFormObject } from '../../docs/util'
import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { Form, FormButton } from '../Form'
import { FormControl, FormControlHelp } from '../FormControl'
import { Inline } from '../Inline'
import { Input } from '../Input'
import { Select, SelectItem } from '../Select'
import { TextArea } from '../TextArea'
import { useToast } from './Toaster'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  subcomponents: {
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
}
export default meta

export const Default: StoryFn<typeof Toast> = ({
  title = 'Toast Title',
  altText = 'Undo',
  description = 'This is the toast content, the content is optional but should usually give further explanation about the toast and if any action is required.',
  severity = 'default',
  ...args
}) => {
  const [open, setOpen] = React.useState(false)
  const timerRef = React.useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  const onClick = useCallback(() => {
    setOpen(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setOpen(true)
    }, 100)
  }, [])

  return (
    <>
      <Button onClick={onClick}>Open Toast</Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title={title}
        altText={altText}
        description={description}
        severity={severity}
        {...args}
      />
    </>
  )
}

/**
 * A `useToast` hook is supplied.
 *
 * This relies on the `ToastProvider` being a parent of the component using the hook.
 * It is supplied as part of the `ComponentsProvider` and default settings for the toasts can be set on the `ComponentsProvider`.
 *
 * The hook is supplied with the props of the toast and it's creation is manage by the provider.
 */
export const UseToast: StoryFn = () => {
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

/**
 * By adding an `id` you can restrict to only showing one toast with that `id` at a time.
 * This can be useful to reduce the clutter if there are lots of notifications.
 */
export const UseToastSeverity: StoryFn = () => {
  const { addToast } = useToast()
  return (
    <Inline>
      <Button
        onClick={() => {
          addToast({
            title: 'Default Toast',
            severity: 'default',
            description: 'This is toast description',
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
          })
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          addToast({
            title: 'Warning Toast',
            severity: 'warning',
            description: 'This is toast description',
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
          })
        }}
      >
        Error
      </Button>
    </Inline>
  )
}

export const UseToastProps: StoryFn = () => {
  const { addToast } = useToast()
  return (
    <Form onSubmit={withFormObject(addToast)}>
      <FormControl>
        <Input
          name="title"
          id="title"
          label="Title"
          placeholder="toast title"
          defaultValue="Hello Toast"
          required
        />
        <FormControlHelp defaultText="The title of the toast" />
      </FormControl>
      <FormControl>
        <TextArea
          name="description"
          id="description"
          label="Description"
          placeholder="toast description"
          defaultValue="This is the description text of the toast"
        />
        <FormControlHelp defaultText="The title of the toast" />
      </FormControl>
      <FormControl>
        <Checkbox
          name="close"
          id="close"
          label="With Close Button"
          defaultValue="false"
        />
      </FormControl>
      <FormControl>
        <Select
          name="severity"
          id="severity"
          label="Severity"
          defaultValue="default"
        >
          <SelectItem value="default">Default</SelectItem>
          <SelectItem value="warning">Warning</SelectItem>
          <SelectItem value="info">Info</SelectItem>
          <SelectItem value="success">Success</SelectItem>
          <SelectItem value="error">Error</SelectItem>
        </Select>
        <FormControlHelp defaultText="Select the severity" />
      </FormControl>
      <FormControl>
        <Input
          name="duration"
          id="duration"
          label="Duration"
          defaultValue={3000}
          type={'number'}
          min={500}
          max={10000}
        />
        <FormControlHelp defaultText="Select the duration (ms) to remain" />
      </FormControl>
      <FormButton />
    </Form>
  )
}

let toastNumber = 0
/**
 * By adding a key you can restrict to only showing one toast with that key at a time.
 * This can be useful to reduce the clutter if there are lots of notifications.
 */
export const UseToastWithKey: StoryFn = () => {
  const { addToast } = useToast()
  return (
    <Inline>
      <Button
        onClick={() => {
          addToast({
            title: 'Toast id A',
            severity: 'info',
            description: `this is toast number ${toastNumber++}`,
            id: 'A',
          })
        }}
      >
        Add Info
      </Button>
      <Button
        onClick={() => {
          addToast({
            title: 'Toast id B',
            severity: 'warning',
            description: `this is toast number ${toastNumber++}`,
            id: 'B',
          })
        }}
      >
        Add Warning
      </Button>
      <Button
        onClick={() => {
          addToast({
            title: 'Toast id C',
            severity: 'error',
            description: `this is toast number ${toastNumber++}`,
            id: 'C',
          })
        }}
      >
        Add Error
      </Button>
    </Inline>
  )
}

export const OtherOptions: StoryFn = () => {
  const { addToast } = useToast()
  return (
    <Inline>
      <Button
        onClick={() => {
          addToast({
            title: 'With Close',
            description: `this toast has a close button`,
            close: true,
          })
        }}
      >
        With Close
      </Button>
      <Button
        onClick={() => {
          addToast({
            title: 'Requires Closing',
            description: `this toast must be dismissed manually`,
            close: true,
            duration: null,
          })
        }}
      >
        Requires closing
      </Button>
      <Button
        onClick={() => {
          addToast({
            title: 'With Action',
            description: 'this toast has an action which also closes the toast',
            altText: 'An alt text must also be supplied',
            actions: (
              <Button variant="primary" onClick={action('clicked')}>
                Action
              </Button>
            ),
          })
        }}
      >
        Action Button
      </Button>
      <Button
        onClick={() => {
          addToast({
            title: 'With Close Action',
            description:
              'See actions panel - onClose is called as it it closed',
            onClose: action('onClose'),
          })
        }}
      >
        Close Action
      </Button>
    </Inline>
  )
}

/**
 * While the Toast component is wrapped for ease of use, its underlying root components
 * can still be accessed to allow for more customization, such as the toast appearing in the bottom left.
 *
 * Each application should have a `ToastProvider` and a `ToastViewport`, these are provided by default in the
 * `ComponentsProvider`. they can be configured there or disabled and used separately.
 */
export const FullAccess: StoryFn<typeof Toast> = () => {
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

  const onClick = useCallback(() => {
    setOpen(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      eventDateRef.current = oneWeekAway()
      setOpen(true)
    }, 100)
  }, [])

  return (
    <ToastProvider swipeDirection="left">
      <Button onClick={onClick}>Add to calendar</Button>
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
      <ToastViewport className={css({ bottom: 0, left: 0 })} />
    </ToastProvider>
  )
}
