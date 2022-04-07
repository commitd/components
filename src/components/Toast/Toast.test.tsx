import React from 'react'
import { composeStories } from '@storybook/testing-react'
import {
  renderDark,
  renderLight,
  userEvent,
  screen,
  waitForElementToBeRemoved,
} from 'test-utils'
import * as stories from './Toast.stories'

const { Default, WithClose, WithAction } = composeStories(stories)

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
  renderLight(<WithClose />)
  userEvent.click(screen.getByRole('button'))
  const panel = await screen.findByText('Toast Title')
  expect(panel).toBeInTheDocument()
  const waiting = waitForElementToBeRemoved(() =>
    screen.queryByText('Toast Title')
  )
  // FIXME Jest issue - TypeError: e.target.releasePointerCapture is not a function
  //userEvent.click(screen.getByRole('button', { name: /close/i }))
  // So use keyboard instead
  userEvent.keyboard('{esc}')
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
  // FIXME Jest issue - TypeError: e.target.releasePointerCapture is not a function
  // userEvent.click(screen.getByRole('button', { name: /undo/i }))
  // So use keyboard instead
  userEvent.keyboard('{esc}')
  await waiting
})
