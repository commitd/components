import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuItemCheckbox,
  MenuItemSeparator,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
} from '.'
import { action } from '@storybook/addon-actions'

import { Button } from '../Button'
import { useBoolean } from '@committed/hooks'

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta

export const Default: Story = (args) => <Menu {...args} />

export const Simple: React.FC = () => (
  <Menu>
    <MenuTrigger>
      <Button>Trigger</Button>
    </MenuTrigger>
    <MenuContent>
      <MenuItem onSelect={action('cut')}>Cut</MenuItem>
      <MenuItem onSelect={action('copy')}>Copy</MenuItem>
      <MenuItem onSelect={action('paste')}>Paste</MenuItem>
    </MenuContent>
  </Menu>
)

export const WithDisabledItems: React.FC = () => (
  <Menu>
    <MenuTrigger>
      <Button>Trigger</Button>
    </MenuTrigger>
    <MenuContent>
      <MenuItem disabled>Cut</MenuItem>

      <MenuItem>Copy</MenuItem>
    </MenuContent>
  </Menu>
)

export const WithSeparators: React.FC = () => (
  <Menu>
    <MenuTrigger>
      <Button>Trigger</Button>
    </MenuTrigger>
    <MenuContent>
      <MenuItem>Cut</MenuItem>
      <MenuItemSeparator />
      <MenuItem>Copy</MenuItem>
      <MenuItemSeparator />
      <MenuItem>Paste</MenuItem>
    </MenuContent>
  </Menu>
)

export const WithLabel: React.FC = () => (
  <Menu>
    <MenuTrigger>
      <Button>Trigger</Button>
    </MenuTrigger>
    <MenuContent>
      <MenuLabel>Actions</MenuLabel>
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
    </MenuContent>
  </Menu>
)

export const Controlled = () => {
  const [open, { setTrue, setFalse }] = useBoolean(false)
  return (
    <>
      <Menu open={open} onOpenChange={setFalse}>
        <MenuTrigger>
          <Button onClick={setTrue}>Show Menu</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem>Item</MenuItem>
        </MenuContent>
      </Menu>
    </>
  )
}

export const WithCheckbox = () => {
  const [checked, setChecked] = useState(true)
  return (
    <Menu>
      <MenuTrigger>
        <Button>Trigger</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItemCheckbox checked={checked} onCheckedChange={setChecked}>
          Cut
        </MenuItemCheckbox>
        <MenuItemCheckbox checked={false}>Paste</MenuItemCheckbox>
      </MenuContent>
    </Menu>
  )
}

export const WithRadioItems = () => {
  const [color, setColor] = React.useState('blue')
  return (
    <Menu>
      <MenuTrigger>
        <Button>Trigger</Button>
      </MenuTrigger>
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
