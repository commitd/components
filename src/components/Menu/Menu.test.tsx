import React from 'react'
import { renderDark, renderLight } from 'test-utils'
import { Default } from './Menu.stories'

it('renders light (closed) without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark (closed) without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})
