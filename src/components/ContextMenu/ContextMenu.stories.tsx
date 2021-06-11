import React from 'react'
import { Story, Meta } from '@storybook/react'
import {
  ContextMenuRoot,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuRadioGroup,
} from '.'
import { Flex } from '../Flex'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/ContextMenu',
  component: ContextMenuRoot,
  subcomponents: {
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
  },
} as Meta

const ClickTarget = () => (
  <Flex
    css={{
      backgroundColor: '$grey4',
      color: '$text',
      padding: '$2',
      minHeight: 600,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    Right click anywhere
  </Flex>
)

export const Default: Story = (args) => (
  <ContextMenuRoot>
    <ContextMenuTrigger>
      <ClickTarget />
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem onSelect={() => action('cut')}>Cut</ContextMenuItem>
      <ContextMenuItem onSelect={() => action('copy')}>Copy</ContextMenuItem>
      <ContextMenuItem onSelect={() => action('paste')}>Paste</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenuRoot>
)

/** The disabled prop greys out the item and makes it unselectable  */
export const WithDisabledItems: Story = (args) => (
  <ContextMenuRoot>
    <ContextMenuTrigger>
      <ClickTarget />
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem disabled onSelect={() => action('cut')}>
        Cut
      </ContextMenuItem>
      <ContextMenuItem onSelect={() => action('copy')}>Copy</ContextMenuItem>
      <ContextMenuItem onSelect={() => action('paste')}>Paste</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenuRoot>
)

/** ContextMenuSeparator adds a separator between other items  */
export const WithSeparators: Story = (args) => (
  <ContextMenuRoot>
    <ContextMenuTrigger>
      <ClickTarget />
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem onSelect={() => action('cut')}>Cut</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem onSelect={() => action('copy')}>Copy</ContextMenuItem>
      <ContextMenuItem onSelect={() => action('paste')}>Paste</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenuRoot>
)

/** Add a label with ContextMenuLabel */
export const WithLabels: Story = (args) => (
  <ContextMenuRoot>
    <ContextMenuTrigger>
      <ClickTarget />
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuLabel>Actions</ContextMenuLabel>
      <ContextMenuItem onSelect={() => action('cut')}>Cut</ContextMenuItem>
      <ContextMenuItem onSelect={() => action('copy')}>Copy</ContextMenuItem>
      <ContextMenuItem onSelect={() => action('paste')}>Paste</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenuRoot>
)

/** ContextMenuCheckboxItem adds an item that can be checked */
export const WithCheckboxItems: Story = (args) => (
  <ContextMenuRoot>
    <ContextMenuTrigger>
      <ClickTarget />
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuLabel>Actions</ContextMenuLabel>
      <ContextMenuItem onSelect={() => action('cut')}>Cut</ContextMenuItem>
      <ContextMenuItem onSelect={() => action('copy')}>Copy</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuCheckboxItem checked onSelect={() => action('paste')}>
        Paste
      </ContextMenuCheckboxItem>
    </ContextMenuContent>
  </ContextMenuRoot>
)

/** ContextMenuRadioItem when wrapped in a ContextMenuRadioGroup adds an item that can be checked with only one item in the group checked at once */
export const WithRadioItems: Story = (args) => {
  const [color, setColor] = React.useState('blue')
  return (
    <ContextMenuRoot>
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
    </ContextMenuRoot>
  )
}
