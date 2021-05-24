import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button } from './Button'
import { Variants } from '../../docs/util'
import { Row, Grid } from '../'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    /**
     * react-docgen-typescript fails us here.
     * @see https://github.com/storybookjs/storybook/issues/12641#issuecomment-708603353
     */
    as: {
      control: {
        type: 'select',
        options: ['button', 'a'],
      },
      defaultValue: 'button',
      description:
        'Can be any HTML element, but can also be any component. Typically only used with "button" or "a".',
    },
  },
} as Meta

export const Default = () => {
  return <Button>Button</Button>
}

const Template: Story = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { children: 'Button' }

export const Size = () => (
  <Row css={{ gap: '$3' }}>
    <Button size="small">Small</Button>
    <Button size="default">Default</Button>
    <Button size="large">Large</Button>
  </Row>
)

export const Variant = () => (
  <Row css={{ gap: '$3' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="tertiary">Tertiary</Button>
  </Row>
)

export const Destructive = () => (
  <Row css={{ gap: '$3' }}>
    <Button destructive variant="primary">
      Primary
    </Button>
    <Button destructive variant="secondary">
      Secondary
    </Button>
    <Button destructive variant="tertiary">
      Tertiary
    </Button>
  </Row>
)

export const Disabled = () => (
  <Row css={{ gap: '$3' }}>
    <Button disabled variant="primary">
      Primary
    </Button>
    <Button disabled variant="secondary">
      Secondary
    </Button>
    <Button disabled variant="tertiary">
      Tertiary
    </Button>
  </Row>
)

/**
 * A `brand` variant is also supplied for particular uses cases, like in the AppBar, where changing to the dark theme does not affect the coloring.
 */
export const Brand = () => <Button variant="brand">Brand</Button>

/**
 * This uses the force prop to simulate hover, focus and active states so they can be compared at the same time.
 * This prop is not intended for normal use and the buttons here will not interact normally.
 */
export const State = () => (
  <Grid css={{ gap: '$3', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
    <Button variant="primary">Button</Button>
    <Button variant="primary" force="hover">
      Button
    </Button>
    <Button variant="primary" force="focus">
      Button
    </Button>
    <Button variant="primary" force="active">
      Button
    </Button>
    <Button variant="secondary">Button</Button>
    <Button variant="secondary" force="hover">
      Button
    </Button>
    <Button variant="secondary" force="focus">
      Button
    </Button>
    <Button variant="secondary" force="active">
      Button
    </Button>
    <Button variant="tertiary">Button</Button>
    <Button variant="tertiary" force="hover">
      Button
    </Button>
    <Button variant="tertiary" force="focus">
      Button
    </Button>
    <Button variant="tertiary" force="active">
      Button
    </Button>
  </Grid>
)

export const All = () => (
  <Variants
    component={Button}
    variant={['primary', 'secondary', 'tertiary']}
    size={['small', 'default', 'large']}
    destructive={[false, true]}
    disabled={[false, true]}
    children="Button"
  />
)
