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

it('renders dark when opened without error', async () => {
  renderDark(<Default />)
  userEvent.tab()
  expect(screen.getByRole('button')).toHaveFocus()
  userEvent.keyboard('{enter}')
  expect(await screen.findByText('Cut')).toBeInTheDocument()
})

it('renders items with role menuitem', () => {
  renderDark(<Default />)
  userEvent.tab()
  userEvent.keyboard('{enter}')
  expect(screen.getByRole('menuitem', { name: /copy/i })).toBeInTheDocument()
})

it('can render nested menus', () => {
  renderDark(<Nested />)
  expect(
    screen.queryByRole('menuitem', { name: /test/i })
  ).not.toBeInTheDocument()
  userEvent.tab()
  expect(screen.getByRole('button')).toHaveFocus()
  userEvent.keyboard('{enter}')
  expect(
    screen.queryByRole('menuitem', { name: /test/i })
  ).not.toBeInTheDocument()
  userEvent.click(screen.getByRole('menuitem', { name: /developer/i }))
  expect(screen.getByRole('menuitem', { name: /test/i })).toBeInTheDocument()
})
