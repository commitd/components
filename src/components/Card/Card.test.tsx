import React from 'react'
import { renderLight, renderDark } from 'test-utils'
import { Default, Actions } from './Card.stories'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders with all sub components', () => {
  const { asFragment } = renderLight(<Actions />)
  expect(asFragment()).toBeDefined()
})
