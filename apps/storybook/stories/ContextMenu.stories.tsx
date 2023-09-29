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
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  Flex,
} from '@committed/ds'
import { useBoolean } from '@committed/hooks'
import { action } from '@storybook/addon-actions'
import { expect } from '@storybook/jest'
import { Meta, StoryFn } from '@storybook/react'
import {
  fireEvent,
  screen,
  userEvent,
  waitFor,
  within,
} from '@storybook/testing-library'
import React from 'react'

const subcomponents = {
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
} as unknown as Meta<typeof ContextMenu>['subcomponents']

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  subcomponents,
}

export default meta

const ClickTarget = () => (
  <Flex
    css={{
      backgroundColor: '$neutral4',
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

export const Default: StoryFn = (args) => (
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
export const WithDisabledItems: StoryFn = () => (
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
export const WithSeparators: StoryFn = () => (
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
export const WithLabels: StoryFn = () => (
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
export const Shortcuts: StoryFn = () => {
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
export const WithCheckboxItems: StoryFn = () => {
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
export const WithRadioItems: StoryFn = () => {
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
export const Nested: StoryFn = () => {
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
            <ContextMenuSub>
              <ContextMenuSubTrigger>More</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Run</ContextMenuItem>
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
export const Destructive: StoryFn = () => {
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

export const Surface: StoryFn = (args) => (
  <ContextMenu {...args}>
    <ContextMenuTrigger>
      <ClickTarget />
    </ContextMenuTrigger>
    <ContextMenuContent surface="glass">
      <ContextMenuItem onSelect={action('cut')}>Cut</ContextMenuItem>
      <ContextMenuItem onSelect={action('copy')}>Copy</ContextMenuItem>
      <ContextMenuItem onSelect={action('paste')}>Paste</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
)

export const TestContextMenu = {
  render: Default,
  play: async ({ canvasElement }) => {
    const element = within(canvasElement)

    fireEvent.contextMenu(element.getByText('Right click anywhere'))
    // Menu outside canvas element so using full screen
    await waitFor(() => {
      expect(screen.getByText('Cut')).toBeInTheDocument()
      expect(
        screen.getByRole('menuitem', { name: /copy/i }),
      ).toBeInTheDocument()
    })
  },
}

export const TestContextMenuNested = {
  render: Nested,
  args: {
    portalled: false,
  },
  play: async ({ canvasElement }) => {
    const element = within(canvasElement)

    fireEvent.contextMenu(element.getByText('Right click anywhere'))

    // Menu outside canvas element so using full screen
    await waitFor(() => {
      expect(
        screen.getByRole('menuitem', { name: /developer/i }),
      ).toBeInTheDocument()
      expect(
        screen.queryByRole('menuitem', { name: /test/i }),
      ).not.toBeInTheDocument()
    })

    userEvent.keyboard('[ArrowDown][ArrowDown][ArrowDown][ArrowRight]')

    await waitFor(() => {
      expect(
        screen.getByRole('menuitem', { name: /test/i }),
      ).toBeInTheDocument()
    })

    userEvent.keyboard('[ArrowDown][ArrowDown][Enter]')

    await waitFor(() => {
      expect(
        screen.getByRole('menuitem', { name: /start/i }),
      ).toBeInTheDocument()
    })
  },
}
