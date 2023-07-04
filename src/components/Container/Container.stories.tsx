import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Container } from '.'

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
}
export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = { render: () => <Container>Container</Container> }

// Change the viewport to see the different breakpoints
export const Nested: Story = {
  render: () => (
    <Container
      maxWidth="xl"
      css={{
        backgroundColor: '$red5',
        py: '$3',
        px: '$0',
      }}
    >
      <Container
        maxWidth="lg"
        css={{
          backgroundColor: '$green5',
          py: '$3',
          px: '$0',
        }}
      >
        <Container
          maxWidth="md"
          css={{
            backgroundColor: '$blue5',
            py: '$3',
            px: '$0',
          }}
        >
          <Container
            maxWidth="sm"
            css={{
              backgroundColor: '$orange5',
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
        backgroundColor: '$grey4',
        py: '$3',
        textAlign: 'center',
      }}
    >
      Container
    </Container>
  ),
}
