import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react'
import { Heading } from '.'
import { Column } from '../'

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta

const Template: Story<ComponentProps<typeof Heading>> = (args) => (
  <Heading {...args}>This is a Heading</Heading>
)
export const Default = Template.bind({})

/**
 * The standard heading hX variants are supported, this, by default also adjusts the html tag
 */
export const Variants = () => (
  <Column>
    <Heading variant="h1">Heading 1</Heading>
    <Heading variant="h2">Heading 2</Heading>
    <Heading variant="h3">Heading 3</Heading>
    <Heading variant="h4">Heading 4</Heading>
    <Heading variant="h5">Heading 5</Heading>
    <Heading variant="h6">Heading 6</Heading>
  </Column>
)

/**
 * The display font can be used when a different heading style is required, say for blog posts.
 */
export const Display = () => (
  <Column>
    <Heading variant="h1" font="display">
      Heading 1
    </Heading>
    <Heading variant="h2" font="display">
      Heading 2
    </Heading>
    <Heading variant="h3" font="display">
      Heading 3
    </Heading>
    <Heading variant="h4" font="display">
      Heading 4
    </Heading>
    <Heading variant="h5" font="display">
      Heading 5
    </Heading>
    <Heading variant="h6" font="display">
      Heading 6
    </Heading>
  </Column>
)

/**
 * Heading will set the relevant tag by default, but this can still be overridden so a heading can be
 * given a different style but change the semantic tag so it's a better fit for the use on the page.
 */
export const Polymorphic = () => (
  <Heading as="h3" variant="h1">
    Really a h3
  </Heading>
)

/**
 * The underlying text component props are still available if the need to be used.
 */
export const TextProps = () => (
  <Heading variant="h1" size={3} css={{ color: '$primary' }} italic>
    Different h1
  </Heading>
)
