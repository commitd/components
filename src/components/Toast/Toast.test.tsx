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
  renderLight(<WithClose />)
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
  userEvent.keyboard('{esc}')
  await waiting
})
