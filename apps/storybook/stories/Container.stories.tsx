import { Container } from '@committed/ds'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Container',
  component: Container,
} satisfies Meta<typeof Container>

type Story = StoryObj<typeof Container>

export const Default: Story = {
  args: {
    children: 'Container',
  },
}

// Change the viewport to see the different breakpoints
export const Nested: Story = {
  render: () => (
    <Container
      maxWidth="xl"
      css={{
        backgroundColor: '$warning.5',
        py: '$3',
        px: 0,
      }}
    >
      <Container
        maxWidth="lg"
        css={{
          backgroundColor: '$success.5',
          py: '$3',
          px: 0,
        }}
      >
        <Container
          maxWidth="md"
          css={{
            backgroundColor: '$info.5',
            py: '$3',
            px: 0,
          }}
        >
          <Container
            maxWidth="sm"
            css={{
              backgroundColor: '$error.5',
              py: '$3',
              textAlign: 'center',
            }}
          >
            Container
          </Container>
        </Container>
      </Container>
    </Container>
  ),
}

// Switch according to breakpoint automatically
export const Responsive: Story = {
  render: () => (
    <Container
      maxWidth="responsive"
      css={{
        backgroundColor: {
          xl: '$warning.5',
          lg: '$success.5',
          md: '$info.5',
          sm: '$error.5',
          base: '$primary.5',
        },
        py: '$3',
        textAlign: 'center',
      }}
    >
      Container
    </Container>
  ),
}
