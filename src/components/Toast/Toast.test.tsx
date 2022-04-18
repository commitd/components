import React from 'react'
import { renderDark, renderLight } from 'test-utils'
import { Default, WithClose, WithAction } from './Toast.stories'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders close without error', () => {
  const { asFragment } = renderLight(<WithClose />)
  expect(asFragment()).toBeDefined()
})

it('renders action without error', () => {
  const { asFragment } = renderLight(<WithAction />)
  expect(asFragment()).toBeDefined()
})
