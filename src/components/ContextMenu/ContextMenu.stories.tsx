import { useBoolean } from '@committed/hooks'
import { ContextMenuSub } from '@radix-ui/react-context-menu'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuItemGroup,
  ContextMenuItemShortcut,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '.'
import { Flex } from '../Flex'
import {} from './ContextMenu'

export default {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  subcomponents: {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuItemGroup,
    ContextMenuItemShortcut,
    ContextMenuSeparator,
    ContextMenuLabel,
    ContextMenuCheckboxItem,
    ContextMenuRadioItem,
    ContextMenuRadioGroup,
    ContextMenuSub,
    ContextMenuSubTrigger,
    ContextMenuSubContent,
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
  <ContextMenu {...args}>
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
export const WithDisabledItems: Story = () => (
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

/** ContextMenuSeparator adds a separator between other items and can be used with Groups to create horizontal sections */
export const WithSeparators: Story = () => (
  <ContextMenu>
    <ContextMenuTrigger>
      <ClickTarget />
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem onSelect={action('cut')}>Cut</ContextMenuItem>
      <ContextMenuItem onSelect={action('copy')}>Copy</ContextMenuItem>
      <ContextMenuItem onSelect={action('paste')}>Paste</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItemGroup>
        <ContextMenuLabel>Edit</ContextMenuLabel>
        <ContextMenuSeparator orientation="vertical" />
        <ContextMenuItem>Cut</ContextMenuItem>
        <ContextMenuSeparator orientation="vertical" />
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuSeparator orientation="vertical" />
        <ContextMenuItem>Paste</ContextMenuItem>
      </ContextMenuItemGroup>
      <ContextMenuSeparator />
      <ContextMenuItem>Item</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
)

/** Add a label with ContextMenuLabel */
export const WithLabels: Story = () => (
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

/** Add shortcut indicators using the `ContextMenuItemShortcut` */
export const Shortcuts: Story = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <ClickTarget />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          New Tab <ContextMenuItemShortcut>⌘+T</ContextMenuItemShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          New Window <ContextMenuItemShortcut>⌘+N</ContextMenuItemShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

/** ContextMenuCheckboxItem adds an item that can be checked */
export const WithCheckboxItems: Story = () => {
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
export const WithRadioItems: Story = () => {
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

/** Create nested menus using a nested `Menu` component with a `MenuTriggerItem` and it's own `MenuContent` */
export const Nested: Story = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <ClickTarget />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          New Tab <ContextMenuItemShortcut>⌘+T</ContextMenuItemShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          New Window <ContextMenuItemShortcut>⌘+N</ContextMenuItemShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Developer</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Test</ContextMenuItem>
            <ContextMenuItem>Build</ContextMenuItem>
            <ContextMenuItem>Start</ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>More</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Test</ContextMenuItem>
                <ContextMenuItem>Build</ContextMenuItem>
                <ContextMenuItem>Start</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  )
}

/** use the `destructive flag to indicate the action triggered it destructive */
export const Destructive: Story = () => {
  const [checked, { toggle }] = useBoolean(true)
  const [color, setColor] = React.useState('blue')
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <ClickTarget />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Open <ContextMenuItemShortcut>⌘+O</ContextMenuItemShortcut>
        </ContextMenuItem>
        <ContextMenuItem destructive>
          Delete <ContextMenuItemShortcut>⌘+T</ContextMenuItemShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuItem destructive onSelect={action('cut')}>
          Cut
        </ContextMenuItem>
        <ContextMenuItem onSelect={action('copy')}>Copy</ContextMenuItem>
        <ContextMenuCheckboxItem checked={checked} onSelect={toggle}>
          Paste
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Colours</ContextMenuLabel>
        <ContextMenuRadioGroup value={color} onValueChange={setColor}>
          <ContextMenuRadioItem destructive value="red">
            Red
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="blue">Blue</ContextMenuRadioItem>
          <ContextMenuRadioItem value="green">Green</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
