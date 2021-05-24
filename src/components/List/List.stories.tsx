import React from 'react'
import { Meta } from '@storybook/react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '.'
import { Box, Button, Flex } from '..'

import { Check } from '../Icons'

export default {
  title: 'Components/List',
  component: List,
} as Meta

export const Default: React.FC = () => {
  return (
    <Flex css={{ background: '$background', justifyContent: 'center' }}>
      <Box css={{ background: '$paper', minWidth: '500px', margin: '$3' }}>
        <List as="nav" aria-label="main mailbox folders">
          <ListItem interactive>
            <ListItemIcon>
              {/* drafts */}
              <Check />
            </ListItemIcon>
            <ListItemText text="Inbox" />
          </ListItem>
          <ListItem interactive>
            <ListItemIcon>
              {/* inbox */}
              <Check />
            </ListItemIcon>
            <ListItemText text="Drafts" />
          </ListItem>
        </List>
        <hr />
        <List as="nav" aria-label="secondary mailbox folders">
          <ListItem interactive>
            <ListItemText text="Trash" />
          </ListItem>
          <ListItem interactive>
            <ListItemText text="Spam" />
          </ListItem>
        </List>
      </Box>
    </Flex>
  )
}

export const WithIcons: React.FC = () => {
  return (
    <Flex css={{ background: '$background', justifyContent: 'center' }}>
      <Box css={{ background: '$paper', minWidth: '500px', margin: '$3' }}>
        <List>
          <ListItem interactive>
            <ListItemIcon>
              {/*
              button in a button
              causes browser to lockup
              <Checkbox/>
            */}
            </ListItemIcon>
            <ListItemText text={`Line item`} />
            <ListItemSecondaryAction>
              <Button aria-label="comments">
                {/* comment */}
                <Check />
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
    </Flex>
  )
}

export const WithSecondary: React.FC = () => {
  return (
    <Flex css={{ background: '$background', justifyContent: 'center' }}>
      <Box css={{ background: '$paper', minWidth: '500px', margin: '$3' }}>
        <List>
          <ListItem>
            <ListItemText text="Item" subtext="secondary" />
          </ListItem>
        </List>
      </Box>
    </Flex>
  )
}
