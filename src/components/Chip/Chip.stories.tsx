import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Chip } from '.'
import { Row } from '../'
import { Variants } from '../../docs/util'

export default {
  title: 'Components/Chip',
  component: Chip,
} as Meta

export const Default: Story = (args) => <Chip {...args}>Chip</Chip>

/** Chips are available in 2 sizes, `default` and `small`  */
export const Sizes: Story = () => (
  <>
    <Chip variant="info" size="small">
      New
    </Chip>
    <Chip variant="error">Error</Chip>
  </>
)

/** If an `onClose` prop is provided a close button is added and clicking calls the onClose`  */
export const Closable: Story = () => (
  <Row css={{ gap: '$3', alignItems: 'center' }}>
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
  </Row>
)

export const All: Story = () => (
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
)
All.storyName = 'Variants'

/**
 * To make interactive add the `interactive` prop and delclare `as` `button` or `link` as required and use the relevant action prop `href` or `onClick`.
 */
export const Interactive: Story = () => (
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
)

export const Disabled: Story = () => (
  <Row css={{ gap: '$3', alignItems: 'center' }}>
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
  </Row>
)
