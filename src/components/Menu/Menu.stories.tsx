import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Menu, MenuTrigger, MenuContent, MenuItem, MenuItemCheckbox } from '.'

import { Button } from 'components/Button'
import { useBoolean } from '@committed/hooks'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { Content, Root, Trigger, Item } from '@radix-ui/react-dropdown-menu'

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta

export const Default: Story = (args) => <Menu {...args} />

// Use for Template args setup
// const Template: Story = (args) => <Menu {...args} />
// export const Primary = Template.bind({})
// Primary.args = {
// }

export const Simple: React.FC = () => (
  <Menu>
    <MenuTrigger>
      <Button>Trigger</Button>
    </MenuTrigger>
    <MenuContent>
      <MenuItem onSelect={() => console.log('cut')}>Cut</MenuItem>
      <MenuItem onSelect={() => console.log('copy')}>Copy</MenuItem>
      <MenuItem onSelect={() => console.log('paste')}>Paste</MenuItem>
    </MenuContent>
  </Menu>
)

export const Controlled = () => {
  const [open, { setTrue, setFalse }] = useBoolean(false)
  return (
    <>
      <Button onClick={setTrue}>Show Menu</Button>
      <Menu open={open} onOpenChange={setFalse}>
        <MenuTrigger>
          <span />
        </MenuTrigger>
        <MenuContent>sdfsdsd</MenuContent>
      </Menu>
    </>
  )
}

export const WithCheckbox = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Menu>
      <MenuTrigger>
        <Button>Trigger</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItemCheckbox
          checked={checked}
          onCheckedChange={(e) => {
            console.log(e)
            setChecked(e.target.checked)
          }}
        >
          Cut
        </MenuItemCheckbox>
      </MenuContent>
    </Menu>
  )
}
