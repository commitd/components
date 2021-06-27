import { useBoolean } from '@committed/hooks'
import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react'
import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '.'
import { Button, IconButton, Link, Row, Text } from '../'
import { Close as CloseIcon } from '../Icons'

export default {
  title: 'Components/Dialog',
  component: Dialog,
  subcomponents: {
    DialogContent,
    DialogTrigger,
    DialogClose,
    DialogTitle,
    DialogDescription,
  },
} as Meta

export const Default = () => (
  <Dialog>
    <DialogTrigger>
      <Button>Show Dialog</Button>
    </DialogTrigger>
    <DialogContent>This is a dialog</DialogContent>
  </Dialog>
)

/**
 * It is likely that the dialog will need to be controlled to support further actions and different closing behaviours.
 * This can be done using the `open` and `onOpenChange` props.
 */
export const Controllable = () => {
  const [open, { setTrue, setFalse }] = useBoolean(false)

  return (
    <>
      <Button onClick={setTrue}>Show Dialog</Button>
      <Dialog open={open} onOpenChange={setFalse}>
        <DialogContent defaultClose={false}>
          <DialogTitle>This is a controlled dialog</DialogTitle>
          <DialogDescription>
            It can be closed by a click outside the dialog or using the esc key
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  )
}

/**
 * Additional close or custom actions that also close the dialog should use a `DialogClose`.
 */
export const CloseButton = () => {
  const [open, { setTrue, setFalse }] = useBoolean(false)

  return (
    <>
      <Button onClick={setTrue}>Show Dialog</Button>
      <Dialog open={open} onOpenChange={setFalse}>
        <DialogContent
          defaultClose={false}
          css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}
        >
          <Text>
            This dialog has it's own close operations, such as{' '}
            <DialogClose as={Link} onClick={action('CloseLink')}>
              Close Link
            </DialogClose>
            .
          </Text>
          <Row css={{ justifyContent: 'space-between' }}>
            <DialogClose as={IconButton} onClick={action('CloseIcon')}>
              <CloseIcon />
            </DialogClose>
            <DialogClose
              as={Button}
              variant="primary"
              onClick={action('CloseButton')}
            >
              Close Button
            </DialogClose>
          </Row>
        </DialogContent>
      </Dialog>
    </>
  )
}
