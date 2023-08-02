import { mdiAlertCircleOutline } from '@mdi/js'
import { Meta, StoryFn } from '@storybook/react'
import React, { ComponentProps } from 'react'
import {
  Popover,
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '.'
import { Box, Button, Heading, Monospace, Paragraph, Svg, Text } from '../'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  subcomponents: {
    PopoverTrigger,
    PopoverContent,
    PopoverAnchor,
    PopoverClose,
  },
}
export default meta

export const Default: StoryFn<ComponentProps<typeof Popover>> = (args) => (
  <Popover {...args}>
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

export const Anchored: StoryFn = (args) => (
  <Popover>
    <Text>
      You can use a{' '}
      <PopoverAnchor>
        <Monospace
          inline
          css={{
            backgroundColor: '$info3',
          }}
        >
          PopoverAnchor
        </Monospace>
      </PopoverAnchor>{' '}
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

export const NestedAnchored: StoryFn = (args) => (
  <Popover>
    <PopoverAnchor>
      <Box
        css={{
          display: 'flex',
          padding: '$4',
          backgroundColor: '$info3',
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
      </Box>
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
