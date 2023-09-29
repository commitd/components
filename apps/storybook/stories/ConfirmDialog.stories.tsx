import {
  Button,
  ConfirmDialog,
  ConfirmDialogAction,
  ConfirmDialogActions,
  ConfirmDialogActionsWrapper,
  ConfirmDialogCancel,
  ConfirmDialogContent,
  ConfirmDialogDescription,
  ConfirmDialogTitle,
  ConfirmDialogTrigger,
} from '@committed/ds'
import { action } from '@storybook/addon-actions'
import { expect, jest } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { screen, userEvent, waitFor, within } from '@storybook/testing-library'

const meta: Meta<typeof ConfirmDialog> = {
  title: 'Components/ConfirmDialog',
  component: ConfirmDialog,
  subcomponents: {
    ConfirmDialogContent,
    ConfirmDialogTitle,
    ConfirmDialogDescription,
    ConfirmDialogActions,
    ConfirmDialogActionsWrapper,
    ConfirmDialogAction,
    ConfirmDialogCancel,
    ConfirmDialogTrigger,
  },
}
export default meta
type Story = StoryObj<typeof ConfirmDialog>

export const Default: Story = {
  render: (args) => (
    <ConfirmDialog {...args}>
      <ConfirmDialogTrigger>
        <Button>Show Dialog</Button>
      </ConfirmDialogTrigger>
      <ConfirmDialogContent
        title="Confirm Dialog"
        description="Are you sure this is a confirm dialog?"
      >
        <ConfirmDialogActions confirm="Confirm" onConfirm={action('confirm')} />
      </ConfirmDialogContent>
    </ConfirmDialog>
  ),
}

/**
 *  The separate parts of the `ConfirmDialog` are also supplied to give more flexibility.
 *  This example shows their normal composition.
 **/
export const Parts: Story = {
  render: (args) => (
    <ConfirmDialog>
      <ConfirmDialogTrigger>
        <Button>Show Dialog</Button>
      </ConfirmDialogTrigger>
      <ConfirmDialogContent>
        <ConfirmDialogTitle>Confirm Dialog</ConfirmDialogTitle>
        <ConfirmDialogDescription>
          Are you sure this is a confirm dialog?
        </ConfirmDialogDescription>
        <ConfirmDialogActionsWrapper>
          <ConfirmDialogCancel onClick={action('cancel')}>
            Cancel
          </ConfirmDialogCancel>
          <ConfirmDialogAction onClick={action('confirm')}>
            Confirm
          </ConfirmDialogAction>
        </ConfirmDialogActionsWrapper>
      </ConfirmDialogContent>
    </ConfirmDialog>
  ),
}

/*
 * For destructive actions use a destructive button
 */
export const Destructive: Story = {
  render: (args) => (
    <ConfirmDialog {...args}>
      <ConfirmDialogTrigger>
        <Button>Show Dialog</Button>
      </ConfirmDialogTrigger>
      <ConfirmDialogContent
        title="Confirm Delete"
        description="Are you sure, this can not be undone?"
      >
        <ConfirmDialogActions
          confirm="Delete"
          onConfirm={action('delete')}
          destructive
        />
      </ConfirmDialogContent>
    </ConfirmDialog>
  ),
}

export const Surfaces: Story = {
  render: (args) => (
    <ConfirmDialog {...args}>
      <ConfirmDialogTrigger>
        <Button>Show Dialog</Button>
      </ConfirmDialogTrigger>
      <ConfirmDialogContent
        overlay="glass"
        surface="neutral"
        title="Confirm Dialog"
        description="Are you sure this is a confirm dialog?"
      >
        <ConfirmDialogActions confirm="Confirm" onConfirm={action('confirm')} />
      </ConfirmDialogContent>
    </ConfirmDialog>
  ),
}

const TestCase: StoryObj<{
  onCancel: () => void
  onConfirm: () => void
}> = {
  render: ({ onCancel, ...props }) => (
    <ConfirmDialog>
      <ConfirmDialogTrigger>
        <Button>Show Dialog</Button>
      </ConfirmDialogTrigger>
      <ConfirmDialogContent
        onEscapeKeyDown={onCancel}
        title="Confirm Dialog"
        description="Are you sure this is a confirm dialog?"
      >
        <ConfirmDialogActions
          onCancel={onCancel}
          confirm="Confirm"
          {...props}
        />
      </ConfirmDialogContent>
    </ConfirmDialog>
  ),
}

export const TestOnConfirm = {
  ...TestCase,
  args: {
    onCancel: jest.fn(),
    onConfirm: jest.fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const element = within(canvasElement)
    await step('calls onConfirm when confirmed', async () => {
      userEvent.click(element.getByRole('button'))
      await waitFor(() => {
        expect(screen.getByText('Confirm Dialog')).toBeInTheDocument()
      })
      userEvent.click(await screen.findByRole('button', { name: /confirm/i }))
      await waitFor(() => {
        expect(args.onConfirm).toHaveBeenCalled()
        expect(args.onCancel).not.toHaveBeenCalled()
      })
      expect(screen.queryByText('Confirm Dialog')).not.toBeInTheDocument()
    })
  },
}

export const TestOnCancelClick = {
  ...TestCase,
  args: {
    onCancel: jest.fn(),
    onConfirm: jest.fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const element = within(canvasElement)
    await step('calls onCancel when cancelled', async () => {
      userEvent.click(element.getByRole('button'))
      await waitFor(() => {
        expect(screen.getByText('Confirm Dialog')).toBeInTheDocument()
      })

      userEvent.click(await screen.findByRole('button', { name: /cancel/i }))

      await waitFor(() => {
        expect(args.onCancel).toHaveBeenCalled()
        expect(args.onConfirm).not.toHaveBeenCalled()
      })
      await waitFor(() => {
        expect(screen.queryByText('Confirm Dialog')).not.toBeInTheDocument()
      })
    })
  },
}

export const TestOnCancelEsc = {
  ...TestCase,
  args: {
    onCancel: jest.fn(),
    onConfirm: jest.fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const element = within(canvasElement)
    await step('calls onCancel on esc', async () => {
      userEvent.click(element.getByRole('button'))
      await waitFor(() => {
        expect(screen.getByText('Confirm Dialog')).toBeInTheDocument()
      })

      userEvent.type(screen.getByText('Confirm Dialog'), '{Escape}')
      await waitFor(() => {
        expect(args.onCancel).toHaveBeenCalled()
        expect(args.onConfirm).not.toHaveBeenCalled()
      })
      await waitFor(() => {
        expect(screen.queryByText('Confirm Dialog')).not.toBeInTheDocument()
      })
    })
  },
}
