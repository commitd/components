import { Meta } from '@storybook/react'
import React from 'react'
import { Container } from '.'

export default {
  title: 'Components/Container',
  component: Container,
} as Meta

export const Default: React.FC = () => <Container>Container</Container>

// Change the viewport to see the different breakpoints
export const Nested: React.FC = () => (
  <Container
    maxWidth="xl"
    css={{
      backgroundColor: '$red500',
      py: '$3',
      px: '$0',
    }}
  >
    <Container
      maxWidth="lg"
      css={{
        backgroundColor: '$green500',
        py: '$3',
        px: '$0',
      }}
    >
      <Container
        maxWidth="md"
        css={{
          backgroundColor: '$blue500',
          py: '$3',
          px: '$0',
        }}
      >
        <Container
          maxWidth="sm"
          css={{
            backgroundColor: '$orange500',
            py: '$3',
            textAlign: 'center',
          }}
        >
          Container
        </Container>
      </Container>
    </Container>
  </Container>
)

// Switch according to breakpoint
export const Responsive: React.FC = () => (
  <Container
    maxWidth={{ '@initial': 'sm', '@md': 'md', '@lg': 'lg', '@xl': 'xl' }}
    css={{
      backgroundColor: '$greyBg',
      py: '$3',
      textAlign: 'center',
    }}
  >
    Container
  </Container>
)
