import {
  Box,
  Button,
  Close as CloseIcon,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  IconButton,
  Inline,
  Link,
  Row,
  Stack,
  Text,
} from '@committed/ds'
import { useBoolean } from '@committed/hooks'
import { action } from '@storybook/addon-actions'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  subcomponents: {
    DialogContent,
    DialogTrigger,
    DialogClose,
    DialogTitle,
    DialogDescription,
  },
}
export default meta

export const Default: StoryFn = () => (
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
export const Controllable: StoryFn = () => {
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
export const CloseButton: StoryFn = () => {
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
              <Button variant="solid" onClick={action('CloseButton')}>
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
 * In addition, the `ComponentsProvider`, by default, isolates the children in their own stacking context so this will not be affected by the z-index of other elements of the UI.
 *
 * This example shows how the z-index of other elements in the UI do not affect the dialog.
 *
 * This may not be the desired behaviour for your application so these defaults can be overridden, see below.
 */
export const Portalled: StoryFn = () => {
  return (
    <Inline align="center">
      <Dialog>
        <DialogTrigger>
          <Button>Default</Button>
        </DialogTrigger>
        <DialogContent overlayCss={{ backgroundColor: '$paper', opacity: 0.9 }}>
          This is a dialog
        </DialogContent>
      </Dialog>
      <Box css={{ zIndex: 10, backgroundColor: '$success.4' }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 10</Button>
          </DialogTrigger>
          <DialogContent
            overlayCss={{ backgroundColor: '$success.4', opacity: 0.9 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{ zIndex: 100, backgroundColor: '$info.4' }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 100</Button>
          </DialogTrigger>
          <DialogContent
            overlayCss={{ backgroundColor: '$info.4', opacity: 0.9 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{ zIndex: 1000, backgroundColor: '$warn.4' }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 1000</Button>
          </DialogTrigger>
          <DialogContent
            overlayCss={{ backgroundColor: '$warn.4', opacity: 0.9 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{ zIndex: 10000, backgroundColor: '$error.4' }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 10000</Button>
          </DialogTrigger>
          <DialogContent
            overlayCss={{ backgroundColor: '$error.4', opacity: 0.9 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
    </Inline>
  )
}

/**
 * Turning off portalling will mean the zIndex of the dialog will be relative to the zIndex of the element it is appended to.
 */
export const zIndex: StoryFn = () => {
  return (
    <Inline align="center">
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
      <Box css={{ zIndex: 10, backgroundColor: '$success.4' }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 10</Button>
          </DialogTrigger>
          <DialogContent
            portalled={false}
            overlayCss={{ backgroundColor: '$success.4', opacity: 0.9 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{ zIndex: 100, backgroundColor: '$info.4' }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 100</Button>
          </DialogTrigger>
          <DialogContent
            portalled={false}
            overlayCss={{ backgroundColor: '$info.11.a', opacity: 0.9 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{ zIndex: 1000, backgroundColor: '$warn.4' }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 1000</Button>
          </DialogTrigger>
          <DialogContent
            portalled={false}
            overlayCss={{ backgroundColor: '$warn.4', opacity: 0.9 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{ zIndex: 10000, backgroundColor: '$error.4' }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 10000</Button>
          </DialogTrigger>
          <DialogContent
            portalled={false}
            overlayCss={{ backgroundColor: '$error.4', opacity: 0.9 }}
          >
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
    </Inline>
  )
}

/**
 * The element the dialog portals to can be provided, and different effects can be achieved by supplying additional css. For example:
 */
export const Container: StoryFn = () => {
  const [element, setElement] = useState<HTMLElement | null>(null)

  return (
    <Stack align="center">
      <Inline align="center">
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
        <Box css={{ zIndex: 10, backgroundColor: '$success.4' }}>
          <Dialog>
            <DialogTrigger>
              <Button>zIndex: 10</Button>
            </DialogTrigger>
            <DialogContent
              container={element}
              overlayCss={{
                backgroundColor: '$success.4',
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
                backgroundColor: '$info.4',
                opacity: 0.9,
                position: 'absolute',
              }}
              css={{ position: 'absolute', marginTop: 0 }}
            >
              This is a dialog
            </DialogContent>
          </Dialog>
        </Box>
        <Box css={{ zIndex: 1000, backgroundColor: '$warn.4' }}>
          <Dialog>
            <DialogTrigger>
              <Button>zIndex: 1000</Button>
            </DialogTrigger>
            <DialogContent
              container={element}
              overlayCss={{
                backgroundColor: '$warn.4',
                opacity: 0.9,
                position: 'absolute',
              }}
              css={{ position: 'absolute', marginTop: 0 }}
            >
              This is a dialog
            </DialogContent>
          </Dialog>
        </Box>
        <Box css={{ zIndex: 10000, backgroundColor: '$error.4' }}>
          <Dialog>
            <DialogTrigger>
              <Button>zIndex: 10000</Button>
            </DialogTrigger>
            <DialogContent
              container={element}
              overlayCss={{
                backgroundColor: '$error.4',
                opacity: 0.9,
                position: 'absolute',
              }}
              css={{ position: 'absolute', marginTop: 0 }}
            >
              This is a dialog
            </DialogContent>
          </Dialog>
        </Box>
      </Inline>
      <Row
        css={{ position: 'relative', minHeight: '200px', minWidth: '100%' }}
        centered
        ref={setElement}
      >
        <Text>This area will now contain the dialog</Text>
      </Row>
    </Stack>
  )
}
