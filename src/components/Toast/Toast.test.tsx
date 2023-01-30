import { composeStories } from '@storybook/testing-react'
import React, { useState } from 'react'
import {
  renderDark,
  renderLight,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from '../../test'
import { Button } from '../Button'
import { Toast } from './Toast'
import * as stories from './Toast.stories'

const { Default, UseToast } = composeStories(stories)

const WithAction = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        Open Toast
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title="Deleted ID#1928"
        description="Was this intentional?"
        altText="Undo"
        duration={9999999}
      >
        <Button variant="primary" size="small">
          Undo
        </Button>
      </Toast>
    </>
  )
}

it('renders light without error', async () => {
  renderLight(<Default />)
  userEvent.click(screen.getByRole('button'))
  const panel = await screen.findByText('Toast Title')
  expect(panel).toBeInTheDocument()
})

it('renders dark without error', async () => {
  renderDark(<Default />)
  userEvent.click(screen.getByRole('button'))
  const panel = await screen.findByText('Toast Title')
  expect(panel).toBeInTheDocument()
})

it('renders close without error', async () => {
  renderLight(<Default close={true} />)
  userEvent.click(screen.getByRole('button'))
  const panel = await screen.findByText('Toast Title')
  expect(panel).toBeInTheDocument()
  const waiting = waitForElementToBeRemoved(() =>
    screen.queryByText('Toast Title')
  )
  userEvent.click(screen.getByRole('button', { name: /close/i }))
  await waiting
})

it('renders action without error', async () => {
  renderDark(<WithAction />)
  userEvent.click(screen.getByRole('button'))
  const panel = await screen.findByText('Deleted ID#1928')
  expect(panel).toBeInTheDocument()
  const waiting = waitForElementToBeRemoved(() =>
    screen.queryByText('Deleted ID#1928')
  )
  userEvent.click(screen.getByRole('button', { name: /undo/i }))
  await waiting
})

it('Can close with esc', async () => {
  renderLight(<Default close={true} />)
  userEvent.click(screen.getByRole('button'))
  const panel = await screen.findByText('Toast Title')
  expect(panel).toBeInTheDocument()
  const waiting = waitForElementToBeRemoved(() =>
    screen.queryByText('Toast Title')
  )
  userEvent.keyboard('{esc}')
  await waiting
})

it('Can close with esc and actions', async () => {
  renderDark(<WithAction />)
  userEvent.click(screen.getByRole('button'))
  const panel = await screen.findByText('Deleted ID#1928')
  expect(panel).toBeInTheDocument()
  const waiting = waitForElementToBeRemoved(() =>
    screen.queryByText('Deleted ID#1928')
  )
  userEvent.click(screen.getByRole('button', { name: /undo/i }))
  await waiting
})

it('renders useToast', async () => {
  renderLight(<UseToast />)
  userEvent.click(screen.getByRole('button'))
  const panel = await screen.findByText('Hello Toast')
  expect(panel).toBeInTheDocument()
})
