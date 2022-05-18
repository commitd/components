import { useBoolean } from '@committed/hooks'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react'
import React, { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '.'
import { Box, Button, Column, IconButton, Link, Row, Text } from '../'
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

export const Default: Story = () => (
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
export const Controllable: Story = () => {
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
export const CloseButton: Story = () => {
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
            <DialogClose>
              <Link onClick={action('CloseLink')}>Close Link</Link>
            </DialogClose>
            .
          </Text>
          <Row css={{ justifyContent: 'space-between' }}>
            <DialogClose>
              <IconButton onClick={action('CloseIcon')}>
                <CloseIcon />
              </IconButton>
            </DialogClose>
            <DialogClose>
              <Button variant="primary" onClick={action('CloseButton')}>
                Close Button
              </Button>
            </DialogClose>
          </Row>
        </DialogContent>
      </Dialog>
    </>
  )
}

/**
 * The dialog is portalled by default. This means the dialog will be appended to the body and so over lay other elements.
 * In addition, the `CompontsProvider`, by default, isolates the children in their own stacking context so this will not be afected by the z-index of other elements of the UI.
 *
 * This example shows how the z-index of other elements in the UI do not affect the dialog.
 *
 * This may not be the desired behaviour for your application so these defaults can be overridden, see below.
 */
export const Portalled: Story = () => {
  return (
    <Row gap centered>
      <Dialog>
        <DialogTrigger>
          <Button>Default</Button>
        </DialogTrigger>
        <DialogContent overlayCss={{ backgroundColor: '$paper', opacity: 0.9 }}>
          This is a dialog
        </DialogContent>
      </Dialog>
      <Box css={{ zIndex: 10, backgroundColor: '$success4' }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 10</Button>
          </DialogTrigger>
          <DialogContent
            overlayCss={{ backgroundColor: '$success4', opacity: 0.9 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{ zIndex: 100, backgroundColor: '$info4' }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 100</Button>
          </DialogTrigger>
          <DialogContent
            overlayCss={{ backgroundColor: '$info4', opacity: 0.9 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{ zIndex: 1000, backgroundColor: '$warning4' }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 1000</Button>
          </DialogTrigger>
          <DialogContent
            overlayCss={{ backgroundColor: '$warning4', opacity: 0.9 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{ zIndex: 10000, backgroundColor: '$error4' }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 10000</Button>
          </DialogTrigger>
          <DialogContent
            overlayCss={{ backgroundColor: '$error4', opacity: 0.9 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
    </Row>
  )
}

/**
 * Turning off portalling will mean the zIndex of the dialog will be relative to the zIndex of the element it is appended to.
 */
export const zIndex: Story = () => {
  return (
    <Row gap centered>
      <Dialog>
        <DialogTrigger>
          <Button>Default</Button>
        </DialogTrigger>
        <DialogContent
          overlayCss={{ backgroundColor: '$paper', opacity: 0.9 }}
          portalled={false}
        >
          This is a dialog
        </DialogContent>
      </Dialog>
      <Box css={{ zIndex: 10, backgroundColor: '$success4' }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 10</Button>
          </DialogTrigger>
          <DialogContent
            portalled={false}
            overlayCss={{ backgroundColor: '$success4', opacity: 0.9 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{ zIndex: 100, backgroundColor: '$info4' }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 100</Button>
          </DialogTrigger>
          <DialogContent
            portalled={false}
            overlayCss={{ backgroundColor: '$info4', opacity: 0.9 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{ zIndex: 1000, backgroundColor: '$warning4' }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 1000</Button>
          </DialogTrigger>
          <DialogContent
            portalled={false}
            overlayCss={{ backgroundColor: '$warning4', opacity: 0.9 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{ zIndex: 10000, backgroundColor: '$error4' }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 10000</Button>
          </DialogTrigger>
          <DialogContent
            portalled={false}
            overlayCss={{ backgroundColor: '$error4', opacity: 0.9 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
    </Row>
  )
}

/**
 * The element the dialog portalls to can be provided, and different effects can be achieved by supplying additional css. For example:
 */
export const Container: Story = () => {
  const [element, setElement] = useState<HTMLElement | null>(null)

  return (
    <Column gap>
      <Row gap centered>
        <Dialog>
          <DialogTrigger>
            <Button>Default</Button>
          </DialogTrigger>
          <DialogContent
            container={element}
            overlayCss={{
              position: 'absolute',
            }}
            css={{ position: 'absolute', marginTop: 0 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
        <Box css={{ zIndex: 10, backgroundColor: '$success4' }}>
          <Dialog>
            <DialogTrigger>
              <Button>zIndex: 10</Button>
            </DialogTrigger>
            <DialogContent
              container={element}
              overlayCss={{
                backgroundColor: '$success4',
                opacity: 0.9,
                position: 'absolute',
              }}
              css={{ position: 'absolute', marginTop: 0 }}
            >
              This is a dialog
            </DialogContent>
          </Dialog>
        </Box>
        <Box css={{ zIndex: 100, backgroundColor: '$info4' }}>
          <Dialog>
            <DialogTrigger>
              <Button>zIndex: 100</Button>
            </DialogTrigger>
            <DialogContent
              container={element}
              overlayCss={{
                backgroundColor: '$info4',
                opacity: 0.9,
                position: 'absolute',
              }}
              css={{ position: 'absolute', marginTop: 0 }}
            >
              This is a dialog
            </DialogContent>
          </Dialog>
        </Box>
        <Box css={{ zIndex: 1000, backgroundColor: '$warning4' }}>
          <Dialog>
            <DialogTrigger>
              <Button>zIndex: 1000</Button>
            </DialogTrigger>
            <DialogContent
              container={element}
              overlayCss={{
                backgroundColor: '$warning4',
                opacity: 0.9,
                position: 'absolute',
              }}
              css={{ position: 'absolute', marginTop: 0 }}
            >
              This is a dialog
            </DialogContent>
          </Dialog>
        </Box>
        <Box css={{ zIndex: 10000, backgroundColor: '$error4' }}>
          <Dialog>
            <DialogTrigger>
              <Button>zIndex: 10000</Button>
            </DialogTrigger>
            <DialogContent
              container={element}
              overlayCss={{
                backgroundColor: '$error4',
                opacity: 0.9,
                position: 'absolute',
              }}
              css={{ position: 'absolute', marginTop: 0 }}
            >
              This is a dialog
            </DialogContent>
          </Dialog>
        </Box>
      </Row>
      <Row
        css={{ position: 'relative', minHeight: '200px', minWidth: '100%' }}
        centered
        ref={setElement}
      >
        <Text>This area will now contain the dialog</Text>
      </Row>
    </Column>
  )
}
