import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerPosition,
  DrawerTrigger,
  Heading,
  Padding,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@committed/ds'
import { useBoolean } from '@committed/hooks'
import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import {
  screen,
  userEvent,
  waitForElementToBeRemoved,
  within,
} from '@storybook/testing-library'
import React from 'react'

export default {
  title: 'Components/Drawer',
  component: Drawer,
  subcomponents: {
    DrawerContent,
    DrawerClose,
    DrawerTrigger,
  },
} as Meta

const defaultDrawerText = 'This is a Drawer'
const controlledDrawerText = 'This is a controlled drawer'

export const Default: StoryObj<typeof Drawer> = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger>
        <Button>Show Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>{defaultDrawerText}</DrawerContent>
    </Drawer>
  ),
  play: async ({ canvasElement }) => {
    const element = within(canvasElement)

    userEvent.click(element.getByRole('button'))
    const panel = await screen.findByText(defaultDrawerText)
    expect(panel).toBeInTheDocument()
    const waiting = waitForElementToBeRemoved(() =>
      screen.queryByText(defaultDrawerText),
    )
    userEvent.type(panel, '{Escape}')
    await waiting
  },
}

/**
 * It is likely that the Drawer will need to be controlled to support further actions and different closing behaviours.
 * This can be done using the `open` and `onOpenChange` props.
 *
 * The position of the `DrawerContent` is controlled by the `side` prop and supports, `top`, `bottom`, `left` and `right`.
 */
export const Controllable: StoryObj<typeof Drawer> = {
  render: (args) => {
    const [open, { setTrue, setFalse }] = useBoolean(false)
    const [side, setSide] = React.useState<DrawerPosition>('left')

    return (
      <Stack>
        <RadioGroup
          value={side}
          onValueChange={(s) => setSide(s as DrawerPosition)}
        >
          <Radio value="left">Left</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="top">Top</Radio>
          <Radio value="bottom">Bottom</Radio>
        </RadioGroup>
        <Button onClick={setTrue}>Show Drawer</Button>
        <Drawer open={open} onOpenChange={setFalse}>
          <DrawerContent side={side} defaultClose={true}>
            <Padding p="$2">
              <Stack>
                <Heading variant="h3">{controlledDrawerText}</Heading>
                <Text css={{ mt: '$3' }}>
                  It can be closed by a click outside the drawer or using the
                  esc key
                </Text>
              </Stack>
            </Padding>
          </DrawerContent>
        </Drawer>
      </Stack>
    )
  },
  play: async ({ canvasElement }) => {
    const element = within(canvasElement)

    userEvent.click(element.getByRole('button', { name: /show/i }))
    const panel = await screen.findByText(controlledDrawerText)
    expect(panel).toBeInTheDocument()
    const waiting = waitForElementToBeRemoved(() =>
      screen.queryByText(controlledDrawerText),
    )
    userEvent.click(screen.getByRole('button', { name: /close/i }))
    await waiting
  },
}
