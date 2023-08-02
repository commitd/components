import React from 'react'
import {
  ConfirmDialog,
  ConfirmDialogActions,
  ConfirmDialogContent,
  ConfirmDialogTrigger,
} from '.'
import { act, renderDark, renderLight, screen, userEvent } from '../../test'
import { Button } from '../Button'
import { Default } from './ConfirmDialog.stories'

const TestCase = ({
  onCancel,
  ...props
}: React.ComponentProps<typeof ConfirmDialogActions>) => (
  <ConfirmDialog>
    <ConfirmDialogTrigger>
      <Button>Show Dialog</Button>
    </ConfirmDialogTrigger>
    <ConfirmDialogContent
      onEscapeKeyDown={onCancel}
      title="Confirm Dialog"
      description="Are you sure this is a confirm dialog?"
    >
      <ConfirmDialogActions onCancel={onCancel} {...props} />
    </ConfirmDialogContent>
  </ConfirmDialog>
)

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})

it('calls onConfirm when confirmed', async () => {
  const onConfirm = jest.fn()
  const onCancel = jest.fn()
  renderLight(
    <TestCase confirm="Confirm" onCancel={onCancel} onConfirm={onConfirm} />
  )
  userEvent.click(screen.getByRole('button'))
  userEvent.click(await screen.findByRole('button', { name: /confirm/i }))
  expect(onConfirm).toHaveBeenCalled()
  expect(onCancel).not.toHaveBeenCalled()
  expect(screen.queryByText('Confirm Dialog')).not.toBeInTheDocument()
})

it('calls onCancel when cancelled', async () => {
  const onConfirm = jest.fn()
  const onCancel = jest.fn()
  renderLight(
    <TestCase confirm="Confirm" onCancel={onCancel} onConfirm={jest.fn()} />
  )
  userEvent.click(screen.getByRole('button'))
  userEvent.click(await screen.findByRole('button', { name: /cancel/i }))

  expect(onCancel).toHaveBeenCalled()
  expect(onConfirm).not.toHaveBeenCalled()
  expect(screen.queryByText('Confirm Dialog')).not.toBeInTheDocument()
})

it('calls onCancel on esc', () => {
  const onConfirm = jest.fn()
  const onCancel = jest.fn()
  renderLight(
    <TestCase confirm="Confirm" onCancel={onCancel} onConfirm={jest.fn()} />
  )
  userEvent.click(screen.getByRole('button'))
  act(() => {
    userEvent.type(screen.getByText('Confirm Dialog'), '{esc}')
  })
  expect(onCancel).toHaveBeenCalled()
  expect(onConfirm).not.toHaveBeenCalled()
  expect(screen.queryByText('Confirm Dialog')).not.toBeInTheDocument()
})
