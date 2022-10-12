import { composeStories } from '@storybook/testing-react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { renderDark, renderLight, screen, waitFor } from '../../test'
import * as stories from './Accordion.stories'

const { Default, Multiple, OneOpen } = composeStories(stories)

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default type="single" />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default type="multiple" />)
  expect(asFragment()).toBeDefined()
})

it('starts closed', () => {
  renderLight(<Multiple />)
  expect(screen.getByLabelText(/Item 1/i)).toBeInTheDocument()
  expect(
    screen.queryByText(/Here goes the content for the accordion item 1./i)
  ).not.toBeInTheDocument()
})

it('can open panel', async () => {
  renderLight(<Multiple />)
  expect(screen.getByLabelText(/Item 1/i)).toBeInTheDocument()
  expect(
    screen.queryByText(/Here goes the content for the accordion item 1./i)
  ).not.toBeInTheDocument()
  userEvent.click(screen.getByRole('button', { name: /Item 1/i }))
  await waitFor(() => {
    expect(
      screen.getByText(/Here goes the content for the accordion item 1./i)
    ).toBeInTheDocument()
  })
})

it('starts open with defaultValue set', () => {
  renderLight(<OneOpen />)
  expect(screen.getByLabelText(/Item 1/i)).toBeInTheDocument()
  expect(
    screen.queryByText(/Here goes the content for the accordion item 1./i)
  ).toBeInTheDocument()
})
