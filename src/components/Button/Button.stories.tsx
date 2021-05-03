import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button } from './Button'
import { Variants } from '../../docs/util'

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
  <>
    <Button css={{ m: '$3' }} size="small">
      Small
    </Button>
    <Button css={{ m: '$3' }} size="default">
      Default
    </Button>
    <Button css={{ m: '$3' }} size="large">
      Large
    </Button>
  </>
)

export const Variant = () => (
  <>
    <Button css={{ m: '$3' }} variant="primary">
      Primary
    </Button>
    <Button css={{ m: '$3' }} variant="secondary">
      Secondary
    </Button>
    <Button css={{ m: '$3' }} variant="tertiary">
      Tertiary
    </Button>
  </>
)

export const Destructive = () => (
  <>
    <Button css={{ m: '$3' }} destructive variant="primary">
      Primary
    </Button>
    <Button css={{ m: '$3' }} destructive variant="secondary">
      Secondary
    </Button>
    <Button css={{ m: '$3' }} destructive variant="tertiary">
      Tertiary
    </Button>
  </>
)

export const Disabled = () => (
  <>
    <Button css={{ m: '$3' }} disabled variant="primary">
      Primary
    </Button>
    <Button css={{ m: '$3' }} disabled variant="secondary">
      Secondary
    </Button>
    <Button css={{ m: '$3' }} disabled variant="tertiary">
      Tertiary
    </Button>
  </>
)

export const All = () => (
  <Variants
    component={Button}
    css={{ m: '$3' }}
    variant={['primary', 'secondary', 'tertiary']}
    size={['small', 'default', 'large']}
    destructive={[false, true]}
    disabled={[false, true]}
    children="Button"
  />
)
