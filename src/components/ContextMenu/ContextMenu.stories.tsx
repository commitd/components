import { useBoolean } from '@committed/hooks'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '.'
import { Flex } from '../Flex'

export default {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  subcomponents: {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuLabel,
    ContextMenuCheckboxItem,
    ContextMenuRadioItem,
    ContextMenuRadioGroup,
  },
} as Meta

const ClickTarget = () => (
  <Flex
    css={{
      backgroundColor: '$grey4',
      color: '$text',
      padding: '$2',
      minHeight: 150,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    Right click anywhere
  </Flex>
)

export const Default: Story = (args) => (
  <ContextMenu>
    <ContextMenuTrigger>
      <ClickTarget />
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem onSelect={action('cut')}>Cut</ContextMenuItem>
      <ContextMenuItem onSelect={action('copy')}>Copy</ContextMenuItem>
      <ContextMenuItem onSelect={action('paste')}>Paste</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
)

/** The disabled prop greys out the item and makes it unselectable  */
export const WithDisabledItems: Story = (args) => (
  <ContextMenu>
    <ContextMenuTrigger>
      <ClickTarget />
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem disabled onSelect={action('cut')}>
        Cut
      </ContextMenuItem>
      <ContextMenuItem onSelect={action('copy')}>Copy</ContextMenuItem>
      <ContextMenuItem onSelect={action('paste')}>Paste</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
)

/** ContextMenuSeparator adds a separator between other items  */
export const WithSeparators: Story = (args) => (
  <ContextMenu>
    <ContextMenuTrigger>
      <ClickTarget />
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem onSelect={action('cut')}>Cut</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem onSelect={action('copy')}>Copy</ContextMenuItem>
      <ContextMenuItem onSelect={action('paste')}>Paste</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
)

/** Add a label with ContextMenuLabel */
export const WithLabels: Story = (args) => (
  <ContextMenu>
    <ContextMenuTrigger>
      <ClickTarget />
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuLabel>Actions</ContextMenuLabel>
      <ContextMenuItem onSelect={action('cut')}>Cut</ContextMenuItem>
      <ContextMenuItem onSelect={action('copy')}>Copy</ContextMenuItem>
      <ContextMenuItem onSelect={action('paste')}>Paste</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
)

/** ContextMenuCheckboxItem adds an item that can be checked */
export const WithCheckboxItems: Story = (args) => {
  const [checked, { toggle }] = useBoolean(true)
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <ClickTarget />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuItem onSelect={action('cut')}>Cut</ContextMenuItem>
        <ContextMenuItem onSelect={action('copy')}>Copy</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked={checked} onSelect={toggle}>
          Paste
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

/** ContextMenuRadioItem when wrapped in a ContextMenuRadioGroup adds an item that can be checked with only one item in the group checked at once */
export const WithRadioItems: Story = (args) => {
  const [color, setColor] = React.useState('blue')
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <ClickTarget />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuRadioGroup value={color} onValueChange={setColor}>
          <ContextMenuRadioItem value="red">Red</ContextMenuRadioItem>
          <ContextMenuRadioItem value="blue">Blue</ContextMenuRadioItem>
          <ContextMenuRadioItem value="green">Green</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
