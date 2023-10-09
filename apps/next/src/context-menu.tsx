'use client'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuItemShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  Flex,
} from '@committed/ds'

export const ContextMenuExample = () => (
  <ContextMenu>
    <ContextMenuTrigger>
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
