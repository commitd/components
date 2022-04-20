import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Divider } from '.'
import { Column, Monospace, Row, Text } from '../'

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
      defaultValue: 'horizontal',
      description: 'Set the orientation of the divider',
    },
  },
} as Meta

export const Default: Story = (args) => <Divider {...args} />

/** Tag assigned with `as` prop */
export const AsHr: Story = () => (
  <Column css={{ maxWidth: '300px' }}>
    <Text>
      Lorem ipsum dolor sit amet. Aut aspernatur dolor sit voluptates
      repellendus et blanditiis alias eum laudantium enim. Ea quis quis est
      velit voluptas hic velit sint. Et iusto modi ea dolorem exercitationem et
      molestiae perferendis ut voluptatum cumque rem accusamus harum.
    </Text>
    <Divider as="hr" />
    <Text>
      Rem architecto iste ea deserunt libero sed sequi debitis aut modi quia aut
      voluptatem temporibus et autem consequatur. Est assumenda totam id
      assumenda modi ut libero voluptatibus est suscipit eius? Vel atque
      distinctio qui exercitationem velit et velit suscipit et consequatur
      fugiat qui similique fugit quo incidunt fugiat! Sit dolorem adipisci At
      beatae illum ad iure reprehenderit qui modi nihil quo recusandae delectus
      sed inventore aperiam non minus modi.
    </Text>
  </Column>
)

/**
 * Decorators can have horizontal (default) and vertical orientation
 */
export const Orientation: Story = () => (
  <Row>
    <Text css={{ textAlign: 'right' }}>
      Decorators can also be vertical. Aut aspernatur dolor sit voluptates
      repellendus et blanditiis alias eum laudantium enim. Ea quis quis est
      velit voluptas hic velit sint. Et iusto modi ea dolorem exercitationem et
      molestiae perferendis ut voluptatum cumque rem accusamus harum.
    </Text>
    <Divider orientation="vertical" />
    <Text css={{ textAlign: 'left' }}>
      Use css property height to adjust to requirements (default{' '}
      <Monospace>auto</Monospace>). Est assumenda totam id assumenda modi ut
      libero voluptatibus est suscipit eius? Vel atque distinctio qui
      exercitationem velit et velit suscipit et consequatur fugiat qui similique
      fugit quo incidunt fugiat! Sit dolorem adipisci At beatae illum ad iure
      reprehenderit qui modi nihil quo recusandae delectus sed inventore aperiam
      non minus modi.
    </Text>
  </Row>
)

export const Decorative: Story = () => (
  <Column css={{ textAlign: 'center' }}>
    <Text>Decorators can be marked decorative</Text>
    <Divider decorative />
    <Text>And will be ignored by assistive technologies</Text>
  </Column>
)

export const Sizes: Story = () => (
  <Column css={{ maxWidth: '100%' }}>
    <Text>
      Lorem ipsum dolor sit amet. Aut aspernatur dolor sit voluptates
      repellendus et blanditiis alias eum laudantium enim. Ea quis quis est
      velit voluptas hic velit sint. Et iusto modi ea dolorem exercitationem et
      molestiae perferendis ut voluptatum cumque rem accusamus harum.
    </Text>
    <Divider size="full" />
    <Text>
      Rem architecto iste ea deserunt libero sed sequi debitis aut modi quia aut
      voluptatem temporibus et autem consequatur. Est assumenda totam id
      assumenda modi ut libero voluptatibus est suscipit eius? Vel atque
    </Text>
    <Text>
      Lorem ipsum dolor sit amet. Aut aspernatur dolor sit voluptates
      repellendus et blanditiis alias eum laudantium enim. Ea quis quis est
      velit voluptas hic velit sint. Et iusto modi ea dolorem exercitationem et
      molestiae perferendis ut voluptatum cumque rem accusamus harum.
    </Text>
    <Divider size="most" />
    <Text>
      Rem architecto iste ea deserunt libero sed sequi debitis aut modi quia aut
      voluptatem temporibus et autem consequatur. Est assumenda totam id
      assumenda modi ut libero voluptatibus est suscipit eius? Vel atque
    </Text>
    <Divider size="medium" />
    <Text>
      Lorem ipsum dolor sit amet. Aut aspernatur dolor sit voluptates
      repellendus et blanditiis alias eum laudantium enim. Ea quis quis est
      velit voluptas hic velit sint. Et iusto modi ea dolorem exercitationem et
      molestiae perferendis ut voluptatum cumque rem accusamus harum.
    </Text>
    <Divider size="small" />
    <Text>
      Rem architecto iste ea deserunt libero sed sequi debitis aut modi quia aut
      voluptatem temporibus et autem consequatur. Est assumenda totam id
      assumenda modi ut libero voluptatibus est suscipit eius? Vel atque
    </Text>
  </Column>
)

export const SizesHorizontal: Story = () => (
  <Row css={{ height: '300px' }}>
    <Text>
      Lorem ipsum dolor sit amet. Aut aspernatur dolor sit voluptates
      repellendus et blanditiis alias eum laudantium enim. Ea quis quis est Rem
      architecto iste ea deserunt libero sed sequi debitis aut modi quia aut
      voluptatem temporibus et autem consequatur. Est assumenda totam id
    </Text>
    <Divider orientation="vertical" size="full" />
    <Text>
      Rem architecto iste ea deserunt libero sed sequi debitis aut modi quia aut
      voluptatem temporibus et autem consequatur. Est assumenda totam id
      repellendus et blanditiis alias eum laudantium enim. Ea quis quis est
    </Text>
    <Divider orientation="vertical" size="most" />
    <Text>
      Rem architecto iste ea deserunt libero sed sequi debitis aut modi quia aut
      voluptatem temporibus et autem consequatur. Est assumenda totam id
      assumenda modi ut libero voluptatibus est suscipit eius? Vel atque
    </Text>
    <Divider orientation="vertical" size="medium" />
    <Text>
      Lorem ipsum dolor sit amet. Aut aspernatur dolor sit voluptates
      repellendus et blanditiis alias eum laudantium enim. Ea quis quis est
    </Text>
    <Divider orientation="vertical" size="small" />
    <Text>
      Rem architecto iste ea deserunt libero sed sequi debitis aut modi quia aut
      voluptatem temporibus et autem consequatur. Est assumenda totam id
    </Text>
  </Row>
)
