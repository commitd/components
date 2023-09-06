import { Chip, Inline } from '@committed/ds'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import { Variants } from './utils'

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
      <Chip color="$info" size="small">
        New
      </Chip>
      <Chip color="$error">Error</Chip>
    </Inline>
  ),
}

/** If an `onClose` prop is provided a close button is added and clicking calls the onClose`  */
export const Closable: Story = {
  render: () => (
    <Inline css={{ alignItems: 'center' }}>
      <Chip closable color="$info" size="small" onClick={action('close')}>
        Close
      </Chip>
      <Chip closable color="$error" onClick={action('close')}>
        Close
      </Chip>
    </Inline>
  ),
}

export const All: Story = {
  name: 'colors',
  render: () => (
    <Variants
      component={Chip}
      color={[
        '$brand',
        '$primary',
        '$error',
        '$success',
        '$warn',
        '$info',
        '$neutral',
        // '$ghost',
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
      component={Chip}
      color={[
        '$brand',
        '$primary',
        '$error',
        '$success',
        '$warn',
        '$info',
        '$neutral',
        //'$ghost',
      ]}
      children="Chip"
      onClick={action('chip')}
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <Inline css={{ alignItems: 'center' }}>
      <Chip onClick={action('disabled')} disabled color="$info" size="small">
        Disabled
      </Chip>
      <Chip onClick={action('disabled')} disabled color="$error">
        Disabled
      </Chip>
      <Chip onClick={action('disabled')} color="$success" disabled size="small">
        Disabled
      </Chip>
      <Chip color="$primary" disabled onClick={action('disabled')}>
        Disabled
      </Chip>
      <Chip
        closable
        onClick={action('disabled')}
        disabled
        color="$info"
        size="small"
      >
        Disabled
      </Chip>
      <Chip closable onClick={action('disabled')} disabled color="$error">
        Disabled
      </Chip>
      <Chip
        closable
        onClick={action('disabled')}
        color="$success"
        disabled
        size="small"
      >
        Disabled
      </Chip>
      <Chip color="$primary" disabled closable onClick={action('disabled')}>
        Disabled
      </Chip>
    </Inline>
  ),
}
