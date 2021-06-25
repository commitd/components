import React from 'react'
import { renderDark, renderLight, screen, userEvent } from 'test-utils'
import { Default, Nested } from './Menu.stories'

it('renders light (closed) without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark (closed) without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark when opened without error', () => {
  renderDark(<Default />)
  userEvent.click(screen.getByRole('button'))
  expect(screen.getByText('Cut')).toBeInTheDocument()
})

it('renders items with role menuitem', () => {
  renderDark(<Default />)
  userEvent.click(screen.getByRole('button'))
  expect(screen.getByRole('menuitem', { name: /copy/i })).toBeInTheDocument()
})

it('can render nested menus', () => {
  renderDark(<Nested />)
  expect(
    screen.queryByRole('menuitem', { name: /test/i })
  ).not.toBeInTheDocument()
  userEvent.click(screen.getByRole('button'))
  expect(
    screen.queryByRole('menuitem', { name: /test/i })
  ).not.toBeInTheDocument()
  userEvent.click(screen.getByRole('menuitem', { name: /developer/i }))
  expect(screen.getByRole('menuitem', { name: /test/i })).toBeInTheDocument()
})
