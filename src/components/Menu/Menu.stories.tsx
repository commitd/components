import { useBoolean } from '@committed/hooks'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react'
import React, { useState } from 'react'
import {
  Menu,
  MenuButton,
  MenuCheckboxItem,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuItemShortcut,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
} from '.'
import { Avatar } from '../Avatar'
import { Chip } from '../Chip'
import { Row } from '../Flex'
import { Text } from '../Text'

export default {
  title: 'Components/Menu',
  component: Menu,
  subcomponents: {
    MenuTrigger,
    MenuContent,
    MenuItem,
    MenuCheckboxItem,
    MenuRadioItem,
    MenuSeparator,
    MenuItemShortcut,
    MenuLabel,
    MenuItemGroup,
    MenuRadioGroup,
    MenuTriggerItem,
    MenuButton,
  },
} as Meta

export const Default: Story = (args) => (
  <Menu {...args}>
    <MenuButton>Show Menu</MenuButton>
    <MenuContent>
      <MenuItem onSelect={action('cut')}>Cut</MenuItem>
      <MenuItem onSelect={action('copy')}>Copy</MenuItem>
      <MenuItem onSelect={action('paste')}>Paste</MenuItem>
    </MenuContent>
  </Menu>
)

export const WithDisabledItems: Story = () => (
  <Menu>
    <MenuButton>Show Menu</MenuButton>
    <MenuContent>
      <MenuItem disabled>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
    </MenuContent>
  </Menu>
)

/* Separators and Groups can be used to arrange items in vertical and horizontal sections */
export const WithSeparators: Story = () => (
  <Menu>
    <MenuButton>Show Menu</MenuButton>
    <MenuContent>
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
      <MenuSeparator />
      <MenuItemGroup>
        <MenuLabel>Edit</MenuLabel>
        <MenuSeparator orientation="vertical" />
        <MenuItem>Cut</MenuItem>
        <MenuSeparator orientation="vertical" />
        <MenuItem>Copy</MenuItem>
        <MenuSeparator orientation="vertical" />
        <MenuItem>Paste</MenuItem>
      </MenuItemGroup>
      <MenuSeparator />
      <MenuItem>Item</MenuItem>
    </MenuContent>
  </Menu>
)

export const WithLabel: Story = () => (
  <Menu>
    <MenuButton>Show Menu</MenuButton>
    <MenuContent>
      <MenuLabel>Actions</MenuLabel>
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
    </MenuContent>
  </Menu>
)

export const Controlled: Story = () => {
  const [open, { setTrue, setFalse }] = useBoolean(false)
  return (
    <>
      <Menu open={open} onOpenChange={setFalse}>
        <MenuButton onClick={setTrue}>Show Menu</MenuButton>
        <MenuContent>
          <MenuItem>Item</MenuItem>
        </MenuContent>
      </Menu>
    </>
  )
}

/* A `MenuCheckboxItem` are items with an indicated boolean state */
export const WithCheckbox: Story = () => {
  const [checked, setChecked] = useState(true)
  return (
    <Menu>
      <MenuButton>Show Menu</MenuButton>
      <MenuContent>
        <MenuCheckboxItem checked={checked} onCheckedChange={setChecked}>
          Cut
        </MenuCheckboxItem>
        <MenuCheckboxItem checked={false}>Paste</MenuCheckboxItem>
      </MenuContent>
    </Menu>
  )
}

/* `MenuItemRadioGroup` can be used to make sub `MenuRadioItem`s single select */
export const WithRadioItems: Story = () => {
  const [color, setColor] = React.useState('blue')
  return (
    <Menu>
      <MenuButton>Show Menu</MenuButton>
      <MenuContent>
        <MenuRadioGroup value={color} onValueChange={setColor}>
          <MenuRadioItem value="red">Red</MenuRadioItem>
          <MenuRadioItem value="green">Green</MenuRadioItem>
          <MenuRadioItem value="blue">Blue</MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  )
}

/** Add shortcut indicators using the `MenuItemShortcut` */
export const Shortcuts: Story = () => {
  return (
    <Menu>
      <MenuButton>Show Menu</MenuButton>
      <MenuContent>
        <MenuItem>
          New Tab <MenuItemShortcut>⌘+T</MenuItemShortcut>
        </MenuItem>
        <MenuItem>
          New Window <MenuItemShortcut>⌘+N</MenuItemShortcut>
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}

/** The menu can be triggers from other components using the `MenuTrigger` */
export const WithTrigger: Story = () => {
  return (
    <Row gap css={{ alignItems: 'center' }}>
      <Menu>
        <MenuTrigger>
          <Text css={{ cursor: 'pointer' }}>Show Menu</Text>
        </MenuTrigger>
        <MenuContent>
          <MenuItem onSelect={action('cut')}>Cut</MenuItem>
          <MenuItem onSelect={action('copy')}>Copy</MenuItem>
          <MenuItem onSelect={action('paste')}>Paste</MenuItem>
        </MenuContent>
      </Menu>
      <Menu>
        <MenuTrigger>
          <Avatar
            size="small"
            alt="Show Menu"
            src="https://i.pravatar.cc"
            css={{ cursor: 'pointer' }}
          />
        </MenuTrigger>
        <MenuContent>
          <MenuItem onSelect={action('cut')}>Cut</MenuItem>
          <MenuItem onSelect={action('copy')}>Copy</MenuItem>
          <MenuItem onSelect={action('paste')}>Paste</MenuItem>
        </MenuContent>
      </Menu>
      <Menu>
        <MenuTrigger>
          <Chip interactive variant="success">
            Show Menu
          </Chip>
        </MenuTrigger>
        <MenuContent>
          <MenuItem onSelect={action('cut')}>Cut</MenuItem>
          <MenuItem onSelect={action('copy')}>Copy</MenuItem>
          <MenuItem onSelect={action('paste')}>Paste</MenuItem>
        </MenuContent>
      </Menu>
    </Row>
  )
}

/** Create nested menus using a nested `Menu` component with a `MenuTriggerItem` and it's own `MenuContent` */
export const Nested: Story = () => {
  return (
    <Menu>
      <MenuButton>Show Menu</MenuButton>
      <MenuContent>
        <MenuItem>
          New Tab <MenuItemShortcut>⌘+T</MenuItemShortcut>
        </MenuItem>
        <MenuItem>
          New Window <MenuItemShortcut>⌘+N</MenuItemShortcut>
        </MenuItem>
        <Menu>
          <MenuTriggerItem>Developer</MenuTriggerItem>
          <MenuContent sideOffset={8}>
            <MenuItem>Test</MenuItem>
            <MenuItem>Build</MenuItem>
            <MenuItem>Start</MenuItem>
            <Menu>
              <MenuTriggerItem>More</MenuTriggerItem>
              <MenuContent sideOffset={8}>
                <MenuItem>Test</MenuItem>
                <MenuItem>Build</MenuItem>
                <MenuItem>Start</MenuItem>
              </MenuContent>
            </Menu>
          </MenuContent>
        </Menu>
      </MenuContent>
    </Menu>
  )
}

/* Visual test for different size menu buttons and potential menu overlap */
export const MultipleMenus: Story = () => {
  const [checked, setChecked] = useState(true)
  const [color, setColor] = React.useState('blue')
  return (
    <Row gap>
      <Menu>
        <MenuButton size="large">Menu 1</MenuButton>
        <MenuContent>
          <MenuCheckboxItem checked={checked} onCheckedChange={setChecked}>
            Cut
          </MenuCheckboxItem>
          <MenuCheckboxItem checked={false}>Paste</MenuCheckboxItem>
        </MenuContent>
      </Menu>
      <Menu>
        <MenuButton>Menu 2</MenuButton>
        <MenuContent>
          <MenuRadioGroup value={color} onValueChange={setColor}>
            <MenuRadioItem value="red">Red</MenuRadioItem>
            <MenuRadioItem value="green">Green</MenuRadioItem>
            <MenuRadioItem value="blue">Blue</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
      <Menu>
        <MenuButton size="small">Menu 3</MenuButton>
        <MenuContent>
          <MenuRadioGroup value={color} onValueChange={setColor}>
            <MenuRadioItem value="red">Red</MenuRadioItem>
            <MenuRadioItem value="green">Green</MenuRadioItem>
            <MenuRadioItem value="blue">Blue</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    </Row>
  )
}

/** use the `destructive` flag to show the item triggers a destructive action */
export const Destructive: Story = () => {
  const [color, setColor] = React.useState('blue')
  const [checked, setChecked] = useState(true)
  return (
    <Menu>
      <MenuButton>Show Menu</MenuButton>
      <MenuContent>
        <MenuItem>
          Open <MenuItemShortcut>⌘+O</MenuItemShortcut>
        </MenuItem>
        <MenuItem destructive>
          Delete <MenuItemShortcut>⌘+D</MenuItemShortcut>
        </MenuItem>
        <MenuSeparator />
        <MenuRadioGroup value={color} onValueChange={setColor}>
          <MenuRadioItem destructive value="red">
            Red
          </MenuRadioItem>
          <MenuRadioItem value="green">Green</MenuRadioItem>
          <MenuRadioItem value="blue">Blue</MenuRadioItem>
        </MenuRadioGroup>
        <MenuSeparator />
        <MenuCheckboxItem
          destructive
          checked={checked}
          onCheckedChange={setChecked}
        >
          Mark
        </MenuCheckboxItem>
      </MenuContent>
    </Menu>
  )
}
