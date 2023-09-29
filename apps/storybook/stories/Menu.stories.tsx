import {
  Avatar,
  Chip,
  Inline,
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
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
  Text,
} from '@committed/ds'
import { useBoolean } from '@committed/hooks'
import { action } from '@storybook/addon-actions'
import { expect } from '@storybook/jest'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { screen, userEvent, waitFor } from '@storybook/testing-library'
import { useState } from 'react'

const subcomponents = {
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
  MenuButton,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
} as unknown as Meta<typeof Menu>['subcomponents']

export default {
  title: 'Components/Menu',
  component: Menu,
  subcomponents,
} satisfies Meta<typeof Menu>

type Story = StoryObj<typeof Menu>

export const Default: Story = {
  render: (args) => (
    <Menu {...args}>
      <MenuButton>Show Menu</MenuButton>
      <MenuContent>
        <MenuItem onSelect={action('cut')}>Cut</MenuItem>
        <MenuItem onSelect={action('copy')}>Copy</MenuItem>
        <MenuItem onSelect={action('paste')}>Paste</MenuItem>
      </MenuContent>
    </Menu>
  ),
}

export const WithDisabledItems: Story = {
  render: () => (
    <Menu>
      <MenuButton>Show Menu</MenuButton>
      <MenuContent>
        <MenuItem disabled>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
      </MenuContent>
    </Menu>
  ),
}

/* Separators and Groups can be used to arrange items in vertical and horizontal sections */
export const WithSeparators: StoryFn = () => (
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

export const WithLabel: StoryFn = () => (
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

export const Controlled: StoryFn = () => {
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
export const WithCheckbox: StoryFn = () => {
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
export const WithRadioItems: StoryFn = () => {
  const [color, setColor] = useState('blue')
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
export const Shortcuts: StoryFn = () => {
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
export const WithTrigger: StoryFn = () => {
  return (
    <Inline css={{ alignItems: 'center' }}>
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
          <Chip colorPalette="$success" interactive>
            Show Menu
          </Chip>
        </MenuTrigger>
        <MenuContent>
          <MenuItem onSelect={action('cut')}>Cut</MenuItem>
          <MenuItem onSelect={action('copy')}>Copy</MenuItem>
          <MenuItem onSelect={action('paste')}>Paste</MenuItem>
        </MenuContent>
      </Menu>
    </Inline>
  )
}

/** Create nested menus using a nested `Menu` component with a `MenuTriggerItem` and it's own `MenuContent` */
export const Nested: Story = {
  render: (args) => (
    <Menu {...args}>
      <MenuButton>Show Menu</MenuButton>
      <MenuContent>
        <MenuItem>
          New Tab <MenuItemShortcut>⌘+T</MenuItemShortcut>
        </MenuItem>
        <MenuItem>
          New Window <MenuItemShortcut>⌘+N</MenuItemShortcut>
        </MenuItem>
        <MenuSub>
          <MenuSubTrigger>Developer</MenuSubTrigger>
          <MenuSubContent>
            <MenuItem>Test</MenuItem>
            <MenuItem>Build</MenuItem>
            <MenuSub>
              <MenuSubTrigger>More</MenuSubTrigger>
              <MenuSubContent>
                <MenuItem>Run</MenuItem>
                <MenuItem>Start</MenuItem>
              </MenuSubContent>
            </MenuSub>
          </MenuSubContent>
        </MenuSub>
      </MenuContent>
    </Menu>
  ),
}

/* Visual test for different size menu buttons and potential menu overlap */
export const MultipleMenus: StoryFn = () => {
  const [checked, setChecked] = useState(true)
  const [color, setColor] = useState('blue')
  return (
    <Inline>
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
    </Inline>
  )
}

/** use the `destructive` flag to show the item triggers a destructive action */
export const Destructive: Story = {
  render: () => {
    const [color, setColor] = useState('blue')
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
  },
}

export const TestMenu = {
  ...Default,
  play: async () => {
    userEvent.tab()
    await waitFor(() => expect(screen.getByRole('button')).toHaveFocus())
    userEvent.keyboard('{Enter}')
    expect(await screen.findByText('Cut')).toBeInTheDocument()
  },
}

export const TestNestedMenu = {
  ...Nested,
  play: async () => {
    expect(
      screen.queryByRole('menuitem', { name: /test/i }),
    ).not.toBeInTheDocument()

    userEvent.tab()

    await waitFor(() => expect(screen.getByRole('button')).toHaveFocus())

    userEvent.keyboard('{Enter}')

    await waitFor(() => {
      expect(
        screen.getByRole('menuitem', { name: /developer/i }),
      ).toBeInTheDocument()
      expect(
        screen.queryByRole('menuitem', { name: /test/i }),
      ).not.toBeInTheDocument()
    })

    userEvent.click(screen.getByRole('menuitem', { name: /developer/i }))

    await waitFor(() => {
      expect(
        screen.getByRole('menuitem', { name: /test/i }),
      ).toBeInTheDocument()
    })

    userEvent.click(screen.getByRole('menuitem', { name: /more/i }))

    await waitFor(() => {
      expect(
        screen.getByRole('menuitem', { name: /start/i }),
      ).toBeInTheDocument()
    })

    userEvent.click(screen.getByRole('menuitem', { name: /start/i }))

    await waitFor(() => {
      expect(screen.getByRole('button')).toHaveFocus()
      expect(
        screen.queryByRole('menuitem', { name: /start/i }),
      ).not.toBeInTheDocument()
      expect(
        screen.queryByRole('menuitem', { name: /test/i }),
      ).not.toBeInTheDocument()
      expect(
        screen.queryByRole('menuitem', { name: /developer/i }),
      ).not.toBeInTheDocument()
    })
  },
}

export const TestDestructiveMenu = {
  ...Destructive,
  play: async () => {
    expect(
      screen.queryByRole('menuitem', { name: /delete/i }),
    ).not.toBeInTheDocument()
    userEvent.tab()
    await waitFor(() => expect(screen.getByRole('button')).toHaveFocus())
    userEvent.keyboard('{Enter}')
    await waitFor(() => {
      expect(
        screen.queryByRole('menuitem', { name: /delete/i }),
      ).toBeInTheDocument()
    })
  },
}
