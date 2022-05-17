import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Spinner } from '.'
import { Button, Column } from '../'
import { Variants } from '../../docs/util'

export default {
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
} as Meta

export const Default: Story = (args) => <Spinner {...args} />

/*
 * The active prop can be used to stop the animation, so it can, for example, be used as an always shown loading indicator.
 */
export const Active: Story = () => {
  const [loading, setLoading] = React.useState(false)
  return (
    <Column>
      <Spinner css={{ my: 'auto' }} active={loading} />
      <Button variant="primary" onClick={() => setLoading(!loading)}>
        Toggle
      </Button>
    </Column>
  )
}

/*
 * When `@media (prefers-reduced-motion: reduce)` all annitations are changed to the `pulse` variant.
 */
export const ReducedMotion: Story = Default.bind({})
ReducedMotion.args = {
  variant: 'pluse',
  active: true,
}

/*
 * Different animations variants are available.
 */
export const All: Story = () => (
  <Variants
    gridCss={{ gap: '$3', gridTemplateColumns: '1fr 1fr 1fr' }}
    component={Spinner}
    variant={['spin', 'draw', 'scale', 'pulse']}
    css={[{ color: '$grey3' }, { color: '$brandYellow' }]}
  />
)
