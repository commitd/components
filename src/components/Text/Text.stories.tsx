import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react'
import { Text } from '.'
import { Column, Row } from '../'
export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    size: {
      control: { type: 'range', min: -2, max: 8, step: 1 },
    },
    weight: {
      control: {
        type: 'radio',
        options: ['light', 'regular', 'bold'],
      },
    },
    font: {
      control: {
        type: 'radio',
        options: ['default', 'system', 'display', 'monospace'],
      },
    },
    italic: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

const Template: Story<ComponentProps<typeof Text>> = (args) => (
  <Text {...args}>
    This is the regular text using the default settings in a longer paragraph,
    the sort you might read in a blog post. The reason we are using prose here
    is because the most common use case for this container size is long form
    text. So we're previewing some longform text here so we can make sure the
    container width provides an optimal line length for this font size.
  </Text>
)
export const Default = Template.bind({})

/**
 * The text is available in 11 size ranging from `-2` to `8` with 0 the default.
 */
export const Size = () => (
  <Column>
    <Text size={-2}>Size -2</Text>
    <Text size={-1}>Size -1</Text>
    <Text size={0}>Size 0 (Default)</Text>
    <Text size={1}>Size 1</Text>
    <Text size={2}>Size 2</Text>
    <Text size={3}>Size 3</Text>
    <Text size={4}>Size 4</Text>
    <Text size={5}>Size 5</Text>
    <Text size={6}>Size 6</Text>
    <Text size={7}>Size 7</Text>
    <Text size={8}>Size 8</Text>
  </Column>
)

export const Weight = () => (
  <Row css={{ justifyContent: 'space-between' }}>
    <Text weight="light">Light text</Text>
    <Text weight="regular">Regular text</Text>
    <Text weight="bold">Bold text</Text>
  </Row>
)

export const Fonts = () => (
  <Column>
    <Text font="default">Default font is Inter</Text>
    <Text font="system">
      System uses the system font, so is platform dependent, should not be used
      were layout is critical.
    </Text>
    <Text font="monospace">
      Monospace font can be set here but a separate pre based component is also
      available.
    </Text>
    <Text font="display">
      An additional display font is also supplied. This is likely only for use
      in, say, website/blog post headings where a visual contrast is desired.
    </Text>
  </Column>
)

export const Variations = () => (
  <Row
    css={{
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      alignItems: 'baseline',
    }}
  >
    <Text weight="light">Light</Text>
    <Text weight="bold">Bold</Text>
    <Text css={{ textTransform: 'uppercase' }}>uppercase</Text>
    <Text css={{ textTransform: 'capitalize' }}>capitalize</Text>
    <Text italic>Italic</Text>
    <Text css={{ color: '$primary' }}>Primary</Text>
    <Text css={{ color: '$secondary' }}>Secondary</Text>
    <Text as="s">strikethrough</Text>
    <Text as="s" css={{ textTransform: 'capitalize' }} weight="bold" italic>
      multiple
    </Text>
  </Row>
)
