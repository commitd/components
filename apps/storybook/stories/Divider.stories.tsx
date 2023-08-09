import { Column, Inline, Monospace, Stack, Text } from '@committed/ds'
import { Divider } from '@committed/ds/src/components/Divider'
import { Meta, StoryFn, StoryObj } from '@storybook/react'

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
} satisfies Meta<typeof Divider>

export const Default: StoryObj<typeof Divider> = {}

/** Tag assigned with `as` prop */
export const AsHr: StoryFn = () => (
  <Column css={{ maxWidth: '300px' }}>
    <Text>
      Lorem ipsum dolor sit amet. Aut aspernatur dolor sit voluptates
      repellendus et blanditiis alias eum laudantium enim. Ea quis quis est
      velit voluptas hic velit sint. Et iusto modi ea dolorem exercitationem et
      molestiae perferendis ut voluptatum cumque rem accusamus harum.
    </Text>
    <Divider asChild>
      <hr />
    </Divider>
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
export const Orientation: StoryFn = () => (
  <Inline>
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
  </Inline>
)

export const Decorative: StoryFn = () => (
  <Column css={{ textAlign: 'center' }}>
    <Text>Decorators can be marked decorative</Text>
    <Divider decorative />
    <Text>And will be ignored by assistive technologies</Text>
  </Column>
)

export const Sizes: StoryFn = () => (
  <Stack>
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
  </Stack>
)

export const SizesHorizontal: StoryFn = () => (
  <Inline css={{ height: '300px' }}>
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
  </Inline>
)
