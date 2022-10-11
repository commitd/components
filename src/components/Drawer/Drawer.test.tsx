import React from 'react'
import {
  renderDark,
  renderLight,
  renderPlain,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from '../../test'
import { Controllable, Default } from './Drawer.stories'

const defaultDrawerText = 'This is a Drawer'
const controlledDrawerText = 'This is a controlled drawer'

it('renders when closed', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders light panel without error', async () => {
  renderLight(<Default />)
  userEvent.click(screen.getByRole('button'))
  const panel = await screen.findByText(defaultDrawerText)
  expect(panel).toBeInTheDocument()
})

it('renders default close button', async () => {
  renderPlain(<Controllable />)
  userEvent.click(screen.getByRole('button', { name: /show/i }))
  const panel = await screen.findByText(controlledDrawerText)
  expect(panel).toBeInTheDocument()
  const waiting = waitForElementToBeRemoved(() =>
    screen.queryByText(controlledDrawerText)
  )
  userEvent.click(screen.getByRole('button', { name: /close/i }))
  await waiting
})

it('renders dark panel and closes', async () => {
  renderDark(<Default />)
  userEvent.click(screen.getByRole('button'))
  const panel = await screen.findByText(defaultDrawerText)
  expect(panel).toBeInTheDocument()
  const waiting = waitForElementToBeRemoved(() =>
    screen.queryByText(defaultDrawerText)
  )
  userEvent.type(panel, '{esc}')
  await waiting
})
