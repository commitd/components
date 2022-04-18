import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'
import { Grid, Row, Column } from '../'
import { Variants } from '../../docs/util'
import { Button } from './Button'

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
    destructive: {
      control: {
        type: 'boolean',
      },
      defaultValue: 'false',
      description:
        'Add the destructive flag for actions that are destructive, such as delete actions.',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'brand'],
      },
      description:
        'The button is available in different variants. For the primary action on the view use the `primary` variant, most others should be `secondary` which is the default. Use `tertiary` for paired no-action buttons and `brand` is for use in the AppBar.',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'default', 'large'],
      },
      description: 'The button is available in 3 different sizes.',
    },
    force: {
      control: {
        type: 'select',
        options: ['hover', 'focus', 'active'],
      },
      description: 'For internal use - to check button states by forcing them.',
    },
  },
} as Meta

export const Default: Story<ComponentProps<typeof Button>> = (args) => {
  return <Button {...args}>Button</Button>
}

/* Three size options are available */
export const Size = () => (
  <Row css={{ gap: '$3', mb: '$3' }}>
    <Button size="small">Small</Button>
    <Button size="default">Default</Button>
    <Button size="large">Large</Button>
  </Row>
)

/* Add `full-width` to make the button grow to take the full width */
export const FullWidth = () => (
  <Column css={{ gap: '$3' }}>
    <Button full-width size="small">
      Small
    </Button>
    <Button full-width size="default">
      Default
    </Button>
    <Button full-width size="large">
      Large
    </Button>
  </Column>
)

/* Three variants are supported,
 *
 * - `primary` use for the main action, try to only use one per page
 * - `secondary` use for other actions on the page
 * - `tertiary` use to pair with others as cancel or for icon buttons
 */
export const Variant = () => (
  <Row css={{ gap: '$3' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="tertiary">Tertiary</Button>
  </Row>
)

/** If the action is destructive, say a delete or an action that cannot be undone, add the `destructive` flag */
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

/** The `disabled` state is controlled in the standard way */
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
