import { composeStories } from '@storybook/react'
import * as stories from '../../../../../apps/storybook/stories/Menu.stories'
import { renderDark, renderLight, screen, userEvent } from '../../test'

const { Default, Nested, Destructive } = composeStories(stories)

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
    screen.queryByRole('menuitem', { name: /test/i }),
  ).not.toBeInTheDocument()
  userEvent.tab()
  expect(screen.getByRole('button')).toHaveFocus()
  userEvent.keyboard('{enter}')
  expect(
    screen.queryByRole('menuitem', { name: /test/i }),
  ).not.toBeInTheDocument()
  userEvent.click(screen.getByRole('menuitem', { name: /developer/i }))
  expect(screen.getByRole('menuitem', { name: /test/i })).toBeInTheDocument()
})

it('can render destructive menus', () => {
  renderDark(<Destructive />)
  expect(
    screen.queryByRole('menuitem', { name: /delete/i }),
  ).not.toBeInTheDocument()
  userEvent.tab()
  expect(screen.getByRole('button')).toHaveFocus()
  userEvent.keyboard('{enter}')
  expect(
    screen.queryByRole('menuitem', { name: /delete/i }),
  ).toBeInTheDocument()
})
