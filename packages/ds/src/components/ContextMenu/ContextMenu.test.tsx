import { composeStories } from '@storybook/react'
import * as stories from '../../../../../apps/storybook/stories/ContextMenu.stories'
import {
  act,
  cleanup,
  fireEvent,
  renderDark,
  renderLight,
  screen,
  userEvent,
} from '../../test'

const { Default, Nested, Destructive } = composeStories(stories)

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark when opened without error', async () => {
  renderDark(<Default />)
  act(() => {
    fireEvent.contextMenu(screen.getByText('Right click anywhere'))
  })
  await act(async () => {
    /* @floating-ui fix */
  })
  expect(screen.getByText('Cut')).toBeInTheDocument()
  cleanup()
})

it('renders items with role menuitem', async () => {
  renderDark(<Default />)
  act(() => {
    fireEvent.contextMenu(screen.getByText('Right click anywhere'))
  })
  await act(async () => {
    /* @floating-ui fix */
  })
  expect(screen.getByRole('menuitem', { name: /copy/i })).toBeInTheDocument()
})

it('can render nested menus', async () => {
  renderDark(<Nested />)
  expect(
    screen.queryByRole('menuitem', { name: /test/i }),
  ).not.toBeInTheDocument()
  act(() => {
    fireEvent.contextMenu(screen.getByText('Right click anywhere'))
  })
  await act(async () => {
    /* @floating-ui fix */
  })
  expect(
    screen.queryByRole('menuitem', { name: /test/i }),
  ).not.toBeInTheDocument()
  userEvent.click(screen.getByRole('menuitem', { name: /developer/i }))
  expect(screen.getByRole('menuitem', { name: /test/i })).toBeInTheDocument()
})

it('can render destructive menus', async () => {
  renderDark(<Destructive />)
  expect(
    screen.queryByRole('menuitem', { name: /delete/i }),
  ).not.toBeInTheDocument()
  act(() => {
    fireEvent.contextMenu(screen.getByText('Right click anywhere'))
  })
  await act(async () => {
    /* @floating-ui fix */
  })
  expect(
    screen.queryByRole('menuitem', { name: /delete/i }),
  ).toBeInTheDocument()
})
