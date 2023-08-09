import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Column, Heading } from '../../../packages/ds/src/components'
import { Subheading } from '../../../packages/ds/src/components/Subheading'

export default {
  title: 'Components/Subheading',
  component: Subheading,
} as Meta

export const Default: StoryObj<typeof Subheading> = {
  args: {
    children: 'This is a subheading',
  },
}

/**
 * The standard heading hX variants are supported, this, by default also adjusts the html tag
 */
export const Variants: StoryFn = () => (
  <Column>
    <Subheading variant="h1">Subheading 1</Subheading>
    <Subheading variant="h2">Subheading 2</Subheading>
    <Subheading variant="h3">Subheading 3</Subheading>
    <Subheading variant="h4">Subheading 4</Subheading>
    <Subheading variant="h5">Subheading 5</Subheading>
    <Subheading variant="h6">Subheading 6</Subheading>
  </Column>
)

/**
 * The display font can be used when a different heading style is required, say for blog posts.
 */
export const InUse: StoryFn = () => (
  <Column>
    <Heading variant="h1">Heading 1</Heading>
    <Subheading variant="h1">This is the subheading for h1</Subheading>
    <Heading variant="h2">Heading 2</Heading>
    <Subheading variant="h2">This is the subheading for h2</Subheading>
    <Heading variant="h3">Heading 3</Heading>
    <Subheading variant="h3">This is the subheading for h3</Subheading>
    <Heading variant="h4">Heading 4</Heading>
    <Subheading variant="h4">This is the subheading for h4</Subheading>
    <Heading variant="h5">Heading 5</Heading>
    <Subheading variant="h5">This is the subheading for h5</Subheading>
    <Heading variant="h6">Heading 6</Heading>
    <Subheading variant="h6">This is the subheading for h6</Subheading>
  </Column>
)

/**
 * The the subheading renders as a `div` by default, use the as props to render as a heading element.
 */
export const Polymorphic: StoryFn = () => (
  <Column>
    <Heading variant="h1">Heading 1</Heading>
    <Subheading variant="h1" as="h2">
      This h2 the subheading for h1
    </Subheading>
    <Heading variant="h2">Heading 2</Heading>
    <Subheading variant="h2" as="h3">
      This h3 the subheading for h2
    </Subheading>
    <Heading variant="h3">Heading 3</Heading>
    <Subheading variant="h3" as="h4">
      This h4 the subheading for h3
    </Subheading>
    <Heading variant="h4">Heading 4</Heading>
    <Subheading variant="h4" as="h5">
      This h5 the subheading for h4
    </Subheading>
    <Heading variant="h5">Heading 5</Heading>
    <Subheading variant="h5" as="h6">
      This h6 the subheading for h5
    </Subheading>
    <Heading variant="h6">Heading 6</Heading>
    <Subheading variant="h6">This div the subheading for h6</Subheading>
  </Column>
)
