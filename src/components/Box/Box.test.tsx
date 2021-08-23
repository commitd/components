import React from 'react'
import { renderLight, renderDark } from 'test-utils'
import { Primary } from './Box.stories'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Primary />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Primary />)
  expect(asFragment()).toBeDefined()
})
