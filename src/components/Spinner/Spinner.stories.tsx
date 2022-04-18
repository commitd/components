import React from 'react'
import { Story, Meta } from '@storybook/react'
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
        options: ['draw', 'spin', 'scale'],
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
export const Active = () => {
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
 * Different animations variants are available.
 */
export const All = () => (
  <Variants
    gridCss={{ gap: '$3', gridTemplateColumns: '1fr 1fr 1fr' }}
    component={Spinner}
    variant={['spin', 'draw', 'scale']}
    css={[{ color: '$grey3' }, { color: '$brandYellow' }]}
  />
)
