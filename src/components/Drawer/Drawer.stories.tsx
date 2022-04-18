import { useBoolean } from '@committed/hooks'
import { Meta } from '@storybook/react'
import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerPosition,
  DrawerTrigger,
} from '.'
import {
  Button,
  ChevronDown,
  Column,
  Heading,
  Menu,
  MenuContent,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
  Text,
} from '../'

export default {
  title: 'Components/Drawer',
  component: Drawer,
  subcomponents: {
    DrawerContent,
    DrawerClose,
    DrawerTrigger,
  },
} as Meta

export const Default = () => (
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
export const Controllable = () => {
  const [open, { setTrue, setFalse }] = useBoolean(false)
  const [side, setSide] = React.useState<DrawerPosition>('left')

  return (
    <>
      <Menu>
        <MenuTrigger>
          <Button>
            Position
            <ChevronDown css={{ mr: '-$2' }} />
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuRadioGroup
            value={side}
            onValueChange={(s) => setSide(s as DrawerPosition)}
          >
            <MenuRadioItem value="left">Left</MenuRadioItem>
            <MenuRadioItem value="right">Right</MenuRadioItem>
            <MenuRadioItem value="top">Top</MenuRadioItem>
            <MenuRadioItem value="bottom">Bottom</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
      <Button css={{ ml: '$3' }} onClick={setTrue}>
        Show Drawer
      </Button>
      <Drawer open={open} onOpenChange={setFalse}>
        <DrawerContent side={side} defaultClose={true}>
          <Column css={{ p: '$2' }}>
            <Heading variant="h3">This is a controlled drawer</Heading>
            <Text css={{ mt: '$3' }}>
              It can be closed by a click outside the drawer or using the esc
              key
            </Text>
          </Column>
        </DrawerContent>
      </Drawer>
    </>
  )
}
