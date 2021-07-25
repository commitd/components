import { mdiAlertCircleOutline } from '@mdi/js'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import {
  Popover,
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '.'
import { Button, Flex, Heading, Monospace, Paragraph, Svg, Text } from '../'

export default {
  title: 'Components/Popover',
  component: Popover,
  subcomponents: {
    PopoverTrigger,
    PopoverContent,
    PopoverAnchor,
    PopoverClose,
  },
} as Meta

export const Default: Story = (args) => (
  <Popover>
    <PopoverTrigger>
      <Button>Trigger</Button>
    </PopoverTrigger>
    <PopoverContent>
      <Heading variant="h5">Popover content</Heading>
      <Paragraph>Are you sure you wanna do this?</Paragraph>
      <PopoverClose>
        <Button variant="primary">Yes</Button>
      </PopoverClose>
    </PopoverContent>
  </Popover>
)

export const Anchored: Story = (args) => (
  <Popover>
    <Text>
      You can use a{' '}
      <PopoverAnchor as="span">
        <Monospace
          css={{
            backgroundColor: '$blue3',
          }}
        >
          PopoverAnchor
        </Monospace>
      </PopoverAnchor>
      to anchor the popover to a different element{' '}
      <PopoverTrigger>
        <Svg
          css={{ color: '$textSecondary', cursor: 'pointer' }}
          path={mdiAlertCircleOutline}
        />
      </PopoverTrigger>
    </Text>
    <PopoverContent>
      <Heading variant="h5">Popover content</Heading>
      <Paragraph>Are you sure you wanna do this?</Paragraph>
      <PopoverClose>
        <Button variant="primary">Yes</Button>
      </PopoverClose>
    </PopoverContent>
  </Popover>
)

export const NestedAnchored: Story = (args) => (
  <Popover>
    <PopoverAnchor>
      <Flex
        css={{
          padding: '$4',
          backgroundColor: '$blue3',
          justifyContent: 'center',
        }}
      >
        <Text>
          The <Monospace>PopoverAnchor</Monospace> can have the trigger{' '}
          <PopoverTrigger>
            <Svg
              css={{ color: '$textSecondary', cursor: 'pointer', mt: '$3' }}
              path={mdiAlertCircleOutline}
            />
          </PopoverTrigger>{' '}
          nested inside
        </Text>
      </Flex>
    </PopoverAnchor>
    <PopoverContent>
      <Heading variant="h5">Popover content</Heading>
      <Paragraph>Are you sure you wanna do this?</Paragraph>
      <PopoverClose>
        <Button variant="primary">Yes</Button>
      </PopoverClose>
    </PopoverContent>
  </Popover>
)
