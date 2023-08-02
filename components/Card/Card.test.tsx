import React from 'react'
import { renderDark, renderLight } from '../../test'
import { Actions, Default } from './Card.stories'

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
