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
import { Meta, StoryFn } from '@storybook/react'
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

export const Default: StoryFn = () => (
  <Drawer>
    <DrawerTrigger>
      <Button>Show Drawer</Button>
    </DrawerTrigger>
    <DrawerContent>This is a Drawer</DrawerContent>
  </Drawer>
)

/**
 * It is likely that the Drawer will need to be controlled to support further actions and different closing behaviours.
 * This can be done using the `open` and `onOpenChange` props.
 *
 * The position of the `DrawerContent` is controlled by the `side` prop and supports, `top`, `bottom`, `left` and `right`.
 */
export const Controllable: StoryFn = () => {
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
              <Heading variant="h3">This is a controlled drawer</Heading>
              <Text css={{ mt: '$3' }}>
                It can be closed by a click outside the drawer or using the esc
                key
              </Text>
            </Stack>
          </Padding>
        </DrawerContent>
      </Drawer>
    </Stack>
  )
}
