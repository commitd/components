import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Chip } from '.'
import { Variants } from '../../docs/util'
import { Inline } from '../Inline'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
}
export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {
  args: {
    children: 'Chip',
  },
}

/** Chips are available in 2 sizes, `default` and `small`  */
export const Sizes: Story = {
  render: () => (
    <Inline css={{ alignItems: 'center' }}>
      <Chip variant="info" size="small">
        New
      </Chip>
      <Chip variant="error">Error</Chip>
    </Inline>
  ),
}

/** If an `onClose` prop is provided a close button is added and clicking calls the onClose`  */
export const Closable: Story = {
  render: () => (
    <Inline css={{ alignItems: 'center' }}>
      <Chip variant="info" size="small" onClose={action('close')}>
        Close
      </Chip>
      <Chip variant="error" onClose={action('close')}>
        Close
      </Chip>
      <Chip
        as="button"
        variant="info"
        interactive
        onClick={action('chip')}
        size="small"
        onClose={action('close')}
      >
        Click
      </Chip>
      <Chip
        as="button"
        variant="error"
        interactive
        onClick={action('chip')}
        onClose={action('close')}
      >
        Click
      </Chip>
    </Inline>
  ),
}

export const All: Story = {
  name: 'Variants',
  render: () => (
    <Variants
      component={Chip}
      variant={[
        'brand',
        'primary',
        'error',
        'success',
        'warning',
        'info',
        'grey',
        'ghost',
      ]}
      children="Chip"
    />
  ),
}

/**
 * To make interactive add the `interactive` prop and delclare `as` `button` or `link` as required and use the relevant action prop `href` or `onClick`.
 */
export const Interactive: Story = {
  render: () => (
    <Variants
      as="button"
      component={Chip}
      variant={[
        'brand',
        'primary',
        'error',
        'success',
        'warning',
        'info',
        'grey',
        'ghost',
      ]}
      interactive
      children="Chip"
      onClick={action('chip')}
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <Inline css={{ alignItems: 'center' }}>
      <Chip
        as="button"
        onClick={action('disabled')}
        disabled
        variant="info"
        size="small"
      >
        Disabled
      </Chip>
      <Chip as="button" onClick={action('disabled')} disabled variant="error">
        Disabled
      </Chip>
      <Chip
        as="button"
        onClick={action('disabled')}
        variant="success"
        disabled
        interactive
        size="small"
      >
        Disabled
      </Chip>
      <Chip
        as="button"
        variant="primary"
        interactive
        disabled
        onClick={action('disabled')}
        onClose={action('disabled')}
      >
        Disabled
      </Chip>
    </Inline>
  ),
}
