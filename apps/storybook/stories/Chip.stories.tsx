import { Chip, Inline } from '@committed/ds'
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/addon-docs'
import { expect, jest } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
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
      <Chip colorPalette="$info" size="small">
        New
      </Chip>
      <Chip colorPalette="$error">Error</Chip>
    </Inline>
  ),
}

/**
 * To make interactive add an `onClick` handler.
 */
export const Interactive: Story = {
  render: () => (
    <Variants
      component={Chip}
      colorPalette={[
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

/** If an `onClick` prop is provided and `closeable` a close button is added and clicking calls the onClick  */
export const Closable: Story = {
  render: () => (
    <Inline css={{ alignItems: 'center' }}>
      <Chip
        closable
        colorPalette="$info"
        size="small"
        onClick={action('close')}
      >
        Close
      </Chip>
      <Chip closable colorPalette="$error" onClick={action('close')}>
        Close
      </Chip>
    </Inline>
  ),
}

export const All: Story = {
  name: 'colorPalettes',
  render: () => (
    <Variants
      component={Chip}
      colorPalette={[
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

export const Disabled: Story = {
  render: () => (
    <Inline css={{ alignItems: 'center' }}>
      <Chip
        onClick={action('disabled')}
        disabled
        colorPalette="$info"
        size="small"
      >
        Disabled
      </Chip>
      <Chip onClick={action('disabled')} disabled colorPalette="$error">
        Disabled
      </Chip>
      <Chip
        onClick={action('disabled')}
        colorPalette="$success"
        disabled
        size="small"
      >
        Disabled
      </Chip>
      <Chip colorPalette="$primary" disabled onClick={action('disabled')}>
        Disabled
      </Chip>
      <Chip
        closable
        onClick={action('disabled')}
        disabled
        colorPalette="$info"
        size="small"
      >
        Disabled
      </Chip>
      <Chip
        closable
        onClick={action('disabled')}
        disabled
        colorPalette="$error"
      >
        Disabled
      </Chip>
      <Chip
        closable
        onClick={action('disabled')}
        colorPalette="$success"
        disabled
        size="small"
      >
        Disabled
      </Chip>
      <Chip
        colorPalette="$primary"
        disabled
        closable
        onClick={action('disabled')}
      >
        Disabled
      </Chip>
    </Inline>
  ),
}

export const TestInteractive: Story = {
  ...Default,
  args: {
    ...Default.args,
    onClick: jest.fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const screen = within(canvasElement)

    await step('Starts open', async () => {
      userEvent.click(screen.getByRole('button'))
      await waitFor(() => expect(args.onClick).toHaveBeenCalled())
    })
  },
}

export const TestClosable: Story = {
  ...Default,
  args: {
    ...Default.args,
    closable: true,
    onClick: jest.fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const screen = within(canvasElement)

    await step('Starts open', async () => {
      userEvent.click(screen.getByRole('button'))
      await waitFor(() => expect(args.onClick).toHaveBeenCalled())
    })
  },
}
