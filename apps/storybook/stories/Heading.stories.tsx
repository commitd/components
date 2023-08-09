import { Column, Heading } from '@committed/ds'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta

export const Default: StoryFn<typeof Heading> = (args) => (
  <Heading {...args}>This is a Heading</Heading>
)

/**
 * The standard heading hX ass are supported, this, by default also adjusts the html tag
 */
export const As: StoryFn = () => (
  <Column>
    <Heading as="h1">Heading 1</Heading>
    <Heading as="h2">Heading 2</Heading>
    <Heading as="h3">Heading 3</Heading>
    <Heading as="h4">Heading 4</Heading>
    <Heading as="h5">Heading 5</Heading>
    <Heading as="h6">Heading 6</Heading>
  </Column>
)

/**
 * The display font can be used when a different heading style is required, say for blog posts.
 */
export const Display: StoryFn = () => (
  <Column>
    <Heading as="h1" font="display">
      Heading 1
    </Heading>
    <Heading as="h2" font="display">
      Heading 2
    </Heading>
    <Heading as="h3" font="display">
      Heading 3
    </Heading>
    <Heading as="h4" font="display">
      Heading 4
    </Heading>
    <Heading as="h5" font="display">
      Heading 5
    </Heading>
    <Heading as="h6" font="display">
      Heading 6
    </Heading>
  </Column>
)

/**
 * The underlying text component props are still available if the need to be used.
 */
export const TextProps: StoryFn = () => (
  <Heading as="h1" size="$5" css={{ color: '$primary' }} italic>
    Different h1
  </Heading>
)
