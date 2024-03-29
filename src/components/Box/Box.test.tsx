import React from 'react'
import { renderDark, renderLight } from '../../test'
import { Primary } from './Box.stories'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Primary />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Primary />)
  expect(asFragment()).toBeDefined()
})
