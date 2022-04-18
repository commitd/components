import { composeStories } from '@storybook/testing-react'
import React from 'react'
import {
  act,
  fireEvent,
  renderDark,
  renderLight,
  screen,
  userEvent,
} from 'test-utils'
import * as stories from './ContextMenu.stories'

const { Default, Nested, Destructive } = composeStories(stories)

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark when opened without error', () => {
  renderDark(<Default />)
  act(() => {
    fireEvent.contextMenu(screen.getByText('Right click anywhere'))
  })
  expect(screen.getByText('Cut')).toBeInTheDocument()
})

it('renders items with role menuitem', () => {
  renderDark(<Default />)
  act(() => {
    fireEvent.contextMenu(screen.getByText('Right click anywhere'))
  })
  expect(screen.getByRole('menuitem', { name: /copy/i })).toBeInTheDocument()
})

it('can render nested menus', () => {
  renderDark(<Nested />)
  expect(
    screen.queryByRole('menuitem', { name: /test/i })
  ).not.toBeInTheDocument()
  act(() => {
    fireEvent.contextMenu(screen.getByText('Right click anywhere'))
  })
  expect(
    screen.queryByRole('menuitem', { name: /test/i })
  ).not.toBeInTheDocument()
  userEvent.click(screen.getByRole('menuitem', { name: /developer/i }))
  expect(screen.getByRole('menuitem', { name: /test/i })).toBeInTheDocument()
})

it('can render destructive menus', () => {
  renderDark(<Destructive />)
  expect(
    screen.queryByRole('menuitem', { name: /delete/i })
  ).not.toBeInTheDocument()
  act(() => {
    fireEvent.contextMenu(screen.getByText('Right click anywhere'))
  })
  expect(
    screen.queryByRole('menuitem', { name: /delete/i })
  ).toBeInTheDocument()
})
