import {
  Background,
  Button,
  Heading,
  Inline,
  Monospace,
  Padding,
  Paragraph,
  Popover,
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Row,
  Svg,
  Text,
} from '@committed/ds'
import { mdiAlertCircleOutline } from '@mdi/js'
import { Meta, StoryFn } from '@storybook/react'
import { ComponentProps } from 'react'

export default {
  title: 'Components/Popover',
  component: Popover,
  subcomponents: {
    PopoverTrigger,
    PopoverContent,
    PopoverAnchor,
    PopoverClose,
  },
} satisfies Meta<typeof Popover>

export const Default: StoryFn<ComponentProps<typeof Popover>> = (args) => (
  <Popover {...args}>
    <PopoverTrigger>
      <Button>Trigger</Button>
    </PopoverTrigger>
    <PopoverContent>
      <Heading variant="h5">Popover content</Heading>
      <Paragraph>Are you sure you wanna do this?</Paragraph>
      <PopoverClose>
        <Button variant="solid">Yes</Button>
      </PopoverClose>
    </PopoverContent>
  </Popover>
)

export const Anchored: StoryFn = (args) => (
  <Popover>
    <Text>
      You can use a{' '}
      <PopoverAnchor>
        <Background bg="$info.3">
          <Monospace inline>PopoverAnchor</Monospace>
        </Background>
      </PopoverAnchor>{' '}
      to anchor the popover to a different element{' '}
      <PopoverTrigger>
        <Svg
          css={{ color: '$text.secondary', cursor: 'pointer' }}
          path={mdiAlertCircleOutline}
        />
      </PopoverTrigger>
    </Text>
    <PopoverContent>
      <Heading variant="h5">Popover content</Heading>
      <Paragraph>Are you sure you wanna do this?</Paragraph>
      <PopoverClose>
        <Button variant="solid">Yes</Button>
      </PopoverClose>
    </PopoverContent>
  </Popover>
)

export const NestedAnchored: StoryFn = (args) => (
  <Popover>
    <PopoverAnchor>
      <Padding p="$4">
        <Background bg="$info.3">
          <Row justifyContent="center">
            <Text>
              The <Monospace>PopoverAnchor</Monospace> can have the trigger{' '}
              <PopoverTrigger>
                <Svg
                  css={{
                    color: '$text.secondary',
                    cursor: 'pointer',
                  }}
                  path={mdiAlertCircleOutline}
                />
              </PopoverTrigger>{' '}
              nested inside
            </Text>
          </Row>
        </Background>
      </Padding>
    </PopoverAnchor>
    <PopoverContent>
      <Heading variant="h5">Popover content</Heading>
      <Paragraph>Are you sure you want to delete this?</Paragraph>
      <Inline align="right">
        <PopoverClose>
          <Button variant="text" colorPalette="$neutral">
            No
          </Button>
        </PopoverClose>
        <PopoverClose>
          <Button variant="solid" destructive>
            Yes
          </Button>
        </PopoverClose>
      </Inline>
    </PopoverContent>
  </Popover>
)
