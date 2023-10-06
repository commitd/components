import { Button, Column, Spinner } from '@committed/ds'
import { css } from '@committed/ss'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React from 'react'
import { Variants } from './utils'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['draw', 'spin', 'scale', 'pulse'],
      },
      defaultValue: 'draw',
      description: ' Change to the animation of the spinner',
    },
    active: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
      description: 'Boolean state to toggle the animation',
    },
  },
}
export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {}

/*
 * The active prop can be used to stop the animation, so it can, for example, be used as an always shown loading indicator.
 */
export const Active: StoryFn = () => {
  const [loading, setLoading] = React.useState(false)
  return (
    <Column>
      <Spinner css={{ my: 'auto' }} active={loading} />
      <Button variant="solid" onClick={() => setLoading(!loading)}>
        Toggle
      </Button>
    </Column>
  )
}

/*
 * When `@media (prefers-reduced-motion: reduce)` all animations are changed to the `pulse` variant.
 */
export const ReducedMotion: Story = {
  args: {
    variant: 'pulse',
    active: true,
  },
}

/*
 * Different animations variants are available.
 */
export const All: StoryFn = () => (
  <Variants<typeof Spinner>
    gridCss={css.raw({ gridTemplateColumns: '1fr 1fr' })}
    component={Spinner}
    variant={['spin', 'draw', 'scale', 'pulse']}
    css={[css.raw({ color: '$primary' }), css.raw({ color: '$secondary' })]}
  />
)
