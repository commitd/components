import {
  Menu,
  MenuButton,
  MenuContent,
  MenuItem,
  MenuItemShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
} from '@committed/ds'

export const MenuExample = () => (
  <Menu>
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
)
